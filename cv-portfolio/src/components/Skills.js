import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jest", level: 80 },
        { name: "Figma", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
