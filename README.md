# WIFI MTAANI — VEKNET TECHNOLOGIES

A responsive Next.js App Router marketing website for VEKNET TECHNOLOGIES, using WIFI MTAANI as the customer-facing brand.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in your terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000.

To create a production build, run `npm run build` and then `npm run start`.

## Important launch edits

Open `app/page.tsx` and replace `2547XXXXXXXX` in `WHATSAPP_NUMBER` with the official VEKNET WhatsApp number (country code included, digits only). All enquiry buttons use this number.

Before publishing, confirm and add:
- Exact hotspot package names, prices, validity periods and any usage limits.
- Exact PPPoE speeds and monthly prices (and whether installation/router charges apply).
- Confirmed coverage locations and any installation conditions.
- Official phone number, email address and social media links.

The site intentionally does not publish unverified prices, speeds, installation promises or coverage claims. The reference website (Agape Tech) informed the information architecture—service categories, package enquiry, coverage check, FAQs and contact calls-to-action—but its business details and pricing have not been copied.

## Main files

- `app/page.tsx` — homepage content, WhatsApp CTA and FAQs.
- `app/globals.css` — responsive styling and visual design.
- `app/layout.tsx` — page metadata and root layout.
