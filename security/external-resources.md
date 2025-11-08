# External Resources Inventory and SRI Guidance

Project: digipeak.site

## External CSS
- Font Awesome 6.4.0 (cdnjs)
  - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
  - Recommendation: Add integrity (sha384) and crossorigin="anonymous".
- Simple Icons Font v9 (jsdelivr)
  - https://cdn.jsdelivr.net/npm/simple-icons-font@v9/font/simple-icons.min.css
  - Recommendation: Add integrity and crossorigin="anonymous".
- AOS 2.3.1 CSS (unpkg)
  - https://unpkg.com/aos@2.3.1/dist/aos.css
  - Recommendation: Add integrity and crossorigin="anonymous".

## External JS
- tsparticles 2.9.3 (jsdelivr)
  - https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js
  - Recommendation: Add integrity and crossorigin="anonymous".
- AOS 2.3.1 JS (unpkg) — included twice
  - https://unpkg.com/aos@2.3.1/dist/aos.js
  - Recommendation: Add integrity and crossorigin="anonymous". Consider removing duplicate include later (optional cleanup).

## Social links (offsite)
- WhatsApp: https://wa.me/201501715559
- Facebook: http://www.facebook.com/profile.php?id=61568146570674 (prefer https)
- LinkedIn: http://www.linkedin.com/company/design-hive-3/ (prefer https)
- Instagram: http://www.instagram.com/digipeak___?igsh=OGQ5ZDc2ODk2ZA== (prefer https)

## How to compute SRI hashes (sha384)

```bash
# Example for AOS JS
curl -sSL https://unpkg.com/aos@2.3.1/dist/aos.js | \
  openssl dgst -sha384 -binary | openssl base64 -A

# Example for Font Awesome CSS
curl -sSL https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css | \
  openssl dgst -sha384 -binary | openssl base64 -A
```

Then add attributes to the tag:

```html
<link rel="stylesheet" href="..." integrity="sha384-<HASH>" crossorigin="anonymous">
<script src="..." integrity="sha384-<HASH>" crossorigin="anonymous"></script>
```

Notes:
- Update the hash whenever you change the version or file.
- Keep using pinned versions (avoid unversioned latest links) for stability and security.
