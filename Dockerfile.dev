# Start with fully-featured Node.js base image
FROM node:16.13.2 AS build

USER node
WORKDIR /app

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN npm run build


# Run-time stage
FROM node:16.13.2-slim

# Set non-root user and expose port 3000
USER node
EXPOSE 3000

WORKDIR /app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --production

# Copy results from previous stage
COPY --chown=node:node --from=build /app/dist ./dist

CMD ["node", "dist/server.js"]
