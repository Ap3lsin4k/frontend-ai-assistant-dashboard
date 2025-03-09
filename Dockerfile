# Use Node.js v20 as base
FROM node:20-alpine as base
WORKDIR /app

# Install dependencies
FROM base as deps
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM deps as builder
COPY . .
RUN npm run build

# Production image
FROM base as runner
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy only necessary files
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]