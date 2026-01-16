@echo off
REM ============================================================================
REM  SWAGGER DOCUMENTATION INSTALLATION SCRIPT
REM  Description: Installs Swagger UI for interactive API documentation
REM  Author: Backend Developer
REM  Usage: Run this script after setup.bat from the project root directory
REM ============================================================================

echo.
echo ============================================
echo   SWAGGER SETUP - API Documentation
echo ============================================
echo.

REM Navigate to backend directory
cd backend

echo [STEP 1/2] Installing Swagger packages...
echo -----------------------------------------
REM Install Swagger dependencies
REM - swagger-ui-express: Serves the Swagger UI interface
REM - swagger-jsdoc: Generates Swagger spec from JSDoc comments
call npm install swagger-ui-express swagger-jsdoc

echo.
echo [STEP 2/2] Installing TypeScript type definitions...
echo ----------------------------------------------------
REM Install type definitions for TypeScript support
call npm install -D @types/swagger-ui-express @types/swagger-jsdoc

echo.
echo ============================================
echo   SWAGGER SETUP COMPLETED SUCCESSFULLY
echo ============================================
echo.
echo Swagger UI will be available at: http://localhost:5000/api-docs
echo.
echo Usage Example (in your Express app):
echo.
echo   import swaggerUi from 'swagger-ui-express';
echo   import swaggerSpec from './config/swagger';
echo.
echo   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
echo.
echo Next Steps:
echo   1. Configure swagger options in src/config/swagger.ts
echo   2. Add JSDoc comments to your routes for documentation
echo   3. Access /api-docs when the server is running
echo.

pause
