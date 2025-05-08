#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building Docker Compose setup for production...${NC}"
docker compose build

echo -e "${BLUE}Starting services...${NC}"
docker compose up -d

echo -e "${GREEN}The application is now running in detached mode.${NC}"
echo -e "${GREEN}The application is available at: http://localhost:3000${NC}"
echo -e "${YELLOW}To view logs:${NC} docker compose logs -f"
echo -e "${YELLOW}To stop:${NC} docker compose down" 