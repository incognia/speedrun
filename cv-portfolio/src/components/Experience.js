import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Implemented microservices architecture improving system performance by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications using MERN stack",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Optimized database queries reducing load times by 30%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: [
        "Built modern user interfaces using React and TypeScript",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Integrated RESTful APIs and managed application state"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
