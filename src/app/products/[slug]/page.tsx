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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
      <div className="breadcrumbs section"><Link href="/"><ArrowLeft size={15} /> Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail section">
        <ProductGallery images={gallery} title={product.name} />
        <div className="detail-copy">
          <span className="eyebrow">{product.category}{product.modelNumber ? ` / ${product.modelNumber}` : ""}</span>
          <h1>{product.name}</h1>
          <p className="detail-lead">{product.shortDescription}</p>
          <p>{product.description}</p>
          {product.specifications && product.specifications.length > 0 && (
            <dl className="detail-specs">
              <dt className="eyebrow">PRODUCT SPECIFICATIONS</dt>
              {product.specifications.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          )}
          {product.materials && <div className="detail-spec-list"><h2>Materials</h2><p>{product.materials.join(" · ")}</p></div>}
          {product.variants && <div className="detail-spec-list"><h2>Options in the catalogue</h2><p>{product.variants.join(" · ")}</p></div>}
          {product.features && product.features.length > 0 && <div className="detail-spec-list"><h2>Features</h2><ul>{product.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></div>}
          {product.customization && <div className="detail-spec-list"><h2>Customization</h2><p>{product.customization}</p></div>}
          <p className="detail-disclaimer">Product details are based on the supplied Wenside catalogue. Confirm current options and specifications with the sales team.</p>
          <div className="detail-actions">
            <Link className="button button-dark" href={`/contact?product=${encodeURIComponent(product.name)}${product.modelNumber ? `&model=${encodeURIComponent(product.modelNumber)}` : ""}`}>Request a quote <ArrowUpRight size={17} /></Link>
            <Link className="text-link" href={`/contact?product=${encodeURIComponent(product.name)}${product.modelNumber ? `&model=${encodeURIComponent(product.modelNumber)}` : ""}`}>Ask about this product <ArrowUpRight size={15} /></Link>
            <Link className="text-link" href={`/contact?product=${encodeURIComponent(product.name)}&inquiry=OEM%20%2F%20private%20label`}>Discuss custom branding <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="related-section section">
          <div className="section-heading"><div><span className="eyebrow">KEEP EXPLORING</span><h2>You may also <em>like.</em></h2></div><Link className="text-link" href="/products">View all products <ArrowUpRight size={16} /></Link></div>
          <div className="product-grid">{related.map((item, index) => item && <ProductCard key={item.id} product={item} index={index} />)}</div>
        </section>
      )}
    </main>
  );
}
