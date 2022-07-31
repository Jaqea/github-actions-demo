FROM nginx

COPY ./dist/index.html /usr/share/nginx/html/index.html

EXPOSE 80
