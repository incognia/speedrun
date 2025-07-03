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
              I'm a passionate DevOps Engineer with expertise in Kubernetes, automation, and 
              infrastructure as code. I specialise in building and operating modern platforms 
              with GitOps workflows, advanced observability, and service mesh architectures.
            </p>
            <p>
              With extensive experience in bare-metal Kubernetes deployments and cloud-native 
              technologies, I excel at creating reliable, scalable infrastructure solutions. 
              I'm driven by continuous improvement and love working with cutting-edge technologies.
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
