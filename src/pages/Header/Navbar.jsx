/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon
import logos from '../../assets/images/logos.gif';
import { Link } from 'react-router-dom';
import SideContext from '../../Context/SidebarContext';

const Navbar = () => {
  const {toggleSidebar, open} = useContext(SideContext);


  return (
    <div className="flex fixed z-20">
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden xs:ml-4 xs:mr-4 -z-10">
        {/* Navbar */}
        <div className="bg-custom-dark opacity-75 rounded-xl fixed z-50 top-8 md:right-10 md:left-10 xs:right-5 xs:left-5">
          <div className="text-white">
            <div className="mx-auto flex justify-between items-center py-4 px-2">
              {/* Logo */}
              <img src={logos} alt="Logo" className="w-36 xs:w-24 xs:h-12 h-16 lg:ml-5 xs:ml-3" />

              {/* Burger Menu Icon */}
              <div className="md:hidden flex items-center mr-3">
                <button onClick={toggleSidebar} className="text-2xl">
                  <FaBars />
                </button>
              </div>

              {/* Navigation Links for Desktop */}
              <nav className="hidden md:flex space-x-6 mr-10 text-lg">
              <Link to={"/"} href="#" className="hover:text-indigo-400">Home</Link>
                <Link to={"/about"} href="#" className="hover:text-indigo-400">About</Link>
                <Link to={"/services"} href="#" className="hover:text-indigo-400">Services</Link>
                <Link to={"/contact"} href="#" className="hover:text-indigo-400">Contact</Link>
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

export default Navbar;
