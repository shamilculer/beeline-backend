# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY ./package*.json .
COPY ./tsconfig.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Environment
ENV NODE_ENV=development

# Expose port
EXPOSE 3001

# Run the application
CMD ["node", "dist/index.js"]