import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const aboutDetails = [
  {
    title: 'Our History',
    description:
      'Founded in 2005, SteelSync has been delivering high-quality steel barrels globally for 20+ years.',
  },
  {
    title: 'Mission & Vision',
    description:
      'To provide durable and reliable steel solutions while leading the industry with innovation.',
  },
  {
    title: 'Certifications & Clients',
    description:
      'ISO certified, supplying top industrial clients worldwide, trusted for quality and safety.',
  },
];

function AboutSection({ id }) {
  return (
    <section id={id} className="about">
      <h2>About Us</h2>
      {aboutDetails.map((detail, index) => (
        <motion.div
          key={index}
          className="about-detail"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default AboutSection;
