#!/usr/bin/env bash

# A&H Techworld - Local & Public React (TSX) Web Application Launcher

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

PORT=8765

echo "=================================================="
echo " Starting A&H Techworld React (TSX) Web Server on port $PORT"
echo "=================================================="

# Kill any existing server running on port 8765
fuser -k ${PORT}/tcp >/dev/null 2>&1

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
    echo "Installing React dependencies (Vite, React, Lucide)..."
    npm install
fi

# Start Vite React server in background
echo "Launching Vite React App on http://localhost:${PORT}..."
npx vite --port ${PORT} --host > /dev/null 2>&1 &
SERVER_PID=$!

sleep 2

echo "Local React URL:  http://localhost:${PORT}"
echo ""
echo "Starting Cloudflare Public Tunnel..."
echo "=================================================="

# Download cloudflared binary if not present
if [ ! -f "./cloudflared" ]; then
    echo "Downloading cloudflared binary..."
    curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o ./cloudflared
    chmod +x ./cloudflared
fi

# Cleanup Vite server process on exit
trap "kill $SERVER_PID" EXIT

# Launch Cloudflare Tunnel
./cloudflared tunnel --url http://localhost:${PORT}
