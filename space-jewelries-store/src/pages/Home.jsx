import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center text-white bg-gradient-to-b from-black via-indigo-900 to-black min-h-screen p-6">
      <div className="pt-20 mb-10">
        <h2 className="text-4xl font-bold mb-8">Adorn the Stars ✨</h2>
        <p className="mb-6 text-lg">Luxury jewelry, forged in the beauty of the cosmos.</p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white shadow-lg mb-10"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
