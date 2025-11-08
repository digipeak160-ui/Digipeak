# Post-Implementation Verification Checklist

Use these steps after applying server/CDN security settings to ensure nothing broke and security is effective.

## Functional checks
- Navigate https://digipeak.site/ across all sections (Hero, Services, About, Stats, Projects, Tech Stack, Contact, Footer)
- Confirm animations (AOS, particles) work as before
- Open a project modal; confirm images and scripts load
- Verify WhatsApp, Facebook, LinkedIn, Instagram links open

## Security headers
- Run: `curl -I https://digipeak.site/`
  - Expect headers:
    - Strict-Transport-Security
    - Content-Security-Policy-Report-Only
    - X-Frame-Options
    - X-Content-Type-Options
    - Referrer-Policy
    - Permissions-Policy
    - Cross-Origin-Opener-Policy
    - Cross-Origin-Resource-Policy

## TLS/HTTPS
- SSL Labs test: https://www.ssllabs.com/ssltest/analyze.html?d=digipeak.site
  - Grade A/A+
  - TLS 1.2/1.3 enabled; 1.0/1.1 disabled
- HTTP -> HTTPS redirect (301) working

## CSP monitoring
- Open DevTools Console on homepage
- Look for CSP reports/violations (Report-Only); if any, add allowed sources or migrate to nonces/hashes

## Sensitive files and indexes
- Try accessing `https://digipeak.site/.git/` -> should be blocked
- Try `https://digipeak.site/.env`, `backup.zip`, `database.sql` -> should be blocked (403/404)
- Directory listing should be off on all folders

## Performance
- SecurityHeaders.com: target grade A
- Check gzip/brotli compression active (Content-Encoding)
- Lighthouse Best Practices/SEO unaffected
