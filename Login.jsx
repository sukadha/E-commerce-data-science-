import React from 'react';
import './Login.css';  // Import the CSS file

const Login = () => {
  return (
    <div className="container">
      <h2 className="title">Login</h2> {/* Title at the top center */}
      <div className="borderBox">
        <div className="innerBox">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="innerBox">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input"
          />
        </div>

        {/* Remember Me Checkbox below the password box */}
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="rememberMeLabel">Remember Me</label>
        </div>

        <button className="submitButton">Submit</button>
      </div>
    </div>
  );
};

export default Login;
