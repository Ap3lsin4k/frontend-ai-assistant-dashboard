FROM node:20-alpine

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm ci

# Expose port
EXPOSE 3000

# Use development mode instead of production
CMD ["npm", "run", "dev"]