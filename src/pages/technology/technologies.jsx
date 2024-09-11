import React from 'react';
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
  return (
    <div className='technologies-container'>
      <h2 className='technologies-heading'>Technologies</h2>
      <motion.div
        className='technologies-scroll'
        animate={{ x: [0, -1000, 0] }} // Creates a continuous loop effect
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className='technology-item'
            whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#007bff' }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <FontAwesomeIcon icon={tech.icon} className='technology-icon' />
            <span className='technology-name'>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
