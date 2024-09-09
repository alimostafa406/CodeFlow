import React from "react";
import WebDeveloper from "../../assets/images/imagewebdeveloper.png"; // replace with your actual image path
import CreativeDesign from "../../assets/images/imagedesign.jpeg"; // another example image
import Marketing from "../../assets/images/imagemarktin.png";
import MobileApp from "../../assets/images/mobileApp.png";
import "../../pages/css/services.css"; 
import ParticlesComponent from "../../Components/particles"; 

const Services = () => {
  return (
    <div className="services-page">
      <ParticlesComponent /> {/* Background Effect */}

      <div className="services-content">
        {/* Text Column */}
        <div className="services-text">
          <p>
            DevFlow provides a wide range of software development services,
            tailored for businesses of all sizes. From custom software to advanced
            web and mobile app development, our skilled team turns your ideas into
            reality with precision and innovation, helping you achieve your
            business goals.
          </p>
        </div>

        {/* Images Column */}
        <div className="services-grid">
          <div className="services-item">
            <img src={WebDeveloper} alt="Web Developer" />
            <p>Web Developer</p>
          </div>
          <div className="services-item">
            <img src={CreativeDesign} alt="Creative Design Services" />
            <p>Creative Design Services</p>
          </div>
          <div className="services-item">
            <img src={Marketing} alt="Marketing" />
            <p>Marketing</p>
          </div>
          <div className="services-item">
            <img src={MobileApp} alt="Mobile App" />
            <p>Mobile App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
