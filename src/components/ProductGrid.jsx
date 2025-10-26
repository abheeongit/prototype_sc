import React from 'react';
import ProductCard from './ProductCard.jsx';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Steel Barrel 200L', image: 'https://via.placeholder.com/250x200' },
  { id: 2, name: 'Industrial Drum 100L', image: 'https://via.placeholder.com/250x200' },
  { id: 3, name: 'Steel Drum 50L', image: 'https://via.placeholder.com/250x200' },
];

function ProductGrid() {
  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} name={product.name} image={product.image} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
