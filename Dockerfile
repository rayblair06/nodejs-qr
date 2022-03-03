# Start with fully-featured Node.js base image
FROM node:16.13.2 AS build

WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY package.json package-lock.json ./

RUN npm ci

# Copy source code (and all other relevant files)
COPY src ./src

# Build code
RUN npm run build


# Run-time stage
FROM node:16.13.2-slim

# Expose port 3000
EXPOSE 3000

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy results from previous stage
COPY --from=build /home/node/app/dist ./dist

CMD ["node", "dist/server.js"]
