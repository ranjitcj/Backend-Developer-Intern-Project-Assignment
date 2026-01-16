# Full Stack Product Management Application

A production-ready full-stack application featuring secure Authentication, Role-Based Access Control (RBAC), and comprehensive Product Management capabilities.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
  - [Quick Setup (Windows)](#quick-setup-windows)
  - [Manual Setup](#manual-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Scripts Reference](#scripts-reference)

---

## 🎯 Overview

This application provides a complete solution for product management with user authentication and authorization. It includes:
- Secure user registration and login system
- JWT-based authentication with access and refresh tokens
- Role-based access control (Admin/User roles)
- Full CRUD operations for product management
- RESTful API with Swagger documentation
- Modern React frontend with TypeScript

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js (v18+) | Runtime environment |
| Express.js 5.x | Web framework |
| TypeScript | Type-safe development |
| Prisma ORM | Database ORM & migrations |
| PostgreSQL 15 | Relational database |
| JWT | Authentication tokens |
| Joi | Request validation |
| Swagger | API documentation |
| Helmet | Security headers |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Vite | Build tool & dev server |
| TypeScript | Type-safe development |
| TailwindCSS | Utility-first CSS |
| React Router | Client-side routing |
| Axios | HTTP client |
| React Hook Form | Form management |

### DevOps & Tools
| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |

---

## 📁 Project Structure

```
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── config/         # Database & Swagger configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Auth & validation middleware
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helper functions (JWT, password, validation)
│   │   ├── app.ts          # Express app configuration
│   │   └── server.ts       # Server entry point
│   └── prisma/
│       ├── schema.prisma   # Database schema
│       └── migrations/     # Database migrations
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── api/            # API client configuration
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Root component
│   │   └── main.tsx        # Entry point
│   └── public/             # Static assets
├── docker-compose.yml       # Docker services configuration
└── *.bat                    # Windows setup scripts
```

---

## ⚙️ Prerequisites

Ensure the following software is installed on your system:

| Software | Version | Download Link |
|----------|---------|---------------|
| Node.js | v18.0.0 or higher | [nodejs.org](https://nodejs.org/) |
| npm | v9.0.0 or higher | Included with Node.js |
| Docker Desktop | Latest | [docker.com](https://www.docker.com/products/docker-desktop/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

### Verify Installation
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
docker --version  # Docker installed
```

---

## 🚀 Installation Guide

### Quick Setup (Windows)

For Windows users, batch scripts are provided for automated setup:

#### Step 1: Start Database
```bash
docker-compose up -d
```

#### Step 2: Setup Backend
```bash
# Run the main setup script (installs all backend dependencies)
setup.bat

# Install Prisma ORM
install_prisma.bat

# Install Swagger documentation
install_swagger.bat
```

#### Step 3: Setup Frontend
```bash
setup_frontend.bat
```

#### Step 4: Run Database Migrations
```bash
cd backend
npx prisma migrate dev
```

---

### Manual Setup

#### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Backend-Developer--Intern----Project-Assignment
```

#### Step 2: Start PostgreSQL Database
```bash
docker-compose up -d
```
This starts a PostgreSQL 15 container with:
- **Port**: 5433 (mapped to internal 5432)
- **Database**: myapp
- **Username**: user
- **Password**: password

#### Step 3: Backend Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

The backend server will start at: `http://localhost:5000`

#### Step 4: Frontend Installation

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start at: `http://localhost:5173`

---

## ▶️ Running the Application

### Development Mode

**Terminal 1 - Database:**
```bash
docker-compose up -d
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 3 - Frontend:**
```bash
cd frontend
npm run dev
```

### Access Points
| Service | URL |
|---------|-----|
| Frontend Application | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| Swagger API Docs | http://localhost:5000/api-docs |

### Production Build

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

---

## 📖 API Documentation

Interactive API documentation is available via Swagger UI:

**URL**: `http://localhost:5000/api-docs`

### Available Endpoints

#### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| POST | `/api/auth/refresh` | Refresh access token | Yes |
| POST | `/api/auth/logout` | User logout | Yes |

#### Product Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | Yes |
| GET | `/api/products/:id` | Get product by ID | Yes |
| POST | `/api/products` | Create new product | Yes |
| PUT | `/api/products/:id` | Update product | Yes |
| DELETE | `/api/products/:id` | Delete product | Yes (Admin only) |

---

## ✨ Features

### 🔐 Authentication & Security
- **User Registration**: Secure account creation with password hashing (bcrypt)
- **User Login**: JWT-based authentication with access and refresh tokens
- **Token Refresh**: Automatic token renewal for seamless user experience
- **Secure Logout**: Proper session termination

### 👥 Role-Based Access Control (RBAC)
- **User Role**: Standard access to product CRUD operations
- **Admin Role**: Full access including product deletion
- **Protected Routes**: Middleware-based route protection

### 📦 Product Management
- **Create**: Add new products with validation
- **Read**: View all products or specific product details
- **Update**: Modify existing product information
- **Delete**: Remove products (Admin only)

### 🛡️ Security Features
- **Helmet**: HTTP security headers
- **CORS**: Configured cross-origin resource sharing
- **Input Validation**: Joi schema validation
- **Password Hashing**: Bcrypt encryption
- **JWT Tokens**: Secure, stateless authentication

---

## 🔧 Environment Variables

### Backend (.env file in /backend)

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5433/myapp"

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

> ⚠️ **Important**: Change the JWT secrets in production!

---

## 🔍 Troubleshooting

### Common Issues

#### 1. Database Connection Failed
```
Error: Can't reach database server at localhost:5433
```
**Solution**: Ensure Docker is running and the PostgreSQL container is started:
```bash
docker-compose up -d
docker ps  # Verify container is running
```

#### 2. Prisma Client Issues
```
Error: @prisma/client did not initialize yet
```
**Solution**: Regenerate Prisma client:
```bash
cd backend
npx prisma generate
```
Or run the fix script (Windows):
```bash
fix_prisma.bat
```

#### 3. Port Already in Use
```
Error: EADDRINUSE: address already in use :::5000
```
**Solution**: Kill the process using the port:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change the port in .env file
```

#### 4. Migration Issues
```
Error: Migration failed
```
**Solution**: Reset the database and rerun migrations:
```bash
cd backend
npx prisma migrate reset
npx prisma migrate dev
```

#### 5. Node Modules Issues
**Solution**: Delete node_modules and reinstall:
```bash
# Backend
cd backend
rmdir /s /q node_modules
npm install

# Frontend
cd frontend
rmdir /s /q node_modules
npm install
```

---

## 📜 Scripts Reference

### Batch Files (Windows)

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `setup.bat` | Installs core backend dependencies (Express, TypeScript, etc.) | Run first for initial backend setup |
| `install_prisma.bat` | Installs Prisma ORM and generates client | Run after setup.bat |
| `install_swagger.bat` | Installs Swagger UI for API documentation | Run after setup.bat |
| `setup_frontend.bat` | Initializes React frontend with Vite | Run once for frontend setup |
| `fix_prisma.bat` | Fixes Prisma version conflicts by reinstalling | Run if Prisma errors occur |

### NPM Scripts

**Backend (`/backend`):**
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload (nodemon) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production server |

**Frontend (`/frontend`):**
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 📄 License

ISC License

---

## 👨‍💻 Contact

For questions or support regarding this project, please contact the development team.

---

**For scalability considerations and architecture notes, see [SCALABILITY.md](SCALABILITY.md)**
