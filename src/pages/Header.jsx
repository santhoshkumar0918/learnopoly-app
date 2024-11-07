
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <header className="bg-gray-900 max-w-7xl mx-auto bg-opacity-80 backdrop-blur-md shadow-lg rounded-3xl mb-10 text-white fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center h-[12vh] px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white">Learnopoly</h1>

          {/* Regular desktop navigation */}
          <ul className="hidden lg:flex items-center space-x-10">
            <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
              <Link to="/community">Community-Talks</Link>
            </li>
            <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile View */}
          <button onClick={toggleMenu} className="text-2xl lg:hidden pl-4">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Hamburger Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-[60%] bg-gray-900 bg-opacity-90 backdrop-blur-md p-4 shadow-lg transition-transform duration-300 ease-in-out transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Nav Close Icon and Links */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-white font-bold">Learnopoly</h1>
          <button onClick={toggleMenu} className=" text-white text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-4 text-white">
          <li>
            <Link to="/" onClick={toggleMenu} className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Product
            </Link>
          </li>
        </ul>
      </nav>

      {/* Background overlay for the navbar when it's open */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-white bg-opacity-30 transition-opacity duration-300 ease-in-out"
        ></div>
      )}
    </div>
  );
};

export default Header;
