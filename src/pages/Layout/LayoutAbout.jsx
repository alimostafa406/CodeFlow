import React from 'react'
import logos from '../../assets/images/logos.gif'
import bg2 from '../../assets/images/bg2.jpg'
import Button from '@mui/material/Button';
import '../css/About.css'
import { Link } from 'react-router-dom';

const LayoutAbout = () => {
  return (
    <div>

        <div className=" relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="md:left-5 md:bottom-16 xs:left-5 xs:bottom-16 text-white absolute">
            <Link to={'/contact'}>
            <Button variant="contained" className="md:w-40 md:h-20 xs:w-32 xs:h-16">Know More</Button>
            </Link>
      </div>
        </div>

        <div className=" bg-white text-xl h-fit flex justify-center items-center">
            {/* About Section */}
            <div className="about-content p-8 mb-20">
                <div className="section-header mb-8 flex items-center">
                    <hr className="w-8 border-2 border-[#0033cc] mr-4" />
                    <h1 className="text-[#0033cc] font-bold text-xl">About</h1>
                </div>
                <p className="section-text text-[#0033cc] mb-4">
                    DevFlow is a dynamic and innovative firm at the forefront of
                    development and consultancy services.
                </p>
                <p className="section-text text-black mb-4">
                    Our core mission is to deliver a comprehensive suite of solutions
                    aimed at driving growth and sparking innovation for our clients. With
                    a passionate and dedicated team, DevFlow is committed to transforming
                    your technology experience. We specialize in cutting-edge web and
                    mobile application development, expert project management, strategic
                    consultancy, and robust web security, ensuring your business thrives
                    in the digital landscape like never before.
                </p>
            </div>
        </div>

        <div className="bg-cover bg-center w-screen h-screen flex items-center justify-center" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="story-section w-[100vw] relative flex justify-center items-center p-8">
                <div className="story-content flex xs:flex-col md:flex-row gap-14 items-center justify-between min-w-[60vw] bg-black bg-opacity-50 p-8 rounded-lg">
                    <div className="story-text text-white max-w-md animate-slide-in-left">
                    <div className="section-header mb-8 flex items-center">
                    <hr className="w-8 border-2 border-[#0033cc] mr-4" />
                    <h1 className="text-[#0033cc] font-bold text-xl">Story</h1>
                </div>
                        <p>
                            <span className="inline text-[#0033cc] text-lg">DevFlow</span>
                            <span>
                                {' '}is where innovation meets inspiration—a digital hub designed
                                for developers to unleash their full potential. Imagine a
                                world where creativity flows effortlessly, every line of code
                                tells a story, and the community thrives on seamless
                                collaboration. Whether you're crafting a sleek mobile app or
                                developing the next big software breakthrough, DevFlow
                                provides the perfect ecosystem to transform ideas into
                                reality. It's more than just a platform—it's the future of
                                development. Welcome to DevFlow!
                            </span>
                        </p>
                    </div>
                    <div className="logo-container text-right animate-slide-in-right logo-wave">
                        <img src={logos} alt="DevFlow Logo" className="w-40 h-auto" />
                    </div>
                </div>
                </div>
        </div>
    </div>


  )
}

export default LayoutAbout