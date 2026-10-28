import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Handshake,
  Layers3,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const categories = [
  { title: "Activated Carbon Filter Tips", note: "Filter formats for your range", category: "Filters & tips", image: "/images/filters.svg" },
  { title: "Rolling Papers & Paper Tips", note: "Everyday rolling essentials", category: "Papers & tips", image: "/images/papers.svg" },
  { title: "Grinders", note: "A range of sizes & styles", category: "Grinders", image: "/images/metal-grinder.svg" },
  { title: "Smoking Trays", note: "A thoughtful tabletop essential", category: "Trays", image: "/images/tray.svg" },
  { title: "Rolling Machines", note: "Tools for a complete assortment", category: "Rolling tools", image: "/images/rolling-machine.svg" },
  { title: "Pipes & Holders", note: "Complementary accessories", category: "Pipes & holders", image: "/images/pipes.svg" },
  { title: "Storage Products", note: "Keep the details together", category: "Storage", image: "/images/storage.svg" },
  { title: "Accessory Sets & Gift Boxes", note: "Curated, coordinated collections", category: "Sets & packaging", image: "/images/gift-set.svg" },
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
          <h1>Good things<br />start with <em>the right</em><br />little details.</h1>
          <p>Smoking accessories for brands with a point of view. Explore our product range and make your next idea a reality with Wenside.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/products">Explore products <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="/contact">Talk to our team <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-footnote"><span>01 — B2B PRODUCT SUPPLY</span><span>02 — OEM & PRIVATE LABEL</span></div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/hero.svg"
            alt="Illustrative graphic of sample accessory packaging concepts, not a verified Wenside product"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <div className="hero-sticker"><span>MADE FOR</span><strong>YOUR<br />NEXT<br />IDEA</strong><ArrowDownRight size={24} /></div>
          <div className="hero-image-caption"><span>CURATED GOODS, CONSIDERED DETAILS</span><span>VISUAL FOR DIRECTION ONLY</span></div>
          <span className="hero-side-note">GOOD DESIGN IS IN THE DETAILS</span>
        </div>
        <div className="hero-index">W / 01</div>
      </section>

      <section className="ticker" aria-label="Wenside capabilities">
        <div className="ticker-track">PRODUCTS WITH PURPOSE <span>✳</span> YOUR BRAND, YOUR WAY <span>✳</span> MADE FOR THE NEXT IDEA <span>✳</span> PRODUCTS WITH PURPOSE <span>✳</span></div>
      </section>

      <section className="section categories-section">
        <div className="section-heading">
          <div><span className="eyebrow">A RANGE WITH ROOM TO GROW</span><h2>Find your <em>thing.</em></h2></div>
          <p>From everyday essentials to finishing touches, explore a product mix ready to make your own.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className={`category-tile category-tile-${(index % 4) + 1}`} href={`/products?category=${encodeURIComponent(category.category)}`} key={category.title}>
              <Image src={category.image} alt="" fill sizes="(max-width: 760px) 45vw, 23vw" className="category-image" />
              <span className="category-index">0{index + 1} / 08</span>
              <div><h3>{category.title}</h3><span>{category.note}</span></div>
              <span className="category-icon"><ArrowUpRight size={20} /></span>
            </Link>
          ))}
        </div>
        <div className="align-right"><Link className="text-link" href="/products">See all product categories <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="featured-section">
        <div className="section section-inner">
          <div className="section-heading">
            <div><span className="eyebrow">A FEW GOOD STARTING POINTS</span><h2>Meet the <em>line-up.</em></h2></div>
            <Link className="button button-outline" href="/products">View the catalogue <ArrowRight size={16} /></Link>
          </div>
          <div className="product-grid product-grid-home">
            {products.filter((product) => product.featured).slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <p className="sample-note">Sample product names and images shown for layout purposes; details should be confirmed with Wenside.</p>
        </div>
      </section>

      <section className="why-section section">
        <div className="why-intro">
          <span className="eyebrow">GOOD PARTNERS MAKE GOOD PRODUCTS</span>
          <h2>More than just<br />a <em>product list.</em></h2>
          <p>We help you bring thoughtful accessories and considered branding together, with a team focused on your business requirements.</p>
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
          <p>Have an idea for a signature product or a more cohesive range? Ask us about custom logos, colors, packaging, and branded accessory sets. Options are subject to product availability and confirmation.</p>
          <ul><li>Product and color conversations</li><li>Custom logo and packaging inquiries</li><li>Accessory set concepts</li></ul>
          <Link className="button button-dark" href="/contact">Discuss your project <ArrowUpRight size={17} /></Link>
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
