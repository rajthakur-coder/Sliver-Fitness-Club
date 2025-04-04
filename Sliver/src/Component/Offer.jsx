import React from 'react'
import './Offer.css'
import { Link } from 'react-scroll';

function Offer() {
    return (
    <section id="offer">
      <div className="offer-container">
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER!
        </h1>
        <p className="offer-details">
          Join **Silver Fitness Gym** today and get **50% OFF** on your first month. Limited time offer!
        </p>
        <Link to="contact" className="offer-btn" smooth={true} duration={1000} >JOIN NOW</Link>
      </div>
    </section>
  );
}

export default Offer