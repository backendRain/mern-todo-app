Full-Stack MERN To-Do List Application

A complete full-stack To-Do List application built from scratch using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates core web development principles including building a RESTful API, managing a database, creating a dynamic user interface with React, and handling application state.

Live Demo soon

Features: 
Full CRUD Functionality: Create, Read, Update, and Delete to-do items.
Persistent Data: All tasks are stored in a MongoDB Atlas cloud database.
Dynamic UI: The user interface is built with React and updates instantly without page reloads.
Responsive Design: The layout is optimized for both desktop and mobile devices.
Light/Dark Mode: A theme toggler for a better user experience, implemented with CSS Variables and React State.


Technology Stack:

backend: Node.js: JavaScript runtime environment.
Express.js: Web application framework for Node.js, used to build the REST API.
MongoDB: NoSQL database for storing task data.
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
dotenv: For managing environment variables (like the database connection string).

frontend: 
React: JavaScript library for building user interfaces.
React Hooks: Used useState for component-level state and useEffect for handling side effects like fetching data.
CSS3: Custom styling with a clean, modern design, including CSS Variables for easy theming.
Fetch API: Used for making asynchronous requests to the backend API.

tools used: 
Visual Studio Code
Git & GitHub: Version control.
Thunder Client: API testing within VS Code.


How I did setup and install:

1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Backend Setup

# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Create a .env file in the /backend folder with your MongoDB connection string
# It should look like this:
MONGO_URI=mongodb+srv://your_username:your_password@cluster_info.mongodb.net/

# Start the backend server (runs on http://localhost:5001)
npm start

3. Frontened

# In a new terminal for frontend I did

cd frontend
npm install
npm start

# Server runs on localhost:3000
# As I learn more i plan on improving user experience  