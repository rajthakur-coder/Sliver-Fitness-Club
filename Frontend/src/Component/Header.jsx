
import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';

function Header() {
  return (
    <div id="main">
      <motion.div 
        className="name"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ textTransform: 'uppercase', letterSpacing: '3px', textShadow: '2px 2px 10px rgba(255, 215, 0, 0.8)' }}
        >
          UNLEASH YOUR POTENTIAL.
        </motion.h2>
        <h1>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileHover={{ color: '#FFD700', scale: 1.1 }}
            style={{ display: 'block', fontSize: '4rem', fontWeight: 'bold', textShadow: '5px 5px 15px rgba(255, 20, 20, 0.8)', animation: 'pulse 3s infinite' }}
          >
            <TypeAnimation
              sequence={['PUSH LIMITS', 2500, 'BREAK BARRIERS', 2500, 'ACHIEVE GREATNESS', 2500]}
              speed={40}
              repeat={Infinity}
            />
          </motion.span> 
          <motion.span 
            style={{ display: 'block', fontSize: '3rem', marginTop: '10px', color: '#FFD700', animation: 'glow 2s infinite alternate' }}
          >
            WITH US
          </motion.span>
        </h1>
        <motion.p 
          className="details"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05, color: '#FFD700' }}
          style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', textShadow: '2px 2px 5px rgba(255, 255, 255, 0.3)' }}
        >
          Join Silver Fitness Gym and embark on a journey to strength and success.
        </motion.p>
        <motion.div 
          className="header-btns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a 
            href="#contact" 
            smooth={true} duration={1000}
            className="header-btn"
            whileHover={{ scale: 1.1, backgroundColor: 'transparent', border: '2px solid #FF1414' }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '1.5rem', padding: '15px 25px', borderRadius: '10px' }}
          >
            JOIN US
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
