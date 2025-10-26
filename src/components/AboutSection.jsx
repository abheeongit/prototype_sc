import React from 'react';
import './AboutSection.css';

function AboutSection() {
  const aboutImage = 'https://via.placeholder.com/400x300';

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About SteelSync</h2>
          <p>
            At SteelSync, we specialize in manufacturing high-quality industrial barrels and drums.
            Our products are designed with precision, durability, and sustainability in mind.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About SteelSync" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
