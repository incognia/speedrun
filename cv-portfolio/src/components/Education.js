import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Computer Science Engineering",
      school: "Universidad Tecnológica Nacional",
      period: "2015 - 2019",
      description: "Specialized in software development and systems architecture"
    },
    {
      degree: "Full Stack Web Development",
      school: "FreeCodeCamp Certification",
      period: "2018",
      description: "Comprehensive training in modern web technologies"
    },
    {
      degree: "React Development Bootcamp",
      school: "Udemy Platform",
      period: "2019",
      description: "Advanced React patterns and state management"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">🎓</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <span className="period">{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
