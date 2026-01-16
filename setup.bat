@echo off
REM ============================================================================
REM  BACKEND SETUP SCRIPT
REM  Description: Installs all core backend dependencies for the application
REM  Author: Backend Developer
REM  Usage: Run this script from the project root directory
REM ============================================================================

echo.
echo ============================================
echo   BACKEND SETUP - Installing Dependencies
echo ============================================
echo.

REM Check if backend directory exists, create if not
if not exist "backend" (
    echo [INFO] Creating backend directory...
    mkdir backend
)

REM Navigate to backend directory
cd backend

REM Initialize package.json if it doesn't exist
if not exist "package.json" (
    echo [INFO] Initializing package.json...
    call npm init -y
)

echo.
echo [STEP 1/3] Installing production dependencies...
echo ----------------------------------------------
REM Install production dependencies
REM - express: Web framework for Node.js
REM - cors: Cross-Origin Resource Sharing middleware
REM - helmet: Security headers middleware
REM - morgan: HTTP request logger
REM - dotenv: Environment variable management
REM - joi: Input validation library
REM - bcrypt: Password hashing library
REM - jsonwebtoken: JWT authentication
REM - cookie-parser: Cookie parsing middleware
call npm install express cors helmet morgan dotenv joi bcrypt jsonwebtoken cookie-parser

echo.
echo [STEP 2/3] Installing development dependencies...
echo ------------------------------------------------
REM Install development dependencies
REM - typescript: TypeScript compiler
REM - ts-node: TypeScript execution environment
REM - nodemon: Auto-restart on file changes
REM - @types/*: TypeScript type definitions
call npm install -D typescript ts-node @types/node @types/express @types/cors @types/bcrypt @types/jsonwebtoken @types/cookie-parser @types/morgan nodemon

echo.
echo [STEP 3/3] Setup Complete!
echo --------------------------
echo.
echo ============================================
echo   BACKEND SETUP COMPLETED SUCCESSFULLY
echo ============================================
echo.
echo Next Steps:
echo   1. Run 'install_prisma.bat' to setup database ORM
echo   2. Run 'install_swagger.bat' to setup API documentation
echo   3. Configure your .env file with database credentials
echo   4. Run 'npm run dev' to start the development server
echo.

pause
