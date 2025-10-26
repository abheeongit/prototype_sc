import React from 'react';
import { motion } from 'framer-motion';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Steel Barrel 200L', image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Industrial Drum 100L', image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Steel Drum 50L', image: 'https://via.placeholder.com/300x200' },
];

function ProductGrid({ id }) {
  return (
    <section className="products" id={id}>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <motion.div
            key={item.id}
            className="product-card"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff6a00' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.id * 0.2 }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
