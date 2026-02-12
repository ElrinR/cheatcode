#!/bin/bash

# AntiCheat Pro - Quick Startup Script for Mac/Linux

echo ""
echo "========================================"
echo "  🛡️  AntiCheat Pro - Startup"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "Starting server on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
npm start
