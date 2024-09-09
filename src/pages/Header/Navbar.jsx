/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/images/logo.gif';

const Navbar = () => {
  
  return (
    <div className="flex fixed">
      
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden xs:ml-4 xs:mr-4 -z-10">
        {/* Navbar */}
        <div className='bg-custom-dark opacity-75 rounded-xl fixed z-50 top-8 right-10 left-10 '>
        <div className=" text-white ">
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

            
          </div>
        </div>
        </div>

      </div>
      </div>
    
  );
};

export default Navbar;
