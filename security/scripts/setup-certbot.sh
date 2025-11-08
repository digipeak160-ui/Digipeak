#!/usr/bin/env bash
# Setup Let's Encrypt (Certbot) for digipeak.site on Nginx
# Run as root on Ubuntu/Debian
set -euo pipefail

echo "Installing certbot and nginx plugin..."
apt-get update -y
apt-get install -y certbot python3-certbot-nginx

# Obtain certificate (ensure DNS A/AAAA records point to this server)
certbot --nginx -d digipeak.site -d www.digipeak.site --redirect --agree-tos -m admin@digipeak.site --non-interactive

# Auto-renew
systemctl enable certbot.timer
systemctl start certbot.timer

echo "Done. Test: https://www.ssllabs.com/ssltest/analyze.html?d=digipeak.site"
