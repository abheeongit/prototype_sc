import React from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaCogs, FaShieldAlt, FaTruck } from 'react-icons/fa';
import './ProcessSection.css';

const steps = [
  {
    title: 'Raw Material',
    description:
      'We source only the highest-grade steel from trusted suppliers to ensure strength and reliability.',
    icon: <FaCog />,
  },
  {
    title: 'Fabrication',
    description:
      'Precision cutting, welding, and forming to create perfect barrels tailored to industrial needs.',
    icon: <FaCogs />,
  },
  {
    title: 'Quality Testing',
    description:
      'Rigorous strength and leakage tests to guarantee durability and safety for all applications.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Packaging & Delivery',
    description:
      'Careful packaging and fast logistics to deliver worldwide while maintaining integrity.',
    icon: <FaTruck />,
  },
];

function ProcessSection({ id }) {
  return (
    <section id={id} className="process">
      <h2>Our Process</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="step-icon">{step.icon}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
