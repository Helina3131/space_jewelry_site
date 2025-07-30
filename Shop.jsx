import React from 'react';
import products from '../Data/products';
import ProductCard from '../components/ProductCard';

const Shop = ({ onAddToCart }) => {
  return (
    <div className="text-white bg-gradient-to-b from-black via-indigo-900 to-black min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Shop Our Cosmic Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
