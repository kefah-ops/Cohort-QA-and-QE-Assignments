
FROM node:18 AS build-stage

WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install


COPY . .


RUN npm run build --prod

p
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist/job-application /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
