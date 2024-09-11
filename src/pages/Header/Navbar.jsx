/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon
import logo from '../../assets/images/logo.gif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed z-20">
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden xs:ml-4 xs:mr-4 -z-10">
        {/* Navbar */}
        <div className="bg-custom-dark opacity-75 rounded-xl fixed z-50 top-8 md:right-10 md:left-10 xs:right-5 xs:left-5">
          <div className="text-white">
            <div className="mx-auto flex justify-between items-center py-4 px-2">
              {/* Logo */}
              <img src={logo} alt="Logo" className="w-36 xs:w-24 xs:h-12 h-16 lg:ml-5 xs:ml-3" />

              {/* Burger Menu Icon */}
              <div className="md:hidden flex items-center mr-3">
                <button onClick={toggleMenu} className="text-2xl">
                  <FaBars />
                </button>
              </div>

              {/* Navigation Links for Desktop */}
              <nav className="hidden md:flex space-x-6 mr-10 text-lg">
                <a href="#" className="hover:text-indigo-400">Home</a>
                <a href="#" className="hover:text-indigo-400">About</a>
                <a href="#" className="hover:text-indigo-400">Services</a>
                <a href="#" className="hover:text-indigo-400">Contact</a>
              </nav>
            </div>

            {/* Hidden Navigation Links for Mobile (Initially Empty) */}
            <div className={`md:hidden fixed inset-0 bg-custom-dark opacity-90 flex flex-col items-center justify-center space-y-6 ${isOpen ? 'block' : 'hidden'}`}>
              {/* Empty Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
