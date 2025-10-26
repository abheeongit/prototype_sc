import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection id="hero" />
        <ProductGrid id="products" />
        <ProcessSection id="process" />
        <AboutSection id="about" />
        <ContactForm id="contact" />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
