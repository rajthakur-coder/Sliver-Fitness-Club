import React from 'react';
import { motion } from 'framer-motion';
import './Ourservice.css';

// Importing Images
import fitnessImg from '../images/fitness.avif';
import weightGainImg from '../images/weight-gain.avif';
import strengthImg from '../images/strength.avif';
import fatLossImg from '../images/fat-loss.avif';
import weightliftingImg from '../images/weightlifting.avif';
import runningImg from '../images/running.avif';
import crossfitImg from '../images/crossfit.avif';
import yogaImg from '../images/yoga.avif';
import cardioImg from '../images/cardio.avif';

function Ourservice() {
  const services = [
    { name: "Physical Fitness", desc: "Boost your fitness with expert guidance.", img: fitnessImg },
    { name: "Weight Gain", desc: "Structured diet & workout plans for muscle gain.", img: weightGainImg },
    { name: "Strength Training", desc: "Improve muscle strength & endurance.", img: strengthImg },
    { name: "Fat Loss", desc: "Effective workouts to burn fat & get lean.", img: fatLossImg },
    { name: "Weightlifting", desc: "Professional coaching for weightlifting.", img: weightliftingImg },
    { name: "Running", desc: "Enhance stamina & speed with expert training.", img: runningImg },
    { name: "CrossFit", desc: "High-intensity training for full-body strength.", img: crossfitImg },
    { name: "Yoga Training", desc: "Achieve flexibility & peace of mind with yoga.", img: yogaImg },
    { name: "Cardio Workouts", desc: "Heart-healthy workouts for endurance & stamina.", img: cardioImg }
  ];

  return (
    <div className="services-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Our Services
      </motion.h2>
      
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card" 
            whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={service.img} alt={service.name} className="service-img" />
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Ourservice;
