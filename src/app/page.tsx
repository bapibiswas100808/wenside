import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Handshake,
  Layers3,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getProductCategoryDetails, products } from "@/data/products";

const categories = getProductCategoryDetails();
const heroProducts = [
  { name: "Pre-rolled cones", image: "/images/products/pre_rolled_cone1.png" },
  { name: "Hemp wraps", image: "/images/products/hemp_wrap1.png" },
  { name: "Tips & filters", image: "/images/products/carbon_tips2.png" },
  { name: "Paper bobbins", image: "/images/products/bobbins2.jpg" },
  { name: "Smoking accessories", image: "/images/products/accessories2.png" },
];

const benefits = [
  { icon: Layers3, title: "A considered range", body: "Explore a broad mix of accessories and find the right fit for your product assortment." },
  { icon: Sparkles, title: "Your brand, your way", body: "Ask us about custom logos, colors, packaging, and branded product sets." },
  { icon: Box, title: "Room to shape it", body: "Discuss product configurations and development needs with our team." },
  { icon: Handshake, title: "Made for B2B", body: "A direct point of contact for importers, wholesalers, and brand owners." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> YOUR NEXT GREAT SUPPLY PARTNER</div>
          <h1>Your partner in<br /><em>smoking accessories</em><br />and B2B supply.</h1>
          <p>Wenside supplies smoking accessories and packaging solutions for modern brands, wholesalers, and distributors worldwide.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/products">Explore our products <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="/contact">Request a quote <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-footnote"><span>MANUFACTURING & GLOBAL SUPPLY</span><span>OEM / ODM CUSTOMIZATION</span></div>
        </div>
        <div className="hero-visual" aria-label="Wenside product catalogue highlights">
          {heroProducts.map((product, index) => (
            <div className="hero-product" key={product.name}>
              <Image src={product.image} alt={product.name} fill priority={index < 2} sizes="(max-width: 760px) 45vw, 18vw" />
              <span>{product.name}</span>
            </div>
          ))}
          <span className="hero-image-caption">FROM THE WENSIDE PRODUCT CATALOGUE</span>
        </div>
      </section>

      <section className="ticker" aria-label="Wenside capabilities">
        <div className="ticker-track">PRE-ROLLED CONES <span>✳</span> HEMP WRAPS <span>✳</span> ROLLING PAPERS &amp; TIPS <span>✳</span> ACCESSORIES <span>✳</span> OEM / ODM <span>✳</span></div>
      </section>

      <section className="section categories-section">
        <div className="section-heading">
          <div><span className="eyebrow">PRODUCTS FROM THE CATALOGUE</span><h2>Explore by <em>category.</em></h2></div>
          <p>Browse Wenside’s catalogue categories and discover the formats available for your product range.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className={`category-tile category-tile-${(index % 4) + 1}`} href={`/products?category=${encodeURIComponent(category.name)}`} key={category.name}>
              {category.image && <Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 760px) 45vw, 23vw" className="category-image" />}
              <span className="category-index">{category.count} {category.count === 1 ? "PRODUCT" : "PRODUCT TYPES"}</span>
              <div><h3>{category.name}</h3><span>{category.description}</span></div>
              <span className="category-icon"><ArrowUpRight size={20} /></span>
            </Link>
          ))}
        </div>
        <div className="align-right"><Link className="text-link" href="/products">See all product categories <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="featured-section">
        <div className="section section-inner">
          <div className="section-heading">
            <div><span className="eyebrow">FROM THE WENSIDE CATALOGUE</span><h2>Featured <em>products.</em></h2></div>
            <Link className="button button-outline" href="/products">View the catalogue <ArrowRight size={16} /></Link>
          </div>
          <div className="product-grid product-grid-home">
            {products.filter((product) => product.featured).slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <p className="sample-note">Product options and availability may vary. Contact Wenside to confirm details for your requirements.</p>
        </div>
      </section>

      <section className="why-section section">
        <div className="why-intro">
          <span className="eyebrow">WHY CHOOSE WENSIDE</span>
          <h2>Product supply,<br /><em>made easier.</em></h2>
          <p>Wenside’s catalogue highlights OEM / ODM customization, quality checks, export experience, and customer support for international buyers.</p>
          <Link className="text-link" href="/about-us">Get to know Wenside <ArrowUpRight size={16} /></Link>
          <div className="why-stamp"><BadgeCheck size={26} /><span>DETAILS<br />MATTER</span></div>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, body }, index) => (
            <article className="benefit-card" key={title}>
              <span className="benefit-number">0{index + 1}</span><Icon size={23} strokeWidth={1.6} />
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-section">
        <div className="oem-image">
          <Image
            src="/images/packaging.svg"
            alt="Illustrative graphic of packaging concepts, not an actual Wenside product"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className="image-note">ILLUSTRATIVE INSPIRATION</span>
          <div className="oem-image-label">LET YOUR<br />BRAND SHOW UP.</div>
        </div>
        <div className="oem-copy">
          <span className="eyebrow">OEM & PRIVATE LABEL</span>
          <h2>Make it<br /><em>yours.</em></h2>
          <p>Wenside’s catalogue lists OEM / ODM services including logo printing, custom sizes and materials, packaging design, flavor development for hemp wraps, and box, tube, and display packaging.</p>
          <ul><li>Logo printing and private-label options</li><li>Custom sizes, materials, and packaging</li><li>Hemp-wrap flavor development inquiries</li></ul>
          <Link className="button button-dark" href="/contact">Discuss your project <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="about-preview section">
        <div className="about-preview-image">
          <Image src="/images/products/quality2.png" alt="Product hand-rolling shown in the Wenside company catalogue" fill sizes="(max-width: 760px) 100vw, 40vw" />
          <span className="image-note">WENSIDE CATALOGUE</span>
        </div>
        <div className="about-preview-copy">
          <span className="eyebrow">ABOUT WENSIDE</span>
          <h2>Built to support<br />brands <em>worldwide.</em></h2>
          <p>Wenside Shanghai International E-Commerce Co., Ltd. describes itself as a manufacturer and global supplier of smoking accessories and packaging solutions for modern brands, wholesalers, and distributors.</p>
          <Link className="text-link" href="/about-us">More about Wenside <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-topline"><span>GOOD IDEAS LOOK BETTER IN MOTION</span><span>W / LET’S TALK</span></div>
        <h2>Have a good<br /><em>one in mind?</em></h2>
        <p>Tell us what you’re looking for. We’ll help you explore the possibilities.</p>
        <Link className="button button-light" href="/contact">Contact our sales team <ArrowUpRight size={18} /></Link>
        <div className="closing-scribble" aria-hidden="true">✳</div>
      </section>
    </main>
  );
}
