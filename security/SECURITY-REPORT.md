# Digipeak.site Security Hardening Report

Date: 2025-11-08
Scope: Static frontend (HTML/CSS/JS) hosted at https://digipeak.site
Constraint: No UI/functional changes to HTML/CSS/JS. Only server/CDN configs and supportive files.

---

## 1) Automated project scan (local codebase)

- External resources detected in index.html
  - CSS
    - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
    - https://cdn.jsdelivr.net/npm/simple-icons-font@v9/font/simple-icons.min.css
    - https://unpkg.com/aos@2.3.1/dist/aos.css
  - JS
    - https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js
    - https://unpkg.com/aos@2.3.1/dist/aos.js (included twice)
  - Social links (open offsite)
    - WhatsApp: https://wa.me/201501715559
    - Facebook: http://www.facebook.com/profile.php?id=61568146570674
    - LinkedIn: http://www.linkedin.com/company/design-hive-3/
    - Instagram: http://www.instagram.com/digipeak___?igsh=OGQ5ZDc2ODk2ZA==

- Sensitive files/directories present in repo
  - .git/ directory exists locally. If deployed to web root, must be blocked from public access.
  - No .env, .sql, backup archives found in root.

- Mixed content risk
  - Some social links use http:// (Facebook/LinkedIn/Instagram). With HSTS these should upgrade, but recommend enforcing HTTPS redirects at origin/CDN.

- XSS/CSP observations
  - Inline event handlers are not used in HTML, good.
  - Third-party scripts/styles are allowed from cdnjs/jsdelivr/unpkg. A CSP must explicitly allow these hosts.
  - Duplicated AOS script include; functionally fine but CSP must allow once or both. We will allow it; you can remove duplicates later if desired (not required).

- Exposed secrets
  - None found in the codebase.

### Risk ratings
- Critical
  - Potential exposure of /.git if deployed to public root
- High
  - Missing strong HTTP security headers (HSTS, CSP, etc.)
- Medium
  - Third-party CDNs without SRI
  - http:// external social links that rely on HSTS upgrade
- Low
  - Duplicate AOS include

---

## 2) HTTPS & TLS

- Ensure a valid TLS certificate (Let's Encrypt or commercial). If using Cloudflare, enable Full (strict) SSL.
- Force redirect HTTP -> HTTPS (301) at edge and origin.
- Recommended TLS config (origin):
  - Disable TLS 1.0/1.1
  - Enable TLS 1.2 and TLS 1.3
  - Prefer modern ciphers, e.g.:
    - ECDHE-ECDSA-AES128-GCM-SHA256
    - ECDHE-RSA-AES128-GCM-SHA256
    - ECDHE-ECDSA-AES256-GCM-SHA384
    - ECDHE-RSA-AES256-GCM-SHA384
    - ECDHE-ECDSA-CHACHA20-POLY1305
    - ECDHE-RSA-CHACHA20-POLY1305

---

## 3) Security HTTP headers (to apply at server/CDN)

- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- Content-Security-Policy (Report-Only first):
  - default-src 'self';
  - script-src 'self' https://cdn.jsdelivr.net https://unpkg.com 'unsafe-inline';
  - style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com;
  - img-src 'self' data: https:;
  - font-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net data:;
  - connect-src 'self';
  - frame-ancestors 'none';
  - base-uri 'self';
  - form-action 'self';
  Notes:
    - 'unsafe-inline' in script/style is included initially to avoid breaking animations/libs. For production hardening, replace with nonce-based policy on inline scripts/styles.
- X-Frame-Options: DENY (use SAMEORIGIN only if you intentionally embed this site in iframes)
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), bluetooth=()
- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Resource-Policy: same-origin
- Cross-Origin-Embedder-Policy: require-corp (optional; only if no cross-origin resources require COEP exemptions)
- Expect-CT: max-age=86400, enforce (legacy; optional)

---

## 4) Subresource Integrity (SRI)

Add integrity+crossorigin to external CSS/JS once hashes are computed. Example commands to compute SRI:

```bash
# Download and compute SRI (sha384 preferred)
curl -sSL https://unpkg.com/aos@2.3.1/dist/aos.js | openssl dgst -sha384 -binary | openssl base64 -A
# Output -> paste into: integrity="sha384-..." and add crossorigin="anonymous"
```

Where to apply:
- font-awesome CSS (cdnjs)
- simple-icons CSS (jsdelivr)
- tsparticles JS (jsdelivr)
- AOS CSS/JS (unpkg)

Note: Because we cannot modify HTML here per constraint, apply these SRI attributes in a future safe UI pass or via server-side HTML injection if your platform supports it.

---

## 5) Server/CDN configuration snippets

See files in this folder:
- htaccess.txt (Apache)
- nginx.conf (Nginx snippet)
- cloudflare-settings.md (edge header rules & WAF)
- csp-report-only.txt (CSP header to start in Report-Only mode)
- scripts/setup-certbot.sh (SSL setup)
- scripts/apply-nginx-headers.sh (enable headers/caching/rate limits)

---

## 6) Directory listing & sensitive files

- Disable directory listing and deny access to:
  - /.git, /.svn, /.hg
  - /.*.env, *.bak, *.zip, *.sql, node_modules, vendor
- See htaccess.txt and nginx.conf examples.

---

## 7) Cookies & Session

- If any cookies are ever set (e.g., future auth/AB tests):
  - Set-Cookie: name=value; Path=/; Secure; HttpOnly; SameSite=Lax
  - For cross-site embedded flows use SameSite=None; Secure

---

## 8) Rate limiting & brute-force

- Apply edge rate limits (Cloudflare) for paths such as /contact (submission endpoint), /api/*.
- Nginx example uses limit_req on all POSTs. Adjust as needed.

---

## 9) WAF / CDN recommendations (Cloudflare)

- SSL/TLS: Full (strict)
- HSTS: enabled with preload
- Bot Fight Mode: on (standard)
- Security Level: Medium/High
- DDoS/Rate Limit rules: enable for POST endpoints
- Firewall Rules (examples in cloudflare-settings.md)

---

## 10) Forms & input (frontend-only)

- Keep UI unchanged. Use a backend or third-party handler for secure processing:
  - Formspree/Formspark/Netlify Forms with CAPTCHA (hCaptcha/Cloudflare Turnstile) and server-side validation.
  - Add honeypot field and rate limit submissions at edge (WAF).

---

## 11) Third-party resource review (recommendations)

- cdnjs (font-awesome): add SRI + crossorigin
- jsdelivr (tsparticles, simple-icons): add SRI + crossorigin
- unpkg (AOS): add SRI + crossorigin; consider pinning exact version
- Social links: Prefer https:// for FB/LinkedIn/Instagram (or rely on HSTS/redirects)

---

## 12) Logging & Monitoring

- Enable access/error logging on origin.
- If using Cloudflare: enable Request Logs (Enterprise) or use analytics + security events. Configure alerts for spikes or WAF blocks.
- Store logs with retention (e.g., 30–90 days) and ship to SIEM if available.

---

## 13) Backup & Recovery

- Daily incremental, weekly full backups of site assets and server configs.
- Store backups offsite (cloud storage with lifecycle policies), test restore quarterly.

---

## 14) Verification steps (after applying headers/config)

1) curl -I https://digipeak.site/  -> verify headers present (HSTS, CSP-Report-Only, etc.)
2) SSL Labs test: https://www.ssllabs.com/ssltest/ -> aim for A/A+
3) SecurityHeaders.com -> aim A grade
4) Lighthouse Best Practices & SEO unaffected
5) Navigate all sections; confirm animations and third-party assets load
6) If any CSP violations appear in console/network, review CSP-Report-Only logs and adjust sources/nonces

---

## 15) Rollback plan

- Keep previous server/CDN config snapshots.
- To rollback: disable edge rules, restore previous nginx/apache config files, reload.
- Revert CSP to Report-Only (or remove header) if it blocks required scripts.

---

## Summary of priorities
- Critical: Block /.git and sensitive paths; enforce HTTPS; add HSTS
- High: Add CSP (Report-Only), XFO DENY, XCTO nosniff, Referrer-Policy, Permissions-Policy
- Medium: Add SRI for CDNs; replace all http social links with https at a future UI-safe pass
- Low: Remove duplicate AOS include later (optional)
