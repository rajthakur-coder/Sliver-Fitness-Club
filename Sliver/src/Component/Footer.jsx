import React from "react";
import { Link } from "react-scroll";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.jpg';
import youtube from '../images/youtube.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-section about">
          <h2 className="fade-in">Silver Fitness Gym</h2>
          <p className="fade-in">Transform your body and mind with our world-class training programs.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3 className="fade-in">Quick Links</h3>
          <ul className="fade-in">
            <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
            <li><Link to="services-section" smooth={true} duration={1000}>Services</Link></li>
            <li><Link to="pricing" smooth={true} duration={1000}>MemberShip</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section contact">
          <h3 className="fade-in">Contact Us</h3>
          <p className="fade-in"><strong>Phone:</strong> +91 7947144969</p>
          <p className="fade-in"><strong>Email:</strong> contact@silverfitness.com</p>
          <p className="fade-in"><strong>Location:</strong> Roxy Pul, Gwalior</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3 className="fade-in">Follow Us</h3>
          <div className="social-icons fade-in">
            <a href="https://www.facebook.com/smart.shaan.3/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/thesilverfitnessclub1/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://youtube.com/@shaanfitness855?si=apfm_zyUdu4UOjpl" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom fade-in">
        <p>© 2025 Silver Fitness Gym. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
