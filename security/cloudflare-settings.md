# Cloudflare recommended settings for digipeak.site

## SSL/TLS
- Mode: Full (strict)
- Minimum TLS version: 1.2 (or 1.3 where supported)
- HSTS: Enabled with preload, include subdomains, max-age=31536000

## Edge security headers (Transform Rules or Workers)
Set response headers (equivalent to server configs):
- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://unpkg.com 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com; img-src 'self' data: https:; font-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), bluetooth=()
- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Resource-Policy: same-origin

## WAF & Bot management
- Security Level: Medium/High
- DDoS protection: On
- Bot Fight Mode: Enabled (Standard)
- Rate limiting rules: 10 req/min for POST requests to /contact or API endpoints (adjust as needed)

## Firewall Rules (examples)
- Block known bad countries or ASN as needed
- Challenge requests with high threat score
- JS Challenge for paths with abuse (/contact when high volume)

## Caching & performance
- Cache Level: Standard
- Browser Cache TTL: 7 days for CSS/JS, 30 days for images (Edge Cache Rules or Page Rules)
- Auto Minify: CSS/JS/HTML (test first)
- Brotli: On

## CSP rollout plan
1) Start with Report-Only header above
2) Monitor violations in Cloudflare Security Events or a CSP endpoint
3) Replace 'unsafe-inline' with nonces/hashes for any inline use (server needs to set nonce per response)
4) Move to enforcing CSP once confirmed no breakage
