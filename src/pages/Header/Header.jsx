import React from 'react';
import Navbar from './Navbar';
import ParticlesComponent from '../../Components/particles';
import Section from '../section/Section';

const Header = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <ParticlesComponent id="particles"/>
      
      <Navbar/>
    </div>
  );
};

export default Header;
