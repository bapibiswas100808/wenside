import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import { getProduct, products } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = (product.relatedProductSlugs ?? [])
    .map((relatedSlug) => getProduct(relatedSlug))
    .filter((item) => item && item.slug !== product.slug)
    .slice(0, 3);
  const gallery = [product.image, ...(product.gallery ?? [])]
    .filter((image): image is string => Boolean(image))
    .map((src) => ({ src, alt: product.imageAlt ?? `${product.name} product image` }));

  return (
    <main className="product-detail-page">
      <div
        className="breadcrumbs section pt-6 pb-6 flex items-center gap-2.5 text-muted text-xs w-full
          max-w-7xl mx-auto"
      >
        <Link href="/">
          <ArrowLeft size={15} /> Home
        </Link>
        <span>/</span>
        <Link href="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>
      <section
        className="product-detail section pt-3 pb-24 grid grid-cols-1 gap-6 max-md:pt-4 max-md:pb-16
          lg:grid-cols-2"
      >
        <ProductGallery images={gallery} title={product.name} />
        <div className="detail-copy pt-7 max-md:pt-8">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            {product.category}
            {product.modelNumber ? ` / ${product.modelNumber}` : ""}
          </span>
          <h1>{product.name}</h1>
          <p className="detail-lead">{product.shortDescription}</p>
          <p>{product.description}</p>
          {product.specifications && product.specifications.length > 0 && (
            <dl className="detail-specs border-t border-b">
              <dt
                className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                  tracking-widest leading-normal"
              >
                PRODUCT SPECIFICATIONS
              </dt>
              {product.specifications.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {product.materials && (
            <div className="detail-spec-list">
              <h2>Materials</h2>
              <p>{product.materials.join(" · ")}</p>
            </div>
          )}
          {product.variants && (
            <div className="detail-spec-list">
              <h2>Options in the catalogue</h2>
              <p>{product.variants.join(" · ")}</p>
            </div>
          )}
          {product.features && product.features.length > 0 && (
            <div className="detail-spec-list">
              <h2>Features</h2>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.customization && (
            <div className="detail-spec-list">
              <h2>Customization</h2>
              <p>{product.customization}</p>
            </div>
          )}
          <p className="detail-disclaimer">
            Product details are based on the supplied Wenside catalogue. Confirm current options and
            specifications with the sales team.
          </p>
          <div className="detail-actions mt-6 flex flex-col items-start gap-4">
            <Link
              className="button button-dark min-h-12 inline-flex items-center justify-center gap-4
                border text-sm font-semibold transition-transform bg-ink text-white"
              href={`/contact?product=${encodeURIComponent(product.name)}${product.modelNumber ? `&model=${encodeURIComponent(product.modelNumber)}` : ""}`}
            >
              Request a quote <ArrowUpRight size={17} />
            </Link>
            <Link
              className="text-link inline-flex items-center gap-2 text-sm font-semibold"
              href={`/contact?product=${encodeURIComponent(product.name)}${product.modelNumber ? `&model=${encodeURIComponent(product.modelNumber)}` : ""}`}
            >
              Ask about this product <ArrowUpRight size={15} />
            </Link>
            <Link
              className="text-link inline-flex items-center gap-2 text-sm font-semibold"
              href={`/contact?product=${encodeURIComponent(product.name)}&inquiry=OEM%20%2F%20private%20label`}
            >
              Discuss custom branding <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section
          className="related-section section pt-16 pb-24 border-t max-md:pb-16 w-full max-w-7xl
            mx-auto"
        >
          <div
            className="section-heading mb-10 flex items-end justify-between gap-7 max-md:mb-7
              max-md:flex-col"
          >
            <div>
              <span
                className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                  tracking-widest leading-normal"
              >
                KEEP EXPLORING
              </span>
              <h2>
                You may also <em>like.</em>
              </h2>
            </div>
            <Link
              className="text-link inline-flex items-center gap-2 text-sm font-semibold"
              href="/products"
            >
              View all products <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="product-grid grid grid-cols-4 gap-4 max-xl:gap-6 max-md:gap-6
            max-sm:gap-6">
            {related.map(
              (item, index) => item && <ProductCard key={item.id} product={item} index={index} />,
            )}
          </div>
        </section>
      )}
    </main>
  );
}
