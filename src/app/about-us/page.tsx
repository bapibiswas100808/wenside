import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, ClipboardCheck, Factory, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Wenside",
  description: "About Wenside Shanghai International E-Commerce Co., Ltd. and its smoking accessories catalogue.",
};

const qualitySteps = [
  "Raw material inspection",
  "In-process quality checks",
  "Final product testing",
  "Export-standard packaging",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-main">
          <span className="eyebrow">ABOUT WENSIDE / OUR COMPANY</span>
          <h1>A global supply<br /><em>partner for your brand.</em></h1>
          <p>{siteConfig.legalName} describes itself as a manufacturer and global supplier of smoking accessories and packaging solutions for modern brands, wholesalers, and distributors worldwide.</p>
        </div>
        <div className="about-hero-note"><span className="note-star">✳</span><span>PRODUCTS<br />&amp; PACKAGING</span></div>
      </section>
      <section className="about-story section">
        <div className="about-image">
          <Image src="/images/products/quality1.png" alt="Production work shown in Wenside's supplied company catalogue" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="image-note">IMAGE FROM WENSIDE CATALOGUE</span>
        </div>
        <div className="about-story-copy"><span className="eyebrow">THE WENSIDE APPROACH</span><h2>Product range.<br /><em>Partnership.</em></h2>
          <p>Wenside’s catalogue covers pre-rolled cones, hemp wraps, rolling paper booklets, paper bobbins, filter tips, grinders, smoking trays, rolling machines, cone tubes, and silicone accessories.</p>
          <p>The company presents its offer around customizable products, OEM / ODM services, quality checks, export-standard packaging, and support for international buyers. Confirm product details and current capabilities with Wenside.</p>
          <Link className="text-link" href="/products">Explore the catalogue <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <section className="about-pillars">
        <div className="section-heading"><div><span className="eyebrow">HOW WENSIDE SUPPORTS YOUR RANGE</span><h2>Made for <em>what’s next.</em></h2></div><p>Options below are described in the supplied Wenside catalogue; availability depends on product and confirmation.</p></div>
        <div className="pillar-grid">
          <article><span className="pillar-icon"><Box size={23} /></span><span className="eyebrow">01 / PRODUCT RANGE</span><h3>Accessories &amp; packaging</h3><p>Explore a range spanning papers, tips, wraps, grinders, trays, tubes, and other listed smoking accessories.</p></article>
          <article><span className="pillar-icon"><Factory size={23} /></span><span className="eyebrow">02 / OEM &amp; ODM</span><h3>Customization services</h3><p>The catalogue lists logo printing, custom sizes and materials, packaging design, hemp-wrap flavor development, and box, tube, and display packaging.</p></article>
          <article><span className="pillar-icon"><MessageCircle size={23} /></span><span className="eyebrow">03 / BUSINESS SUPPORT</span><h3>International inquiries</h3><p>Wenside lists global supply, export experience, fast response, and customer support for business buyers.</p></article>
        </div>
      </section>
      <section className="quality-section section">
        <div className="quality-copy">
          <span className="eyebrow">QUALITY CONTROL / AS LISTED IN THE CATALOGUE</span>
          <h2>Considered at<br /><em>every step.</em></h2>
          <p>The company catalogue describes the following quality-control process:</p>
          <ul>{qualitySteps.map((step) => <li key={step}><ClipboardCheck size={17} />{step}</li>)}</ul>
        </div>
        <div className="quality-image"><Image src="/images/products/quality3.png" alt="Hand-finishing work shown in Wenside's supplied company catalogue" fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="image-note">IMAGE FROM WENSIDE CATALOGUE</span></div>
      </section>
      <section className="company-facts">
        <div><strong>2011</strong><span>Export experience stated since</span></div>
        <div><strong>30+</strong><span>Countries reported in catalogue</span></div>
        <div><strong>200M+</strong><span>Booklets exported annually, as reported</span></div>
        <p>Figures above are claims in the supplied Wenside catalogue and have not been independently verified.</p>
      </section>
      <section className="closing-cta about-cta"><div className="closing-topline"><span>LET’S START WITH A GOOD QUESTION</span><span>W / SAY HELLO</span></div><h2>Tell us what<br /><em>you’re building.</em></h2><Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link></section>
    </main>
  );
}
