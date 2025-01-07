import React from "react";
import "./SignUp.css"; // Ensure this path is correct

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-header">
        <h1 className="signup-title">Sign Up</h1>
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Sign Up</span>
        </div>
      </div>
      <div className="signup-container">
        <div className="signup-box">
          <form>
            <div className="name-fields">
              <div className="field-container">
                <label htmlFor="first-name">First Name:</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                />
              </div>

              <div className="field-container">
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
