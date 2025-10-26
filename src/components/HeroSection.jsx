import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

function HeroSection({ id }) {
  const handleScroll = () => {
    const section = document.getElementById('products');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      className="hero"
      id={id}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>SteelSync</h1>
        <p>Industrial Barrels & Drums Built to Last</p>
        <button className="cta-btn" onClick={handleScroll}>Explore Products</button>
      </div>
    </motion.section>
  );
}

export default HeroSection;
