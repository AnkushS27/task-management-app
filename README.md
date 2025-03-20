# Task Management Application

A full-stack task management application built with React, TypeScript, Tailwind CSS for the frontend and Node.js, Express, and MongoDB for the backend.

![Task Manager Screenshot](https://task-management-app-bay-alpha.vercel.app/)

## 🚀 Live Demo

Visit at [https://task-management-demo.vercel.app](https://task-management-demo.vercel.app)

## ✨ Features

- ✅ Create, read, update, and delete tasks
- 📱 Responsive design for all devices
- 🎯 Task priority levels (Low, Medium, High)
- ⏰ Due date management
- 📊 Task status tracking (Pending/Completed)
- 🎨 Beautiful UI with Tailwind CSS
- 🔍 Detailed task view
- 🚦 Real-time status updates
- 📝 Rich task descriptions
- 🔄 RESTful API with Express.js
- 🗄️ MongoDB database with Mongoose ODM
- 🔒 Input validation and error handling

## 🛠️ Technologies Used

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm
- MongoDB (local installation or Atlas account)

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/AnkushS27/task-management-app.git
cd task-management-app
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
DB_NAME=taskDB
MONGO_URI=mongodb://localhost:27017/task-manager
NODE_ENV=development
```

4. Start the backend server:
```bash
# Development mode with hot reloading
pnpm dev

# Production mode
pnpm start
```

The backend server will be running at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_BACKEND_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
pnpm dev
```

The frontend application will be available at `http://localhost:5173`

## 📁 Project Structure

```
project/
├── backend/               # Backend code
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Server entry point
│
├── frontend/              # Frontend code
│   ├── src/               # Source code
│   │   ├── api/           # API integration
│   │   ├── components/    # React components
│   │   ├── types/         # TypeScript types
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   ├── .env               # Environment variables
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   ├── tsconfig.json      # TypeScript configuration
│   └── vite.config.ts     # Vite configuration
│
└── README.md              # Project documentation
```

## 🌐 API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Fetch a specific task
- `PUT /api/tasks/:id` - Update a task (including status changes)
- `DELETE /api/tasks/:id` - Delete a task

## 🎨 Frontend Component Overview

- `TaskForm` - Create and edit tasks
- `TaskCard` - Display individual tasks
- `TaskDetails` - Show detailed task information

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🔒 Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| DB_NAME | Database Name | taskDB |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/task-manager |
| NODE_ENV | Environment mode | development |

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| VITE_BACKEND_API_URL | Backend API URL | http://localhost:5000/api |

## 🚀 Deployment

### Backend
Deployed on Render, accessible at:
👉 https://task-management-app-5q3t.onrender.com/

### Frontend
Deployed on Vercel, accessible at:
👉 https://task-management-app-bay-alpha.vercel.app/)

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com/docs)
- [Vite](https://vitejs.dev)