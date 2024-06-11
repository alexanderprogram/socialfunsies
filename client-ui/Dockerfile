# Stage 1: Build the Angular application
FROM node:18.19.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Run the Express server
FROM node:18.19.0

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/dist /app/dist

# Copy necessary files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose port 4000 to the outside world
EXPOSE 4000

# Start the server
CMD ["node", "dist/server/main.js"]
