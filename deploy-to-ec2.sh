#!/bin/bash

# Stop all running containers related to frontend and backend services
docker-compose -f frontend-docker-compose.yaml stop
docker-compose -f backend-docker-compose.yaml stop

# Remove the containers for a clean slate (note: this doesn't remove the volumes)
docker-compose -f frontend-docker-compose.yaml rm -f
docker-compose -f backend-docker-compose.yaml rm -f

# Optionally, prune all unused Docker containers, networks, and images
# (be cautious with this in a production environment)
docker system prune -af

# Pull the latest images as defined in both docker-compose files
docker-compose -f frontend-docker-compose.yaml pull
docker-compose -f backend-docker-compose.yaml pull

# Start or restart the services using the new images
docker-compose -f frontend-docker-compose.yaml -f backend-docker-compose.yaml up -d
