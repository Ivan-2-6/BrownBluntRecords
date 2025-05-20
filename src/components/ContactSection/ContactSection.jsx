import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

// Social media icons (using SVG for better quality and styling)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14.5c2.5-1 5.5-1 8 0"></path>
    <path d="M6.5 12c3.5-1 7.5-1 11 0"></path>
    <path d="M8 9.5c2.5-1 5.5-1 8 0"></path>
  </svg>
);

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.noiseOverlay}></div>
      <div className={styles.gradientOverlay}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          {/* Left Column */}
          <motion.div className={styles.leftColumn} variants={containerVariants}>
            <motion.h2 className={styles.heading} variants={itemVariants}>
              Let's Connect
            </motion.h2>
            
            <motion.p className={styles.subheading} variants={itemVariants}>
              We'd love to hear from you.
            </motion.p>
            
            <motion.div className={styles.emailContainer} variants={itemVariants}>
              <a href="mailto:contact@bbr.com" className={styles.email}>
                contact@bbr.com
              </a>
            </motion.div>
            
            <motion.div className={styles.socialIcons} variants={itemVariants}>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </motion.a>
              
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </motion.a>
              
              <motion.a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div className={styles.rightColumn} variants={containerVariants}>
            {isSubmitted ? (
              <motion.div 
                className={styles.successMessage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                className={styles.contactForm} 
                onSubmit={handleSubmit}
                variants={containerVariants}
              >
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={styles.formInput}
                    required
                    aria-label="Full Name"
                  />
                </motion.div>
                
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={styles.formInput}
                    required
                    aria-label="Email Address"
                  />
                </motion.div>
                
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={styles.formTextarea}
                    required
                    rows="5"
                    aria-label="Your Message"
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className={styles.submitButton}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Send Message"
                >
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;