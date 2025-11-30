# 1) Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Build the Astro site
RUN npm run build

# 2) Run stage - use Astro's preview server
FROM node:20-alpine

WORKDIR /app

# Copy app + node_modules + build output
COPY --from=builder /app /app

# Astro preview will listen on this port
EXPOSE 4321

# Run Astro in preview (production) mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321", "--allowed-hosts", "kenzojohnson.dev,www.kenzojohnson.dev"]

