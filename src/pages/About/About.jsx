import React from 'react';
import Logo from "../../assets/images/logo.gif"; // Replace with your actual image path

const About = () => {
  return (
    <div className="h-screen bg-custom-dark">
      <div className="p-8 bg-white">
        <div className="flex items-center mb-4">
          <hr className="w-8 border-blue-900" style={{ width: '30px' }} />
          <h1 className="text-blue-900 font-bold text-xl ml-4">About</h1>
        </div>
        <p className="text-blue-900 mb-4">
          DevFlow is a dynamic and innovative firm at the forefront of development and consultancy services.
        </p>
        <p>
          Our core mission is to deliver a comprehensive suite of solutions aimed at driving growth and sparking innovation for our clients. 
          With a passionate and dedicated team, DevFlow is committed to transforming your technology experience. We specialize in cutting-edge web 
          and mobile application development, expert project management, strategic consultancy, and robust web security, ensuring your business 
          thrives in the digital landscape like never before.
        </p>
      </div>

      <div className="p-8 bg-custom-dark lg:block xs:hidden">
        <div className="flex items-center mb-4">
          <hr className="w-8 border-white" style={{ width: '30px' }} />
          <h1 className="text-white font-bold text-xl ml-4">Story</h1>
        </div>
        <div>
        <p className='text-white services-item'>
              DevFlow is where innovation meets inspiration—a digital hub designed for developers to unleash their full potential. 
              Imagine a world where creativity flows effortlessly, every line of code tells a story, and the community thrives on seamless 
              collaboration. Whether you're crafting a sleek mobile app or developing the next big software breakthrough, DevFlow provides 
              the perfect ecosystem to transform ideas into reality. It's more than just a platform—it's the future of development. 
              Welcome to DevFlow!
        </p>

        <div className="services-grid bg-white">
            <div className="services-item">
              <img src={Logo} alt="DevFlow Logo" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;