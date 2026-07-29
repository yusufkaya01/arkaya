#!/bin/bash

# Read PORT from .env file or use default 3000
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Use PORT from env or default to 3000
PORT=${PORT:-3000}

echo "Starting React app on port $PORT..."
PORT=$PORT npm start
