FROM node:20.8.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/app.js" ]