import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "incognia@gmail.com",
      link: "mailto:incognia@gmail.com"
    },
    {
      icon: "🔗",
      title: "GitHub",
      value: "github.com/incognia",
      link: "https://github.com/incognia"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/rodrigoalvarez",
      link: "https://linkedin.com/in/rodrigoalvarez"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+54 11 1234-5678",
      link: "tel:+541112345678"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can work together!
        </p>
        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link} 
              className="contact-card"
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p>{contact.value}</p>
            </a>
          ))}
        </div>
        <div className="contact-cta">
          <h3>Ready to start a project?</h3>
          <a href="mailto:incognia@gmail.com" className="cta-button">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
