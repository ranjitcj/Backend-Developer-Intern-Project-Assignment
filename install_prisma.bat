@echo off
REM ============================================================================
REM  PRISMA ORM INSTALLATION SCRIPT
REM  Description: Installs and configures Prisma ORM for database management
REM  Author: Backend Developer
REM  Usage: Run this script after setup.bat from the project root directory
REM ============================================================================

echo.
echo ============================================
echo   PRISMA ORM SETUP - Database Management
echo ============================================
echo.

REM Navigate to backend directory
cd backend

echo [STEP 1/3] Installing Prisma CLI (dev dependency)...
echo ----------------------------------------------------
REM Prisma CLI is used for migrations, schema management, and code generation
call npm install prisma --save-dev

echo.
echo [STEP 2/3] Installing Prisma Client (production)...
echo ---------------------------------------------------
REM Prisma Client is the auto-generated query builder for your database
call npm install @prisma/client

echo.
echo [STEP 3/3] Generating Prisma Client...
echo --------------------------------------
REM Generate the Prisma Client based on your schema
call npx prisma generate

echo.
echo ============================================
echo   PRISMA SETUP COMPLETED SUCCESSFULLY
echo ============================================
echo.
echo Prisma Commands Reference:
echo   npx prisma init          - Initialize Prisma in your project
echo   npx prisma generate      - Generate Prisma Client
echo   npx prisma migrate dev   - Create and apply migrations
echo   npx prisma studio        - Open Prisma Studio (GUI)
echo   npx prisma db push       - Push schema changes (no migration)
echo.
echo Next Steps:
echo   1. Ensure your .env file has the correct DATABASE_URL
echo   2. Define your schema in prisma/schema.prisma
echo   3. Run 'npx prisma migrate dev' to create tables
echo.

pause
