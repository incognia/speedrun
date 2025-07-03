import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/api/placeholder/150/150" alt="Rodrigo Álvarez" />
          </div>
          <div className="profile-info">
            <h1>Rodrigo Álvarez</h1>
            <h2>DevOps Engineer</h2>
            <p>Passionate about automation, reliability and modern platform design</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
