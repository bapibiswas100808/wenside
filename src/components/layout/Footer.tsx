import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";
import CurrentYear from "@/components/layout/CurrentYear";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">
            <Image className="wordmark-image" height={56} width={56} src="/images/logo.png" alt="" />
            <span>WENSIDE<small>GLOBAL SUPPLY</small></span>
          </Link>
          <p>{siteConfig.legalName}<br />Smoking accessories and packaging solutions for international brands.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/products">All products</Link>
          <Link href="/about-us">About Wenside</Link>
          <Link href="/contact">Get in touch</Link>
        </div>
        <div className="footer-column">
          <h3>Categories</h3>
          {productCategories.map((category) => (
            <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <span className="eyebrow">LET’S MAKE SOMETHING GOOD</span>
          <Link className="footer-cta" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <a href={`tel:${siteConfig.phoneLink}`}>{siteConfig.phone}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© <CurrentYear /> Wenside. All rights reserved.</span>
        <a href={siteConfig.website}>wen-side.com</a>
        <span>{siteConfig.socialHandle} · <a href={siteConfig.zapWrapWebsite}>ZapWrap</a></span>
      </div>
    </footer>
  );
}
