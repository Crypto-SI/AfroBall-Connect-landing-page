#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building Docker image for production...${NC}"
docker build -t afroball-connect:production .

echo -e "${BLUE}Running Docker container...${NC}"
echo -e "${GREEN}The application will be available at: http://localhost:3000${NC}"
docker run -p 3000:3000 afroball-connect:production 