# Build ProPet Web
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build", "--omit=dev"]

# Crete server container
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN ["rm", "-rf", "./*"]
COPY --from=builder /app/dist/angular-app .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
