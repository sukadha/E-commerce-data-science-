import React from "react";
import "./contactus.css";
import contactImage from "./contactus.png"; // Importing the image

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-subtitle">
        Contact us for a quote, help or join the team
      </p>
      <div className="contact-us-content">
        <div className="form-container">
          <h2 className="get-in-touch-title">Get in touch</h2>
          <form className="contact-form">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              placeholder="Your Name"
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Your Email ID"
            />
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea"
              id="message"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={contactImage} alt="Contact Us" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
