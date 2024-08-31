import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Employee Registration System</h1>
        <div className="space-x-4">
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Home
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;