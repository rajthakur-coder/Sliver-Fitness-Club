import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll behavior
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.dropdown') &&
        !e.target.closest('.dropdown-menu')
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  

  return (
    <motion.nav 
      className={`nav ${nav ? "active" : ""} ${hidden ? "hide" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo Text */}
      <motion.div 
        className="logo-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2, rotate: 3 }}
      >
        <Link to="main" smooth={true} duration={1000}>
          Silver <span>Fitness</span>
        </Link>
      </motion.div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "nav-icon open" : "nav-icon"}></div>
      </div>

      {/* Navbar Menu */}
      <motion.ul 
        className={`menu ${menuOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <RouterLink to="/Home" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            HOME
          </RouterLink>
        </motion.li>

        {/* Dropdown for FEATURES */}
        <motion.li className="dropdown" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
      <RouterLink to="/features"> <span className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
  FEATURES <span style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}>▼</span>
</span></RouterLink> 
          <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <li>
              <RouterLink to="/calorie" smooth={true} duration={1000} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                Calories Tracker
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/social" smooth={true} duration={1000} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                Workout Progress Check
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/virtualtour" smooth={true} duration={1000} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                360° Virtual Gym
              </RouterLink>
            </li>
          </ul>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <RouterLink to="/services" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            OUR SERVICES
          </RouterLink>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <RouterLink to="/offer" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            OFFER
          </RouterLink>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <RouterLink to="/pricing" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            MEMBERSHIP
          </RouterLink>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <RouterLink to="/reviews" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            REVIEWS
          </RouterLink>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
          <RouterLink to="/about" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            ABOUT
          </RouterLink>
        </motion.li>

        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
          <RouterLink to="/contact" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>
            CONTACT
          </RouterLink>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
