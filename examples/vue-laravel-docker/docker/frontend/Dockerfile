FROM node:16

# Install dependencies
RUN apt-get update && apt-get install -y \
    vim \
    zip \
    unzip \
    curl

# Change current user to www
USER node

CMD ["bash", "-c", "npm install"]
CMD ["bash", "-c", "npm run serve"]
