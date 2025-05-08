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

# Install dependencies
RUN npm ci --frozen-lockfile

# --- Builder Stage ---
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Disable Next.js telemetry in builds
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application for production
RUN npm run build

# --- Production Runner Stage ---
FROM base AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user to run the app and own app files
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the correct ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set the host to be accessible outside the container
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Command to run the application
CMD ["node", "server.js"] 