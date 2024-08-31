import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center justify-center py-1">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Employee Registration System</h1>
      <p className="text-xl text-white mb-8">Register and manage employee details with ease</p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;