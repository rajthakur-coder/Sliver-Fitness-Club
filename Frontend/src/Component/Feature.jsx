import React from 'react'
import fimage1 from '../images/modern.jpg'
import fimage2 from '../images/certificate.png'
import fimage3 from '../images/24.jpeg'
import fimage4 from '../images/group.jpeg'
import './Feature.css'

function Feature() {
  return (
  <section className ="features">
  <h2 className="section-title">Why Choose <span>Silver Fitness Gym?</span></h2>
  <div className="features-container">
    
    <div className="feature-box">
      <img src={fimage1} alt="Modern Equipment" />
      <h3>Modern Equipment</h3>
      <p>Train with the latest fitness machines and technology.</p>
    </div>

    <div className="feature-box">
      <img src={fimage2} alt="Certified Trainers" />
      <h3>Certified Trainers</h3>
      <p>Get expert guidance with personalized workout plans.</p>
    </div>

    <div className="feature-box">
      <img src={fimage3} alt="24/7 Access" />
      <h3>24/7 Access</h3>
      <p>Workout anytime, any day as per your schedule.</p>
    </div>

    <div className="feature-box">
      <img src={fimage4} alt="Group Classes" />
      <h3>Exciting Group Classes</h3>
      <p>Join Zumba, HIIT, Yoga & more fun-filled sessions.</p>
    </div>

  </div>
</section>

  )
}

export default Feature