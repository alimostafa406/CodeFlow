/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import WebDeveloper from "../../assets/images/webdeveloper.gif"; // replace with your actual image path
import Desginer from "../../assets/images/designer.png"; // another example image
import Marketing from "../../assets/images/marketing.gif";
import MobileApp from "../../assets/images/mobileApp.gif";
import "../../pages/css/services.css"; 
import ParticlesComponent from "../../Components/particles"; 
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-page min-h-screen">
      <ParticlesComponent id="particles"/> {/* Background Effect */}

      <div className="services-content flex md:flex-row lg:flex-row xs:flex-col md:gap-28 mt-40">
        {/* Text Column */}


        <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl mt-10">Services</h2>
                <p className="mt-4 text-white text-lg">            DevFlow provides a wide range of software development services,
            tailored for businesses of all sizes. From custom software to advanced
            web and mobile app development, our skilled team turns your ideas into
            reality with precision and innovation, helping you achieve your
            business goals.</p>
                <div className="mt-8">
                    <Link to={'/services'} href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></Link>
                </div>
            </div>

        {/* Images Column */}
        <div className="services-grid xs:mb-30 ">

        <div className=" rounded-lg shadow-md p-6 my-6 text-center image-container">
                <img src={WebDeveloper} alt="Web Developer" className="w-full rounded-full mb-4"/>
                <h3 className="text-xl font-semibold mb-2 text-white">Web Developer</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center image-container">
                <img src={Desginer} alt="Creative Design" className="w-full rounded-full mb-4"/>
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center image-container">
                <img src={Marketing} alt="Marketing" className="w-full rounded-full mb-4"/>
                <h3 className="text-xl font-semibold mb-2 mt-14">Marketing</h3>
        </div>

        <div className=" rounded-lg shadow-md p-6 my-6 text-center image-container">
                <img src={MobileApp} alt="Mobile App" className="w-full rounded-full mb-14"/>
                <h3 className="text-xl font-semibold mb-2 text-white">Mobile App</h3>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
