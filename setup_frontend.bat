@echo off
REM ============================================================================
REM  FRONTEND SETUP SCRIPT
REM  Description: Initializes and configures the React frontend with Vite
REM  Author: Backend Developer
REM  Usage: Run this script from the project root directory
REM ============================================================================

echo.
echo ============================================
echo   FRONTEND SETUP - Initializing React App
echo ============================================
echo.

REM Check if frontend directory exists, create if not
if not exist "frontend" (
    echo [INFO] Creating frontend directory...
    mkdir frontend
)

REM Navigate to frontend directory
cd frontend

echo [STEP 1/4] Creating Vite React TypeScript project...
echo ----------------------------------------------------
REM Create new Vite project with React TypeScript template
call npm create vite@latest . -- --template react-ts

echo.
echo [STEP 2/4] Installing base dependencies...
echo ------------------------------------------
call npm install

echo.
echo [STEP 3/4] Installing additional packages...
echo --------------------------------------------
REM Install additional dependencies
REM - axios: HTTP client for API calls
REM - react-router-dom: Client-side routing
REM - react-hook-form: Form state management
REM - react-toastify: Toast notifications
call npm install axios react-router-dom react-hook-form react-toastify

echo.
echo [STEP 4/4] Setting up TailwindCSS...
echo ------------------------------------
REM Install TailwindCSS and its dependencies
REM - tailwindcss: Utility-first CSS framework
REM - postcss: CSS transformation tool
REM - autoprefixer: Adds vendor prefixes automatically
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p

echo.
echo ============================================
echo   FRONTEND SETUP COMPLETED SUCCESSFULLY
echo ============================================
echo.
echo Next Steps:
echo   1. Configure tailwind.config.js with your content paths
echo   2. Add Tailwind directives to your CSS file
echo   3. Run 'npm run dev' to start the development server
echo.
echo The frontend will be available at: http://localhost:5173
echo.

pause
