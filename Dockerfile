FROM caddy:2-alpine

# Copy the website files to the web root
COPY . /srv/

# Copy the Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80
