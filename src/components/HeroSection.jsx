import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

function HeroSection({ id }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let sparks = [];
    let animationFrame;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Spark {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.x -= this.speed;
        if (this.x + this.length < 0) this.x = canvas.width;
      }
      draw() {
        ctx.strokeStyle = `rgba(255,106,0,${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y);
        ctx.stroke();
      }
    }

    function init() {
      sparks = [];
      for (let i = 0; i < 40; i++) sparks.push(new Spark());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((s) => {
        s.update();
        s.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('products');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      className="hero"
      id={id}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="hero-sparks"></canvas>
      <div className="hero-smoke"></div>
      <div className="hero-content">
        <h1 className="glow-text">SteelSync</h1>
        <p>Industrial Barrels & Drums Built to Last</p>
        <button className="cta-btn" onClick={handleScroll}>Explore Products</button>
      </div>
    </motion.section>
  );
}

export default HeroSection;
