# Step 1: Build Angular app
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm install -g @angular/cli && ng build --configuration production

# Step 2: Serve with Nginx
FROM nginx:alpine


COPY --from=builder /app/dist/movie-home-ui /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
