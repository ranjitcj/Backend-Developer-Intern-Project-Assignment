# Frontend Application

React-based frontend application for the Product Management System built with Vite, TypeScript, and TailwindCSS.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI library |
| Vite | Latest | Build tool & dev server |
| TypeScript | 5.x | Type-safe development |
| TailwindCSS | 3.x | Utility-first CSS framework |
| React Router | 6.x | Client-side routing |
| Axios | 1.x | HTTP client for API calls |
| React Hook Form | 7.x | Form state management |

---

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── api/            # API client configuration
│   │   └── client.ts   # Axios instance with interceptors
│   ├── assets/         # Images, fonts, etc.
│   ├── pages/          # Page components
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── DashboardPage.tsx
│   ├── App.tsx         # Root component with routing
│   ├── App.css         # App-specific styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles (Tailwind)
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.ts      # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at: `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### TailwindCSS

TailwindCSS is configured in [tailwind.config.js](tailwind.config.js). The content paths are set to scan all relevant files for class names.

### TypeScript

TypeScript configuration is split into:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node environment settings

---

## 📖 Pages

### Login Page (`/login`)
- User authentication form
- JWT token handling
- Redirect to dashboard on success

### Register Page (`/register`)
- New user registration form
- Input validation
- Automatic login after registration

### Dashboard Page (`/dashboard`)
- Product listing
- CRUD operations for products
- Protected route (requires authentication)

---

## 🔐 Authentication Flow

1. User submits login/register form
2. API call to backend authentication endpoint
3. JWT tokens stored in memory/localStorage
4. Axios interceptor attaches token to all requests
5. Automatic token refresh when needed

---

## 🎨 Styling

The application uses TailwindCSS for styling with:
- Utility-first approach
- Responsive design built-in
- Custom color palette (if configured)
- Dark mode support (optional)

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**For full project documentation, see the main [README.md](../README.md)**
