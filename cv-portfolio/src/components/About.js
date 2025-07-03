import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I enjoy creating efficient, scalable, and user-friendly applications that solve 
              real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I bring ideas 
              to life through clean code and innovative solutions. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
