# Getting Started with Create React App
# CV Portfolio - MERN Stack

A modern, responsive CV/Portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- 📱 Responsive design that works on all devices
- 🎨 Modern UI with smooth animations and transitions
- 📧 Contact form functionality
- 🚀 Full MERN stack implementation
- 📊 Skills visualization with progress bars
- 📍 Timeline-based experience section
- 🎓 Education cards with beautiful styling

## Tech Stack

**Frontend:**
- React.js
- CSS3 with modern features (Grid, Flexbox, Animations)
- Responsive design

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- RESTful API design

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/incognia/speedrun.git
cd speedrun/cv-portfolio
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

### 4. Environment Setup
Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cv-portfolio
NODE_ENV=development
```

### 5. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For macOS with Homebrew
brew services start mongodb-community

# For Linux
sudo systemctl start mongod

# For Windows
net start MongoDB
```

### 6. Run the Application

**Start the backend server:**
```bash
cd backend
npm run dev
```

**Start the frontend (in a new terminal):**
```bash
npm start
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

## API Endpoints

- `GET /api/cv` - Get CV data
- `PUT /api/cv` - Update CV data
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Project Structure

```
cv-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   └── Contact.js
│   ├── App.js
│   └── App.css
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Customization

To customize the CV with your own information:

1. **Personal Information**: Update the data in `backend/server.js` in the default CV data object
2. **Styling**: Modify the CSS files in the components directory
3. **Content**: Update the components in `src/components/` to match your needs

## Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Heroku/Railway)
Make sure to set the environment variables in your hosting platform and update the MongoDB URI to use MongoDB Atlas for production.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Name**: Rodrigo Álvarez
- **Email**: incognia@gmail.com
- **GitHub**: [@incognia](https://github.com/incognia)

---

Built with ❤️ using React and Node.js
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
