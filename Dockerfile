FROM node:18 as build
WORKDIR /app
COPY ui/package.json package-lock.json /app/
RUN npm install
COPY ui /app/
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/eosc-sandbox/browser /usr/share/nginx/html
EXPOSE 80
