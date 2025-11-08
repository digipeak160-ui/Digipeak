#!/usr/bin/env bash
# Apply Nginx security headers and reload
set -euo pipefail

NGINX_SITE="/etc/nginx/sites-available/digipeak.site"
BACKUP="/etc/nginx/backup-$(date +%F-%H%M%S)-digipeak.site.conf"

if [ ! -f "$NGINX_SITE" ]; then
  echo "Create $NGINX_SITE from the provided security/nginx.conf snippet, then rerun." >&2
  exit 1
fi

cp "$NGINX_SITE" "$BACKUP"
nginx -t
systemctl reload nginx

echo "Backed up to: $BACKUP"
echo "Verify headers with: curl -I https://digipeak.site/"
