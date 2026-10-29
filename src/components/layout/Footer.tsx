import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";
import CurrentYear from "@/components/layout/CurrentYear";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer text-stone-100 bg-ink max-md:pt-12 px-6 pb-4">
      <div
        className="footer-top grid grid-cols-4 gap-8 pb-14 max-md:grid-cols-2 max-md:gap-6
          max-md:pb-9"
      >
        <div className="relative">
          <Link
            className="wordmark footer-wordmark inline-flex items-center gap-2 text-base
              font-extrabold tracking-wide leading-none text-white"
            href="/"
          >
            <Image className="absolute" height={200} width={200} src="/images/logo1.png" alt="" />
          </Link>
          <p className="pt-10 text-sm text-stone-400 max-md:pt-6">
            {siteConfig.legalName}
            Smoking accessories and packaging solutions for international brands.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              className="grid size-10 place-items-center rounded-full border border-stone-500
                text-stone-300 transition hover:border-orange hover:text-orange"
              href="https://www.facebook.com/wenside1"
              target="_blank"
              rel="noreferrer"
              aria-label="Wenside on Facebook"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
              </svg>
            </a>
            <a
              className="grid size-10 place-items-center rounded-full border border-stone-500
                text-stone-300 transition hover:border-orange hover:text-orange"
              href="https://www.instagram.com/wenside1"
              target="_blank"
              rel="noreferrer"
              aria-label="Wenside on Instagram"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-column flex flex-col items-start gap-2.5">
          <h3>Explore</h3>
          <Link href="/products">All products</Link>
          <Link href="/about-us">About Wenside</Link>
          <Link href="/contact">Get in touch</Link>
        </div>
        <div className="footer-column flex flex-col items-start gap-2.5">
          <h3>Categories</h3>
          {productCategories.map((category) => (
            <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
        <div className="footer-contact flex flex-col items-start">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            LET’S MAKE SOMETHING GOOD
          </span>
          <Link className="footer-cta flex items-center gap-2.5 font-serif text-xl" href="/contact">
            Start a conversation <ArrowUpRight size={18} />
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <a href={`tel:${siteConfig.phoneLink}`}>{siteConfig.phone}</a>
        </div>
      </div>
      <div
        className="footer-bottom pt-4 flex justify-between gap-3.5 border-t text-stone-300 text-xs
          tracking-wide flex-wrap"
      >
        <span>
          © <CurrentYear /> Wenside. All rights reserved.
        </span>
        <a href={siteConfig.website}>wen-side.com</a>
        <span>
          {siteConfig.socialHandle} · <a href={siteConfig.zapWrapWebsite}>ZapWrap</a>
        </span>
      </div>
    </footer>
  );
}
