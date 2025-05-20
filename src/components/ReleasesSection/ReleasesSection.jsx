import React from 'react';
import { motion } from 'framer-motion';
import styles from './ReleasesSection.module.css';

// Sample release data (hardcoded for now)
const releases = [
  {
    id: 1,
    title: 'Echoes of the Future',
    artist: 'Bluntwave',
    releaseDate: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Midnight Synthesis',
    artist: 'Luna Drip',
    releaseDate: '2023-09-22',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Neon Dreams',
    artist: 'Echo Verse',
    releaseDate: '2023-08-05',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Digital Horizon',
    artist: 'Midnight Pulse',
    releaseDate: '2023-06-30',
    image: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?q=80&w=1729&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Cosmic Waves',
    artist: 'Astral Wave',
    releaseDate: '2023-04-18',
    image: 'https://images.unsplash.com/photo-1558591710-e76c5e232f89?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Urban Frequencies',
    artist: 'Synth Collective',
    releaseDate: '2023-02-10',
    image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1729&auto=format&fit=crop'
  }
];

const ReleasesSection = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Animation variants for release cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="releases" className={styles.releasesSection}>
      <motion.h2 
        className={styles.sectionTitle}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        Releases
      </motion.h2>
      
      <motion.div 
        className={styles.releasesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {releases.map((release) => (
          <motion.div 
            key={release.id} 
            className={styles.releaseCard}
            variants={cardVariants}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
          >
            <div className={styles.imageContainer}>
              <motion.img 
                src={release.image} 
                alt={`${release.title} by ${release.artist}`} 
                className={styles.releaseImage}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
            <div className={styles.releaseInfo}>
              <h3 className={styles.releaseTitle}>{release.title}</h3>
              <p className={styles.releaseArtist}>{release.artist}</p>
              <p className={styles.releaseDate}>{formatDate(release.releaseDate)}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReleasesSection;