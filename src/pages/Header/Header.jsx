
import Navbar from './Navbar';
import ParticlesComponent from '../../Components/particles';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import '../../index.css';
import '../css/Header.css';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/imagewebdeveloper.png'
import img7 from '../../assets/images/mobileApp.png'
import img8 from '../../assets/images/imagemarktin.png'
import img9 from '../../assets/images/imagedesign.jpeg'

const Header = () => {
  const technologiesleft = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    // Add more technology items here
  ];

  const technologiesRight = [
    { id: 6, img: img2 },
    { id: 7, img: img6 },
    { id: 8, img: img7 },
    { id: 9, img: img8 },
    { id: 10, img: img9 },
    // Add more technology items here
  ];
  

  return (
    <div className="relative h-screen overflow-hidden flex">
      <ParticlesComponent id="particles" />
      <Navbar />
      <div className="absolute left-8 bottom-14 md:left-20 md:bottom-20 text-white">
        <Button variant="outlined" className="md:w-40 md:h-20 xs:w-32 xs:h-16">Contact Us</Button>
      </div>

      <div className='flex md:justify-around xs:justify-around items-center w-screen'>
      <div className="relative transform -translate-x-1/2 -translate-y-1/2 text-white md:ml-32 w-fit xs:ml-10 flex flex-col items-center">
  <h1 className="md:text-4xl font-bold typewriter xs:text-lg text-center">
    Welcome to Our Website
  </h1>
</div>


      <div className='flex '>
      <motion.div
        className='flex flex-col animate-scroll-down md:block xs:hidden'
        whileTap={{ cursor: 'grabbing' }} // Change cursor to grabbing on drag
        drag='x'
        dragConstraints={{ left: -500, right: 0 }} // Set constraints for horizontal drag
      >
        {technologiesleft.map((tech, index) => (
          <motion.div
            key={tech.id}
            className={`technology-item m-4  technology-item-${index + 1} `}
            whileHover={{ scale: 1.2, backgroundColor: '#007bff' }} // Scale and color change on hover
            transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Smooth transition
            layout
          >
            <img src={tech.img} alt="" className='rounded-lg'/>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className='flex flex-col animate-scroll-up'
        whileTap={{ cursor: 'grabbing' }} // Change cursor to grabbing on drag
        drag='x'
        dragConstraints={{ left: -500, right: 0 }} // Set constraints for horizontal drag
      >
        {technologiesRight.map((tech, index) => (
          <motion.div
            key={tech.id}
            className={`technology-item m-4  technology-item-${index + 1} `}
            whileHover={{ scale: 1.2, backgroundColor: '#007bff' }} // Scale and color change on hover
            transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Smooth transition
            layout
          >
            <img src={tech.img} alt="" className='rounded-lg'/>
          </motion.div>
        ))}
      </motion.div>
      </div>

      </div>

    </div>
  );
};

export default Header;
