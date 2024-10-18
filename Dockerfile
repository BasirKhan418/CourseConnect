
 # Use base image for dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Install dependencies early to leverage caching
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Build the application
FROM node:18-alpine AS build
WORKDIR /app

COPY . . 
# Use build-time caching for npm packages
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

# Final image for running the app
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port and start the application
EXPOSE 3000
CMD ["npm", "run", "start"]

    