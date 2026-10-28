# Wenside

A responsive, frontend-only B2B website starter for Wenside, built with Next.js App Router, TypeScript, and Tailwind CSS.

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

The app is compatible with Vercel. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL before deployment. Until configured, metadata uses a placeholder URL.

## Replace sample content before launch

- **Product data:** edit `src/data/products.ts`. The current products, descriptions, and specifications are sample entries only; replace them with verified Wenside product information.
- **Product imagery:** replace the illustrative SVG files in `public/images` with approved product photography and update paths in `src/data/products.ts`. Current artwork is conceptual and does not depict verified Wenside products or a factory.
- **Contact information:** edit `src/data/site.ts` and the contact page. Add only confirmed company email, WhatsApp, and address details.
- **Inquiry form:** `src/components/contact/InquiryForm.tsx` is deliberately frontend-only. It validates required browser fields but does not send or store submissions. Connect it to an approved form service before using it for live inquiries.
- **Branding and copy:** update shared layout and page content under `src/app` and `src/components`.

The catalogue, category filters, product detail routes, metadata, sitemap, and related-product cards are derived from the static product dataset.
