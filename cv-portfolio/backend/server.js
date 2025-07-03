const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    // For now, we'll use a local MongoDB or you can replace with MongoDB Atlas
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cv-portfolio';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// CV Data Schema
const cvDataSchema = new mongoose.Schema({
  personalInfo: {
    name: String,
    title: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String
  },
  about: String,
  experience: [{
    title: String,
    company: String,
    period: String,
    description: [String]
  }],
  education: [{
    degree: String,
    school: String,
    period: String,
    description: String
  }],
  skills: [{
    category: String,
    skills: [{
      name: String,
      level: Number
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CVData = mongoose.model('CVData', cvDataSchema);

// Routes

// Get CV data
app.get('/api/cv', async (req, res) => {
  try {
    let cvData = await CVData.findOne();
    
    // If no data exists, create default data
    if (!cvData) {
      cvData = new CVData({
        personalInfo: {
          name: 'Rodrigo Álvarez',
          title: 'DevOps Engineer',
          email: 'incognia@gmail.com',
          phone: '+54 11 1234-5678',
          github: 'https://github.com/incognia',
          linkedin: 'https://linkedin.com/in/rodrigoalvarez'
        },
        about: 'Passionate DevOps Engineer with expertise in Kubernetes, automation, and infrastructure as code.',
        experience: [
          {
            title: 'DevOps Engineer',
            company: 'Innovative Solutions Co.',
            period: '2022 - Present',
            description: [
              'Developed and managed Kubernetes clusters on Proxmox bare-metal servers',
              'Implemented GitOps workflows using Argo CD and Helm for automated deployments',
              'Enhanced observability by integrating Prometheus, Grafana and OpenTelemetry'
            ]
          }
        ],
        education: [
          {
            degree: 'Computer Science Engineering',
            school: 'Universidad Tecnológica Nacional',
            period: '2015 - 2019',
            description: 'Specialized in software development and systems architecture'
          }
        ],
        skills: [
          {
            category: 'Frontend',
            skills: [
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 95 },
              { name: 'TypeScript', level: 85 }
            ]
          }
        ]
      });
      await cvData.save();
    }
    
    res.json(cvData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update CV data
app.put('/api/cv', async (req, res) => {
  try {
    const updatedData = await CVData.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you would typically send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CV Portfolio API is running' });
});

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app;
