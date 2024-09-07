/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.gif';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest('#sidebar') || e.target.closest('#open-sidebar')) {
      return;
    }
    setSidebarOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ease-in-out duration-300`}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">CODE FLOW</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-6 lg:ml-10 lg:mr-10 xs:ml-4 xs:mr-4">
        {/* Navbar */}
        <div className="bg-custom-dark shadow text-white rounded-xl">
          <div className="mx-auto flex justify-between items-center py-4 px-2">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-36 h-16 lg:ml-5 xs:ml-3" />

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 mr-10 text-lg">
              <a href="#" className="hover:text-indigo-400">Home</a>
              <a href="#" className="hover:text-indigo-400">About</a>
              <a href="#" className="hover:text-indigo-400">Services</a>
              <a href="#" className="hover:text-indigo-400">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              id="open-sidebar"
              className="text-gray-500 hover:text-gray-600 md:hidden"
              onClick={handleSidebarToggle}
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
