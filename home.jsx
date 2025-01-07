import { useState } from "react";
import "./Home.css";
import titleLogo from "/datascience-logo.jpg";
import rightLogo from "/logo-first.png";

function Home() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={titleLogo} className="logo" alt="Title Logo" />
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <a href="/login">
            <button className="login-btn">Login</button>
          </a>
          <a href="/signup">
          <button className="signup-btn">Sign Up</button>
          </a>
        </div>
      </header>
      <main>
        <div className="title-container">
          <div className="text-content">
            <h1 className="main-title">
              Spread Your
              <br />
              <span className="highlight">Skills</span> Around
              <br />
              The World
            </h1>
            <p className="subtitle">
              Confidence in skills with experienced mentors and updated
              curriculum,
              <br /> E-learning is ready to advance your career.
            </p>
            <div className="email-form">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email address"
              />
              <button className="submit-btn">Subscribe</button>
            </div>
            <a href="/courses">
            <button className="browse-courses-btn">Browse Courses</button>
            </a>
          </div>
          <div className="image-content">
            <img src={rightLogo} alt="Right Logo" className="right-logo" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
