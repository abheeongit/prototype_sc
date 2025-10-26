import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <ProcessSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
