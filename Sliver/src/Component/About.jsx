import React from "react";
import aboutimages from "../images/aboutt.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="about" ref={aboutRef}>
      <div className="about-container">
        
        {/* About Image with Scroll Animation */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={aboutimages} alt="Gym Workout" />
        </motion.div>

        {/* About Content with Scroll Animation */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>
            About <span>Silver Fitness Gym</span>
          </h2>
          <p>
            Welcome to <strong>Silver Fitness Gym</strong>, the ultimate destination for your fitness journey.
            We provide state-of-the-art equipment, expert trainers, and a motivating environment 
            to help you achieve your health and fitness goals.
          </p>
          <p>
            Whether you're looking to build muscle, lose weight, or improve endurance, 
            we have specialized training programs to suit your needs.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="contact" className="about-btn" smooth={true} duration={1000}>
              Join Us Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
