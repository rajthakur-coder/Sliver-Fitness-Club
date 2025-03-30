import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

function Pricing() {
  const plans = [
    { name: "Basic", duration: "1 Month", price: "₹1000", features: ["🏋️ Gym Access", "👨‍🏫 Trainer Support", "📄 Basic Workout Plan"] },
    { name: "Pro", duration: "3 Months", price: "₹2500", features: ["✅ All Basic Features", "🍎 Personalized Diet Plan", "💪 Strength Training"] },
    { name: "Premium", duration: "1 Year", price: "₹8000", features: ["🔥 All Pro Features", "🎯 One-on-One Coaching", "🥗 Advanced Nutrition Guide"] }
  ];

  return (
    <div className="pricing">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Choose Your Plan
      </motion.h2>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className="pricing-card"
            whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.8)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="glow-effect"></div>
            <h3 className="plan-name">{plan.name}</h3>
            <motion.p 
              className="plan-duration"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {plan.duration}
            </motion.p>
            <motion.h2 
              className="plan-price"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {plan.price}
            </motion.h2>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className="subscribe-btn"
              whileHover={{ scale: 1.1, backgroundColor: "#FFD700", color: "black" }}
              whileTap={{ scale: 0.9 }}
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
