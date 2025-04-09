#Build da aplicação 
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Servir a aplicação com um servidor 
FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist/agenda-frontend/browser/ .
EXPOSE 8080
CMD ["http-server", ".", "-p", "8080"]