# Base image
FROM node:8.11.2

# Open the web port
EXPOSE 3001

# Install yarn, packages, and code for server
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
# RUN npm i yarn -g
RUN yarn install
COPY . . 

# Install client packages and build
WORKDIR /usr/src/app/client
RUN yarn install
RUN yarn build

# Define the command to run the server
WORKDIR /usr/src/app
CMD ["yarn", "production"]
