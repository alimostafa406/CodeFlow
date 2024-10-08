import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faLaravel, faFlutter, faDartLang, faFigma, faPhp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../css/technologies.css';

const technologies = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React.Js', icon: faReact },
  { name: 'PHP', icon: faPhp },
  { name: 'Laravel', icon: faLaravel },
  { name: 'Dart', icon: faDartLang },
  { name: 'Flutter', icon: faFlutter },
  { name: 'Figma', icon: faFigma },
];

const Technologies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const viewportWidth = container.clientWidth;

    // Auto-scroll animation configuration
    const scrollAnimation = () => {
      if (container) {
        container.animate(
          [
            { transform: `translateX(0px)` },
            { transform: `translateX(-${scrollWidth - viewportWidth}px)` }
          ],
          {
            duration: 15000,
            iterations: Infinity,
            easing: 'linear'
          }
        );
      }
    };

    scrollAnimation();
  }, []);

  return (
    <div className='technologies-container flex-wrap'>
      <h2 className='technologies-heading'>Technologies</h2>
      <div className='animate-scroll-left'>
      <motion.div
        className='flex'
        whileTap={{ cursor: 'grabbing' }} // Change cursor to grabbing on drag
        drag='x'
        dragConstraints={{ left: -500, right: 0 }} // Set constraints for horizontal drag
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`technology-item m-2 technology-item-${index + 1}`}
            whileHover={{ scale: 1.2, backgroundColor: '#007bff' }} // Scale and color change on hover
            transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Smooth transition
            layout
          >
            <FontAwesomeIcon icon={tech.icon} className='technology-icon' />
            <span className='technology-name'>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
