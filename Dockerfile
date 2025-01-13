

# Base image for Node.js
FROM node:20-alpine3.16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .



# Expose port 5173
EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev"]