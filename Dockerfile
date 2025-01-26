FROM nginx:latest
COPY --from=build-step /app/dist/frontend-coach-mental /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80