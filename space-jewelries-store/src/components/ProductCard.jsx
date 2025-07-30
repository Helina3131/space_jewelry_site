import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-950 rounded-xl p-4 text-white shadow-lg hover:shadow-purple-600 transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md mb-4 border border-purple-800"
      />
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-purple-300 font-medium mb-3">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-purple-600 hover:bg-purple-700 w-full py-2 rounded-full shadow"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

