import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps  26 Cloud",
      skills: [
        { name: "Kubernetes", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Prometheus", level: 80 },
        { name: "Service Mesh", level: 75 },
        { name: "CI/CD", level: 85 }
      ]
    },
    {
      title: "Observability  26 Monitoring",
      skills: [
        { name: "Grafana", level: 85 },
        { name: "Fluentd", level: 80 },
        { name: "Opentelemetry", level: 75 },
        { name: "Elasticsearch", level: 80 },
        { name: "Kibana", level: 85 }
      ]
    },
    {
      title: "Infrastructure & GitOps",
      skills: [
        { name: "Proxmox VE", level: 85 },
        { name: "Helm", level: 80 },
        { name: "Argo CD", level: 75 },
        { name: "Istio", level: 70 },
        { name: "Jenkins", level: 85 }
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
