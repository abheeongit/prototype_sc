import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaTimes } from 'react-icons/fa';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: 'Steel Barrel 200L',
    image: '/images/product1.jpg',
    description:
      'Premium 200L steel barrel. Industrial grade, corrosion resistant, ideal for chemicals, oils, and heavy-duty storage. Can withstand extreme temperatures and rough handling. Perfect for warehouses, factories, and shipping industries.',
  },
  {
    id: 2,
    name: 'Industrial Drum 100L',
    image: '/images/product2.jpg',
    description:
      '100L industrial drum. Designed for safe storage and transport of fluids, oils, and other industrial liquids. Features reinforced steel construction, rust-proof coating, and airtight sealing for maximum reliability.',
  },
  {
    id: 3,
    name: 'Steel Drum 50L',
    image: '/images/product3.jpg',
    description:
      'Compact 50L steel drum. Versatile, durable, and corrosion-resistant. Suitable for small-scale industries, labs, and workshops. Lightweight yet strong, with a sleek industrial design.',
  },
];

function ProductGrid({ id }) {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section className="products" id={id}>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            className="product-card"
            onClick={() => setActiveProduct(item)}
            whileHover={{
              scale: 1.07,
              boxShadow: '0 0 30px #ff8c33, inset 0 0 15px #ff6a00',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={item.image} alt={item.name} />
            <div className="product-name">
              <FaCog className="gear-icon" />
              <h3>{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className="product-overlay"
            initial={{ opacity: 0, y: '-20%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-20%' }}
            transition={{ duration: 0.6 }}
          >
            <div className="overlay-content-centered">
              <button className="close-btn" onClick={() => setActiveProduct(null)}>
                <FaTimes />
              </button>
              <img src={activeProduct.image} alt={activeProduct.name} />
              <h2>{activeProduct.name}</h2>
              <p>{activeProduct.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProductGrid;
