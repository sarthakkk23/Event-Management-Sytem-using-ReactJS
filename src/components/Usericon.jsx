import usericon from '../images/usericon.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Usericon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-menu">
      <div className="user-name"></div>
      <div className="user-icon" onClick={toggleMenu}>
        <img src={usericon} alt="Your Logo" />
      </div>
      <ul className={`menu-options ${isOpen ? 'open' : ''}`}>
        <li>
          <button>Delete Account</button>
        </li>
        <li>
          <button>Change Password</button>
          </li>
        <li><button><Link to="/">Log Out</Link></button></li>
      </ul>
    </div>
  );
};

export default Usericon;
