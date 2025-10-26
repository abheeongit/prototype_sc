import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let current = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) current = section.id || current;
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">SteelSync</div>
      <div className="links">
        <span className={active === 'hero' ? 'active' : ''} onClick={() => scrollToSection('hero')}>Home</span>
        <span className={active === 'products' ? 'active' : ''} onClick={() => scrollToSection('products')}>Products</span>
        <span className={active === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</span>
        <span className={active === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;
