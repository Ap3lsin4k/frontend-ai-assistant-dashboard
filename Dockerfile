FROM node:20-alpine as builder

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm ci

# Build static site
RUN npm run build

# Create a minimal nginx container to serve the static files
FROM nginx:alpine

# Copy the built static files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]