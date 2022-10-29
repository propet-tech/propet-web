# Build ProPet Web
FROM node:alpine
WORKDIR /app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build", "--prod"]

# Crete server container
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN ["rm", "-rf", "./*"]
COPY --from node /app/dist/angular-app .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

