/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon
import logo from '../../assets/images/logo.gif';
import { Link } from 'react-router-dom';
import SideContext from '../../Context/SidebarContext';

const LayoutNavbar = () => {
  const {toggleSidebar, open} = useContext(SideContext);


  return (
    <div className="flex ">
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden ">
        {/* Navbar */}
        <div className="bg-custom-dark z-50 top-8">
          <div className="text-white">
            <div className="mx-auto flex justify-between items-center py-4 px-4">
              {/* Logo */}
              <img src={logo} alt="Logo" className="w-36 xs:w-24 xs:h-12 h-16 lg:ml-5 xs:ml-3" />

              {/* Burger Menu Icon */}
              <div className="md:hidden flex items-center mr-3">
                <button onClick={toggleSidebar} className="text-2xl">
                  <FaBars />
                </button>
              </div>

              {/* Navigation Links for Desktop */}
              <nav className="hidden md:flex space-x-6 mr-10 text-lg">
                <Link to={"/"}><a href="#" className="hover:text-indigo-400">Home</a></Link>
                <Link to={"/about"}><a href="#" className="hover:text-indigo-400">About</a></Link>
                <Link to={"/services"}><a href="#" className="hover:text-indigo-400">Services</a></Link>
                <Link to={"/technology"}><a href="#" className="hover:text-indigo-400">Technology</a></Link>
                <Link to={"/contact"}><a href="#" className="hover:text-indigo-400">Contact</a></Link>
              </nav>
            </div>

            {/* Hidden Navigation Links for Mobile (Initially Empty) */}
            <div onClick={toggleSidebar} className={`md:hidden fixed inset-0 bg-custom-dark opacity-90 flex flex-col items-center justify-center space-y-6 ${open ? 'block' : 'hidden'}`}>
              {/* Empty Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNavbar;
