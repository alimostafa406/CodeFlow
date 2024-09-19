import React from 'react';
import DevFlowLogo from '../../assets/images/devflowlogo.gif';
import '../css/About.css'

const HomeAbout = () => {
  return (
    <div className="sm:flex items-center h-screen mx-auto bg-white">
      <div className="sm:w-1/2 p-10">
        <div className="text-center">
          <img 
            src={DevFlowLogo} 
            alt="About Us" 
            className="object-center mx-auto logo-wave" // Added the logo-wave class here
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div>
          <div className="flex items-center mb-4">
            <hr className="w-8 border-custom-dark" style={{ width: '30px' }} />
            <h1 className="text-custom-dark font-bold text-xl ml-4">Story</h1>
          </div>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-600 text-lg font-bold">
            DevFlow is where innovation meets inspiration—a digital hub designed for developers to unleash their full potential. 
            Imagine a world where creativity flows effortlessly, every line of code tells a story, and the community thrives on seamless 
            collaboration. Whether you're crafting a sleek mobile app or developing the next big software breakthrough, DevFlow provides 
            the perfect ecosystem to transform ideas into reality. It's more than just a platform—it's the future of development. 
            Welcome to DevFlow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
