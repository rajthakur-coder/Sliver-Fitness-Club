import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
      setNav(window.scrollY >= 50);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.nav 
      className={`nav ${nav ? "active" : ""} ${hidden ? "hide" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated Silver Fitness Club Text */}
      <motion.div 
        className="logo-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2, rotate: 3 }}
        
      >
      <Link to="main"> Silver <span>Fitness</span></Link> 
      </motion.div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "nav-icon open" : "nav-icon"}></div>
      </div>

      {/*  Navbar Menu */}
      <motion.ul 
        className={`menu ${menuOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Link to="main" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Link to="features" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            FEATURES
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Link to="services-section" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            OUR SERVICES
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Link to="offer" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            OFFER
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Link to="pricing" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            MEMBERSHIP
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <Link to="reviews-section" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            REVIEWS
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <Link to="about" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
          <Link to="contact" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
