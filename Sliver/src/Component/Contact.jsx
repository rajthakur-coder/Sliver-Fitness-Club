import React from 'react'
import './Contact.css'


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bf991e8-0dde-479c-b14d-ccfd70deb2d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div id="contact">
   <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d57281.192337703025!2d78.151456!3d26.194254!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDExJzM5LjMiTiA3OMKwMDknMDUuMiJF!5e0!3m2!1sen!2sus!4v1743267591919!5m2!1sen!2sus" width="100%" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email"name="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"  name="message" rows="5" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


