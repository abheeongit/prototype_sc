import React from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

function ContactForm({ id }) {
  return (
    <motion.section
      className="contact"
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </motion.section>
  );
}

export default ContactForm;
