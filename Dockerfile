# Use a lightweight Node.js base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY --chown=node:node . /usr/src/app

# Expose the port on which your application will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
