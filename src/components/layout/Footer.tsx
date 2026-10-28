import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";
import CurrentYear from "@/components/layout/CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">
            <span className="wordmark-icon" aria-hidden="true">w.</span>
            <span>WENSIDE<small>SUPPLY CO.</small></span>
          </Link>
          <p>Thoughtful smoking accessories, made for the brands building what’s next.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/products">All products</Link>
          <Link href="/about-us">About Wenside</Link>
          <Link href="/contact">Get in touch</Link>
        </div>
        <div className="footer-column">
          <h3>Categories</h3>
          {productCategories.slice(0, 4).map((category) => (
            <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <span className="eyebrow">LET’S MAKE SOMETHING GOOD</span>
          <Link className="footer-cta" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link>
          <p>Contact details will be added once verified.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© <CurrentYear /> Wenside. All rights reserved.</span>
        <span>Product visuals are illustrative samples.</span>
        <span>Designed for good things.</span>
      </div>
    </footer>
  );
}
