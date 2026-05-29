#!/bin/bash

# Portfolio Website - Quick Start Script
# Run this script to set up and start the development server

echo "🚀 Setting up Chetan's AI Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Quick Start Commands:"
echo "  • npm run dev    - Start development server"
echo "  • npm run build  - Build for production"
echo "  • npm run preview - Preview production build"
echo ""
echo "🎨 Customization Tips:"
echo "  1. Edit src/constants.js to update your information"
echo "  2. Modify colors in tailwind.config.js"
echo "  3. Update social links in components"
echo "  4. Add your resume to public/ folder"
echo ""
echo "🚀 To start developing, run: npm run dev"
echo ""
