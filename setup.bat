@echo off
REM Portfolio Website - Quick Start Script for Windows
REM Run this script to set up and start the development server

echo.
echo ========================================
echo  Chetan's AI Portfolio Website
echo  Quick Setup Script (Windows)
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js 16+ from https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js is installed: & node --version
echo [OK] npm version: & npm --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.

echo Available Commands:
echo   npm run dev    ^(Start development server^)
echo   npm run build  ^(Build for production^)
echo   npm run preview  ^(Preview production build^)
echo.

echo Next Steps:
echo   1. Customize your information in src/constants.js
echo   2. Update colors in tailwind.config.js if desired
echo   3. Add your resume to the public/ folder
echo   4. Run "npm run dev" to start developing
echo.

pause
