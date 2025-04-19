FROM node:23.7.0 as builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
RUN npm run generate

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/ /usr/share/nginx/html

# For router nuxt
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]