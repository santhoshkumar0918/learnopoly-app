import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage the menu state (open/close)

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-2xl pl-4">
            {isOpen ? <FaTimes /> : <FaBars />}
            {/* Toggle between close and hamburger icon */}
          </button>
          <h1 className="text-2xl font-bold">Learnopoly</h1>

          {/* Regular desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/community" className="hover:text-gray-300">
              Community Talks
            </Link>
            <Link to="/more-config" className="hover:text-gray-300">
              More Config
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Hamburger Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-1/4 bg-gray-900 bg-opacity-90 backdrop-blur-md p-4 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon inside the Navbar */}
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
              to="/dashboard"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Community Talks
            </Link>
          </li>
          <li>
            <Link
              to="/more-config"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              More Config
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="hover:text-gray-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Background overlay for the navbar */}
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
