# Wenside

Responsive B2B catalogue site for Wenside, built with Next.js App Router, TypeScript, and Tailwind CSS. Product descriptions and specifications are based on the supplied 18-page Wenside catalogue; product photography and illustrations are local assets.

Styling is implemented with Tailwind utilities in the JSX. `src/app/tailwind.css` only loads Tailwind; there is no site-specific global stylesheet.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and deploy

```bash
npm run lint
npm run build
```

The app is Vercel-compatible. Set `NEXT_PUBLIC_SITE_URL` to the canonical deployment URL when deploying; the default is `https://wen-side.com`, as listed in the catalogue.

## Content and assets

- **Product data:** edit `src/data/products.ts`. It currently contains 15 catalogue product types in 10 catalogue-derived categories. The PDF provides options and sizes but does not identify formal model/SKU codes.
- **Product images:** product records reference local assets under `public/images/products/`. Paper tips and perforated tips are listed in the catalogue but do not have a clearly matching dedicated product image.
- **Brand logo:** the header and footer use `public/images/logo.png`.
- **Contact and company details:** edit `src/data/site.ts`. Email, phone, websites, and the social handle are transcribed from the catalogue. It supplies `@wenside1` without naming a social platform, so the handle is shown without an assumed profile link.
- **Inquiry form:** `src/components/contact/InquiryForm.tsx` sends submissions from the browser through EmailJS. Set the template's recipient to `info@wen-side.com`, From Name to `{{from_name}}`, Reply-To to `{{reply_to}}`, and Subject to `{{subject}}`. Use `{{name}}`, `{{email}}`, `{{company}}`, `{{country}}`, `{{inquiry}}`, `{{product}}`, `{{model}}`, and `{{message}}` in the email body. Add the production site domain to EmailJS allowed origins and verify the connected sender service. The service ID, template ID, and public key are configured in the form component; the public key is intended for browser use. The form applies a client-side 15-second send throttle.

Search, category filtering, sorting, product pages, related products, SEO metadata, robots, and the sitemap all use the static catalogue data.
