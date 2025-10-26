import React from 'react';
import './HeroSection.css';

function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById('products');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SteelSync</h1>
        <p>Reliable steel barrels and drums for every industrial need.</p>
        <button onClick={handleScroll}>Explore Products</button>
      </div>
    </section>
  );
}

export default HeroSection;
