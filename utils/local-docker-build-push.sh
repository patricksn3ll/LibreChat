#!/bin/bash
# Simple script to build, tag, and push a Docker image for cribmetrics

set -e

IMAGE_NAME=${1:-cribmetrics}
TAG=${2:-latest}
PACKAGE="$IMAGE_NAME:$TAG"
ACR=acrcribmetrics
ISDEV=${ISDEV:-false}

cd ..

echo "Sourcing the .env file"
set -a
source .env
set +a

# echo "Building Docker image..."
# if [ "$ISDEV" = "true" ]; then
#     docker build -t $PACKAGE -f Dockerfile.dev .
# else
#     docker build -t $PACKAGE -f Dockerfile.optimized .
# fi

# echo "Tagging Docker image..."
# docker tag $PACKAGE acrcribmetrics.azurecr.io/$PACKAGE


# echo "Pushing Docker image..."
# docker push acrcribmetrics.azurecr.io/$PACKAGE

echo "Updating docker-compose.yml with latest image"
sed -i.bak "s|image: acrcribmetrics.azurecr.io/$IMAGE_NAME:.*|image: acrcribmetrics.azurecr.io/$IMAGE_NAME:$TAG|g" docker-compose.yml
rm docker-compose.yml.bak

echo "Deploying docker image"

echo "Take down existing deployment"
docker compose down

echo "Bring up new deployment"
docker compose up -d

echo "Following logs ctrl-c to exit..."
docker logs cribmetrics -f

echo "Done."
