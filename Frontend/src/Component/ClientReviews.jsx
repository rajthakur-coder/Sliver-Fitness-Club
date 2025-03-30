import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './ClientReviews.css';

const reviews = [
  { name: "Rahul Verma", feedback: "Best training programs! Highly recommended.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Sharma", feedback: "Lost 10kg in 3 months, amazing results!", rating: 4.5, image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Amit Patel", feedback: "Personal training is excellent!", rating: 5, image: "https://randomuser.me/api/portraits/men/28.jpg" },
 
];

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function ClientReviews() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="reviews-section" ref={sectionRef}>
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        className="section-title"
      >
        What Our <span className="highlight">Clients Say</span>
      </motion.h2>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
}


const ReviewCard = ({ review, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="review-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.6)" }}
    >
      <div className="review-header">
        <img src={review.image} alt={review.name} className="review-img" />
        <h3>{review.name}</h3>
      </div>
      <p className="review-text">"{review.feedback}"</p>
      <div className="review-stars">
        {[...Array(Math.floor(review.rating))].map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
        {review.rating % 1 !== 0 && <FaStar className="star-icon half-star" />}
      </div>
    </motion.div>
  );
};

export default ClientReviews;
