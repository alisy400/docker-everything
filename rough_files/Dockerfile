FROM nginx:1.27.0

RUN apt-get update

RUN apt-get install vim -y




# /usr/share/nginx/html/index.html
COPY index.html /usr/share/html/index.html
RUN chown nginx:nginx /usr/share/nginx/html/index.html