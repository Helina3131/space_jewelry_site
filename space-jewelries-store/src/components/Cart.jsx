import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleClear = () => {
    setCart([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 right-4 bg-purple-600 text-white px-4 py-2 rounded shadow-lg z-50"
      >
        {isOpen ? 'Close Cart' : `Cart (${cart.length})`}
      </button>

      {isOpen && (
        <div className="fixed top-20 right-4 bg-gray-900 text-white p-6 rounded shadow-lg max-w-xs max-h-[70vh] overflow-auto z-50">
          <h3 className="text-xl mb-4 font-bold flex justify-between items-center">
            Your Cart
            {cart.length > 0 && (
              <button
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm"
              >
                Clear All
              </button>
            )}
          </h3>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="mb-3 border-b border-gray-700 pb-2 flex justify-between items-center"
                >
                  <span>
                    {item.name} - ${item.price}
                  </span>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label={`Remove ${item.name}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
