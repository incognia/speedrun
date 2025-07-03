import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Innovative Solutions Co.",
      period: "2022 - Present",
      description: [
        "Developed and managed Kubernetes clusters on Proxmox bare-metal servers",
        "Implemented GitOps workflows using Argo CD and Helm for automated deployments",
        "Enhanced observability by integrating Prometheus, Grafana and OpenTelemetry"
      ]
    },
    {
      title: "Site Reliability Engineer",
      company: "Tech Innovations Ltd.",
      period: "2020 - 2022",
      description: [
        "Managed CI/CD pipelines with Jenkins and GitLab CI",
        "Improved system performance and reliability through load balancing and auto-scaling",
        "Led efforts in implementing service mesh architecture with Istio and Envoy"
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
