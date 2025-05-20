import React from 'react';
import { motion } from 'framer-motion';
import styles from './ArtistsSection.module.css';

// Sample artist data (replace with your actual data)
const artists = [
  {
    id: 1,
    name: 'Luna Drip',
    role: 'Lo-fi Producer',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Echo Verse',
    role: 'Vocalist',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Midnight Pulse',
    role: 'DJ / Producer',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Astral Wave',
    role: 'Electronic Artist',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Neon Drift',
    role: 'Hip-Hop Producer',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Synth Collective',
    role: 'Experimental Group',
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=2076&auto=format&fit=crop'
  }
];

const ArtistsSection = () => {
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item variants for individual card animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="artists" className={styles.artistsSection}>
      <h2 className={styles.sectionTitle}>Our Artists</h2>
      
      <motion.div 
        className={styles.artistsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {artists.map((artist) => (
          <motion.div 
            key={artist.id} 
            className={styles.artistCard}
            variants={itemVariants}
          >
            <div className={styles.imageContainer}>
              <img 
                src={artist.image} 
                alt={artist.name} 
                className={styles.artistImage} 
              />
            </div>
            <h3 className={styles.artistName}>{artist.name}</h3>
            <p className={styles.artistRole}>{artist.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ArtistsSection;