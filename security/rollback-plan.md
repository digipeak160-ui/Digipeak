# Rollback Plan for digipeak.site Security Changes

If any issue arises after applying the security configurations, follow these steps to revert safely.

## Cloudflare (if used)
1. Disable/Remove recently added Transform Rules or Workers that set security headers.
2. Turn off HSTS (Strict-Transport-Security) if it causes dev/test issues (note: HSTS is cached by browsers; use a different subdomain for testing if needed).
3. Revert Firewall/Rate Limiting rules to prior state.

## Nginx
1. Restore previous config backup:
   ```bash
   cp /etc/nginx/backup-<TIMESTAMP>-digipeak.site.conf /etc/nginx/sites-available/digipeak.site
   nginx -t && systemctl reload nginx
   ```
2. If HTTPS redirect breaks access, temporarily disable the 80->443 redirect server block.
3. Remove or comment CSP header if it blocks scripts.

## Apache (.htaccess)
1. Rename or comment the directives added in `.htaccess` (keep a backup copy):
   - Remove/disable RewriteRules for HTTPS redirect
   - Remove security headers
   - Remove deny rules temporarily if they block valid content
2. Clear caches and retest.

## Certificates
- If Certbot changes caused issues, roll back the server config to pre-certbot versions kept by certbot in `/etc/letsencrypt/` backup directories.

## Verification after rollback
- Confirm site loads identically as before (visuals and scripts)
- Re-run functional checks from `security/verification-checklist.md`

## Preventive measure
- Always stage changes on a test environment/subdomain before production rollout.
