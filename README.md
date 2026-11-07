# BEST CONTENT

Premium, discreet 18+ storefront. Public pages never display product prices; customer enquiries are handled through Telegram.

## Included
- Responsive Portuguese storefront with dark, gold and wine visual identity.
- Product catalogue, detail pages, categories, new/popular collections, search and device-local favourites.
- Adult age-confirmation gate.
- Admin login protected by an HTTP-only, signed, time-limited cookie; product and store settings APIs require the verified session.
- Supabase-backed products/settings; sample catalogue is shown until Supabase is configured.
- Per-product Telegram share link with the requested English message prefilled. The visitor must choose a Telegram chat and confirm; a direct `t.me/username` link alone cannot prefill a message to that user.
- Product image/video URLs can be managed in admin; video playback supports browser-compatible media URLs such as MP4.

## Local setup
1. Install Node.js 20 or newer and create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (server only; never prefix it with `NEXT_PUBLIC_`)
   - `ADMIN_USERNAME`, a long unique `ADMIN_PASSWORD`, and a random `SESSION_SECRET` of 32+ characters.
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.example` after deployment.
4. Install and start:
   ```bash
   npm install
   npm run dev
   ```
5. Open `http://localhost:3000`; admin is at `/admin`.

Without Supabase the public site runs with sample products, but admin management requires Supabase. Replace the sample entries by managing products in `/admin` after configuration. Product slugs must be lowercase URL-safe values. Images and videos are entered as public HTTPS URLs; use Supabase Storage or another media host, and store only public asset URLs in product media fields.

## Telegram behavior
The product enquiry opens `https://t.me/share/url` with the exact English message and selected product name. Telegram asks the visitor to select a conversation and send. The configured direct contact link (`https://t.me/biggselller` by default) is also visible on the product page and contact page. This is intentional: Telegram does not support a prefilled message to an arbitrary personal username via a normal `t.me/username` URL. For an automated bot conversation, configure a Telegram bot separately.

## Deploy (Vercel)
Import the repository into Vercel, use the Next.js preset, and set all required environment variables in Project Settings → Environment Variables. Deploy over HTTPS. Keep `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD`, and `SESSION_SECRET` server-side and out of Git. Configure backups and restrict Supabase project access. The age gate is an age declaration, not identity verification. Review applicable local laws and hosting/payment-provider policies before publishing adult-oriented content.

## Security notes
- Admin credentials are checked only on the server. Sessions are HMAC-signed, HTTP-only, SameSite=Strict, Secure in production, and expire after 12 hours.
- Supabase service key is only used from server code; database tables have RLS enabled and anon/authenticated access revoked.
- Do not upload material featuring minors or non-consenting people. Use lawful adult content and obtain required rights and consent.
- Favorites are stored only in local browser storage; this project does not collect visitor contact details.
