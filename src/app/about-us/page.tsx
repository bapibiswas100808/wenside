import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, MessageCircle, Shapes } from "lucide-react";

export const metadata: Metadata = {
  title: "About Wenside",
  description: "Learn about Wenside's B2B smoking accessories range and private-label inquiry support.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-main">
          <span className="eyebrow">A LITTLE ABOUT US / 01</span>
          <h1>Good products<br />are <em>better together.</em></h1>
          <p>Wenside works with international businesses looking for smoking accessories, thoughtful product ranges, and the details that make a brand feel like itself.</p>
        </div>
        <div className="about-hero-note"><span className="note-star">✳</span><span>YOUR IDEAS<br />ARE WELCOME</span></div>
      </section>
      <section className="about-story section">
        <div className="about-image">
          <Image src="/images/packaging.svg" alt="Illustrative graphic representing packaging and product development concepts" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="image-note">ILLUSTRATIVE INSPIRATION · NOT A FACTORY PHOTO</span>
        </div>
        <div className="about-story-copy"><span className="eyebrow">THE WENSIDE APPROACH</span><h2>Built around<br /><em>good conversations.</em></h2><p>We believe a great product range starts by understanding what your business needs. From exploring the catalogue to discussing a custom concept, Wenside is here to make the conversation clear and useful.</p><p>Our current catalogue includes sample listings across filters, papers, grinders, trays, rolling tools, storage, and accessory sets. Product availability and capabilities are confirmed directly with our team.</p><Link className="text-link" href="/products">Explore the catalogue <ArrowUpRight size={16} /></Link></div>
      </section>
      <section className="about-pillars">
        <div className="section-heading"><div><span className="eyebrow">HOW WE CAN WORK TOGETHER</span><h2>Made for <em>what’s next.</em></h2></div><p>Start with the product or the idea. We’ll take it from there, together.</p></div>
        <div className="pillar-grid">
          <article><span className="pillar-icon"><Box size={23} /></span><span className="eyebrow">01 / PRODUCT RANGE</span><h3>Explore the essentials</h3><p>Browse a variety of product categories and ask us about the options that suit your assortment.</p></article>
          <article><span className="pillar-icon"><Shapes size={23} /></span><span className="eyebrow">02 / BRANDING</span><h3>Make it your own</h3><p>Discuss custom logos, product colors, packaging, and accessory set concepts with our team.</p></article>
          <article><span className="pillar-icon"><MessageCircle size={23} /></span><span className="eyebrow">03 / PARTNERSHIP</span><h3>Talk it through</h3><p>Share your requirements and questions so we can confirm current details and next steps.</p></article>
        </div>
      </section>
      <section className="closing-cta about-cta"><div className="closing-topline"><span>LET’S START WITH A GOOD QUESTION</span><span>W / SAY HELLO</span></div><h2>Tell us what<br /><em>you’re building.</em></h2><Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link></section>
    </main>
  );
}
