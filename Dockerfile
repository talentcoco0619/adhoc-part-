FROM --platform=linux/amd64  node:18 AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install npm-run-all
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM --platform=linux/amd64  nginx:1.21.0-alpine as production
RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo
RUN pip3 install pip --upgrade
RUN pip3 install certbot-nginx
RUN mkdir /etc/letsencrypt

ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN (crontab -l 2>/dev/null; echo "0 5 * * * /usr/bin/certbot renew --quiet") | crontab -

# to verify existing set vars
RUN printenv

# Expose port
EXPOSE 80
# Start nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
