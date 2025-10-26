import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';
import CursorEffect from '../components/CursorEffect.jsx'; // NEW

function Home() {
  return (
    <>
      {/* Cursor Effect */}
      <CursorEffect />

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section with Video Background */}
        <HeroSection id="hero" />

        {/* Products with Slanted Top Divider */}
        <div className="slanted-divider"></div>
        <ProductGrid id="products" />

        {/* Process Section with Detailed Steps */}
        <div className="slanted-divider reverse"></div>
        <ProcessSection id="process" />

        {/* About Section with Extra Info */}
        <div className="slanted-divider"></div>
        <AboutSection id="about" />

        {/* Contact Form */}
        <ContactForm id="contact" />

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
