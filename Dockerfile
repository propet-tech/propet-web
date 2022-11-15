# Build ProPet Web
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build", "--omit=dev"]

# Crete server container
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN ["rm", "-rf", "./*"]
COPY --from=builder /app/dist/pro-pet-front-end .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
