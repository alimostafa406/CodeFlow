import React from 'react';
import { Link } from 'react-router-dom';

const SIDEBAR_LINKS = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 4, path: "/section", name: "Section" },
  { id: 4, path: "/technology", name: "Technology" },
];

const Sidebar = () => {
  return (
    <div className="top-0 left-0 fixed z-20 bg-custom-dark text-white w-56 min-h-screen duration-300" id="sidebar">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dev Flow</h1>
        <nav className="flex-1 mt-4 ">
          <ul>
          {SIDEBAR_LINKS.map(link => (
              <li key={link.id} className="mb-2">
                <Link 
                  to={link.path}
                  className="flex items-center pt-3 hover:text-indigo-400 rounded-md transition duration-200"
                >
                  <span className="">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
