import React from "react";
import "./Aboutus.css";
import aboutUsImage from "./AboutUs.png"; // Make sure the image path is correct

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-text">
        Know all information
        <br />
        <span>About Us</span>
      </div>
      <div className="aboutus-content">
        <div className="aboutus-description">
          DataScience is a trusted company in the IT sector, dedicated to
          driving innovation and building the digital world. Over the years, the
          company has achieved multifaceted success and established a strong
          presence in the industry.
          <br />
          <br />
          Beyond its technological advancements, DataScience has played a vital
          role in reducing unemployment by creating IT-enabled opportunities and
          contributing to societal development. This impact underscores the
          transformative power of technology in addressing real-world challenges.
          <br />
          <br />
          Through its innovative approach and sustained growth, DataScience
          continues to drive progress and make meaningful contributions to the
          digital ecosystem.
          <br />
          <br />
          <button className="browse-course-button">Browse Courses</button>
        </div>
        <div className="aboutus-image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
      </div>

      {/* The new section with border box */}
      <div className="stats-container">
        <div className="stats-box">
          <div className="stat">
            <div className="stat-number">555+</div>
            <div className="stat-label">Our Mentors</div>
          </div>
          <div className="stat">
            <div className="stat-number">99k+</div>
            <div className="stat-label">All Students</div>
          </div>
          <div className="stat">
            <div className="stat-number">250+</div>
            <div className="stat-label">All Courses</div>
          </div>
          <div className="stat">
            <div className="stat-number">66+</div>
            <div className="stat-label">Winning Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
