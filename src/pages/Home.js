import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-6">

      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">Your Platform</span>
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Build, explore and grow with our powerful dashboard and tools.
          This is your all-in-one solution for managing everything smoothly.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          <Link to="/login">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300">
              Get Started
            </button>
          </Link>

          <Link to="/about">
            <button className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl">

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            Fast Performance
          </h3>
          <p className="text-gray-300">
            Optimized system for smooth and fast experience.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            Secure Access
          </h3>
          <p className="text-gray-300">
            Advanced authentication and secure routing.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            Modern UI
          </h3>
          <p className="text-gray-300">
            Built with React and Tailwind CSS for clean design.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home;
