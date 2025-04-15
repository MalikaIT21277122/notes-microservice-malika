 # Use official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose port 3000 on the container
EXPOSE 3000

# Command to run your app
CMD ["node", "index.js"]

