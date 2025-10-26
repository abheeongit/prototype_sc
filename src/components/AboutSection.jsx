import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const aboutImage = 'https://via.placeholder.com/400x300';

function AboutSection({ id }) {
  return (
    <motion.section
      className="about"
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Us</h2>
      <div className="about-content">
        <img src={aboutImage} alt="About SteelSync" />
        <p>
          SteelSync specializes in industrial steel barrels and drums, crafted for durability
          and reliability across all industries. Our steel solutions are trusted worldwide.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutSection;
