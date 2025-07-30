import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
    <h1 className="text-xl font-bold tracking-widest text-purple-400">Cosmic Gems</h1>
  
    <div className="flex items-center gap-6">
      <ul className="flex gap-4 m-0 p-0 list-none">
        <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
        <li><Link to="/shop" className="hover:text-purple-300">Shop</Link></li>
        <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
      </ul>
  
      <Link to="/cart" className="hover:text-purple-300 relative ml-4">
        Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-purple-600 text-white rounded-full px-2 text-xs">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  </nav>
  
  );
};

export default Navbar;

