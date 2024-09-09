import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';

const Footer = () => {
  const { darkMode } = useUser();

  console.log(darkMode); // Check the darkMode value

  return (
    <footer className={`py-10 ${darkMode ? "bg-black text-white" : "bg-gray-900 text-gray-300"}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section - Logo & Text */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">Blog</h2>
          <p className="mt-3">Providing quality services since 2023.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex gap-10 mb-6 md:mb-0">
          <Link to="/about" className="hover:text-white ease-in-out duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-white ease-in-out duration-200">Contact</Link>
          <Link to="/privacy" className="hover:text-white ease-in-out duration-200">Privacy Policy</Link>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white ease-in-out duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white ease-in-out duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white ease-in-out duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white ease-in-out duration-200"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        &copy; {new Date().getFullYear()} Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
