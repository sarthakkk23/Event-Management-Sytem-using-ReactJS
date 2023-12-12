import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fadeIn, setFadeIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (pass.length < 6) {
      setEmailError('Password must be at least 6 characters long');
      return;
    }

    // Here, you can add code to handle the form data on the client side
    // For example, you can display a success message or perform additional actions

    // For demonstration purposes, let's log the user object to the console
    console.log("User data:", { name, email, pass });
  };

  return (
    <div className="main-content">
      <div className={`auth-form-container ${fadeIn ? 'fade-in' : ''}`}>
        <h2 className="registerh2">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Full Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <div className="error">{emailError}</div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button1">
           <Link to="/Homepage1">Register</Link>
          </button>
        </form>
        <button className="link-btn">
          <Link to="/Loginpage">Already have an account? Login here.</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
