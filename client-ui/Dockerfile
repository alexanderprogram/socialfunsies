# Build stage
FROM node:18.19.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/client-ui/browser /usr/share/nginx/html/

# Copy CSR index.html to index.html because of the way Angular SSR works and otherwise the page will be the default nginx page
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
