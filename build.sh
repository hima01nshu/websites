#!/bin/bash

# Default to linux/amd64 for AWS EC2
PLATFORM="linux/amd64"

if [ -z "$1" ]; then
    echo "Usage: ./build.sh <docker-hub-username>"
    echo "Example: ./build.sh himanshu123"
    exit 1
fi

USERNAME=$1
IMAGE_NAME="$USERNAME/portfolio:latest"

echo "Building Docker image for $PLATFORM (No Cache)..."
docker buildx build --no-cache --platform $PLATFORM -t $IMAGE_NAME --push .

if [ $? -eq 0 ]; then
    echo "✅ Build and Push complete!"
    echo "Image: $IMAGE_NAME"
    echo "You can now pull this image on your EC2 instance."
else
    echo "❌ Build failed. Make sure you are logged in with 'docker login'."
fi
