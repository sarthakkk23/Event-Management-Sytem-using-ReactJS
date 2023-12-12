import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
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

    // Here, you can add code to handle the form data on the client side
    // For example, you can display a success message or perform additional actions
    console.log({ email, pass });

    // For demonstration purposes, let's log the user object to the console
    // Replace the following code with your actual server-side login logic

    // Simulate a successful login
    // const data = { /* your user data */ };
    // navigate("/Homepage1");

    // Simulate a login error
  };

  return (
    <div className="main-content">
      <div className={`auth-form-container ${fadeIn ? 'fade-in' : ''}`}>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button1">
            <Link to="/Homepage1">Login</Link>
          </button>
        </form>
        <button className="link-btn">
          <Link to="/Registerpage">Don't have an account? Register here.</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
