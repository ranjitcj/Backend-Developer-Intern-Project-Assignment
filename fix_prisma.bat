@echo off
REM ============================================================================
REM  PRISMA FIX SCRIPT
REM  Description: Fixes Prisma version conflicts and regenerates the client
REM  Author: Backend Developer
REM  Usage: Run this script if you encounter Prisma-related errors
REM ============================================================================

echo.
echo ============================================
echo   PRISMA FIX - Resolving Version Conflicts
echo ============================================
echo.

REM Navigate to backend directory
cd backend

echo [STEP 1/4] Removing existing Prisma packages...
echo ------------------------------------------------
REM Uninstall existing Prisma packages to ensure clean reinstall
call npm uninstall prisma @prisma/client

echo.
echo [STEP 2/4] Installing Prisma CLI (specific version)...
echo ------------------------------------------------------
REM Install a specific stable version of Prisma
call npm install prisma@5.10.0 --save-dev

echo.
echo [STEP 3/4] Installing Prisma Client (matching version)...
echo ---------------------------------------------------------
REM Install matching version of Prisma Client
call npm install @prisma/client@5.10.0

echo.
echo [STEP 4/4] Regenerating Prisma Client...
echo ----------------------------------------
REM Generate the Prisma Client with the new installation
call npx prisma generate

echo.
echo ============================================
echo   PRISMA FIX COMPLETED SUCCESSFULLY
echo ============================================
echo.
echo If you continue to experience issues:
echo.
echo   1. Delete node_modules folder and package-lock.json
echo   2. Run 'npm install' to reinstall all dependencies
echo   3. Run 'npx prisma generate' to regenerate the client
echo   4. Run 'npx prisma migrate reset' to reset the database
echo.
echo Common Prisma Errors and Solutions:
echo.
echo   Error: "@prisma/client did not initialize yet"
echo   Solution: Run 'npx prisma generate'
echo.
echo   Error: "Migration failed"
echo   Solution: Check DATABASE_URL in .env file
echo.
echo   Error: "P1001: Can't reach database server"
echo   Solution: Ensure PostgreSQL container is running
echo.

pause
