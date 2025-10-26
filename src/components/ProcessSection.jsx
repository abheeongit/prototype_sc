import React from 'react';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';
import './ProcessSection.css';

const steps = ['Raw Material', 'Fabrication', 'Quality Testing', 'Packaging & Delivery'];

function ProcessSection({ id }) {
  return (
    <section className="process" id={id}>
      <h2>Our Process</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FaCog className="gear-icon" />
            {index + 1}. {step}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
