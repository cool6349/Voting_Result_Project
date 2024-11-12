import React, { useState } from 'react';

import political from "../assets/political.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 p-4 pt-6 h-20 shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold " >
         <img src={political} alt="MyLogo" className="w-10 h-auto rounded-lg mb-4" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-blue-300">Home</a>
          <a href="/Summary" className="text-white hover:text-blue-300">Summary Report</a>
          <a href="/Political" className="text-white hover:text-blue-300">Political Reports</a>
          <a href="/Election" className="text-white hover:text-blue-300">Election Intelligence</a>
          <a href="/About" className="text-white hover:text-blue-300">About Us</a>
          <a href="/Contact" className="text-white hover:text-blue-300">Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-700 mt-4 rounded-lg`}
      >
        <a href="/" className="block text-white px-6 py-2 hover:bg-blue-500">Home</a>
        <a href="/Summary Report" className="block text-white px-6 py-2 hover:bg-blue-500">Summary Report</a>
        <a href="/Political" className="block text-white px-6 py-2 hover:bg-blue-500">Political Reports</a>
        <a href="/Election" className="block text-white px-6 py-2 hover:bg-blue-500">Election Intelligence</a>
        <a href="/About" className="block text-white px-6 py-2 hover:bg-blue-500">About Us</a>
        <a href="/Contact" className="block text-white px-6 py-2 hover:bg-blue-500">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
