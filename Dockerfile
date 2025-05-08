# Use an official Node.js runtime as a parent image (LTS version)
FROM node:20-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Install pnpm globally if you are using it, adjust if using npm or yarn
# RUN npm install -g pnpm

# --- Dependencies Stage ---
FROM base AS deps
WORKDIR /app

# Copy package.json and lockfile
COPY package.json package-lock.json* ./
# Or if using pnpm:
# COPY package.json pnpm-lock.yaml ./
# Or if using yarn:
# COPY package.json yarn.lock ./

# Install app dependencies
# If using pnpm, ensure pnpm-lock.yaml is copied and use pnpm install
RUN npm install --frozen-lockfile
# Or if using pnpm:
# RUN pnpm install --frozen-lockfile
# Or if using yarn:
# RUN yarn install --frozen-lockfile

# --- Builder Stage ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application (though for dev, this step is often skipped or different)
# For a dev server, we usually don't build like this. We run `npm run dev`.
# This build command is more for production.
# RUN npm run build

# --- Runner Stage (for Development) ---
FROM base AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "run", "dev"] 