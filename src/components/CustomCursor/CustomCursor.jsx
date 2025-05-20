import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  // State for cursor position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State for cursor click
  const [isClicking, setIsClicking] = useState(false);
  // State for hover effect
  const [isHovering, setIsHovering] = useState(false);
  // State to check if device is touch-enabled
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();

    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Hover detection
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleElementHover);

    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  // If touch device, don't render custom cursor
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={styles.cursor}
        style={{
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - 10, // Center the cursor (assuming 20px width)
          y: mousePosition.y - 10, // Center the cursor (assuming 20px height)
          scale: isClicking ? 0.85 : isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      
      {/* Optional trailing ring cursor */}
      <motion.div
        className={styles.cursorRing}
        animate={{
          x: mousePosition.x - 20, // Center the ring (assuming 40px width)
          y: mousePosition.y - 20, // Center the ring (assuming 40px height)
          scale: isClicking ? 0.9 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
          mass: 0.8,
          delay: 0.03, // Slight delay for trailing effect
        }}
      />
    </>
  );
};

export default CustomCursor;