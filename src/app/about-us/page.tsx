import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, ClipboardCheck, Factory, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Wenside",
  description:
    "About Wenside Shanghai International E-Commerce Co., Ltd. and its smoking accessories catalogue.",
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
      <section
        className="page-hero about-hero relative min-h-96 flex justify-between items-end
          bg-stone-100 max-md:min-h-80 max-md:pt-16 px-6 pb-11 min-h-96 max-md:min-h-80"
      >
        <div className="page-hero-main max-w-3xl">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            ABOUT WENSIDE / OUR COMPANY
          </span>
          <h1>
            A global supply
            <br />
            <em>partner for your brand.</em>
          </h1>
          <p>
            {siteConfig.legalName} describes itself as a manufacturer and global supplier of smoking
            accessories and packaging solutions for modern brands, wholesalers, and distributors
            worldwide.
          </p>
        </div>
        <div
          className="about-hero-note w-28 h-28 mb-1 flex flex-col items-center justify-center
            gap-1.5 border rounded-full text-green text-center text-xs font-bold tracking-widest
            rotate-12 max-md:text-xs"
        >
          <span className="note-star text-orange text-2xl">✳</span>
          <span>
            PRODUCTS
            <br />
            &amp; PACKAGING
          </span>
        </div>
      </section>
      <section
        className="about-story section pt-24 pb-24 grid grid-cols-2 items-center gap-6 max-md:pt-14
          max-md:pb-16 max-md:grid-cols-1 max-md:gap-8 w-full max-w-7xl mx-auto"
      >
        <div className="about-image relative min-h-96 overflow-hidden bg-stone-200 max-md:min-h-80">
          <Image
            src="/images/products/quality1.png"
            alt="Production work shown in Wenside's supplied company catalogue"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span
            className="image-note absolute z-10 top-3 left-3 py-1.5 px-2 text-white bg-stone-700
              text-xs font-bold tracking-widest"
          >
            IMAGE FROM WENSIDE CATALOGUE
          </span>
        </div>
        <div className="about-story-copy">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            THE WENSIDE APPROACH
          </span>
          <h2>
            Product range.
            <br />
            <em>Partnership.</em>
          </h2>
          <p>
            Wenside’s catalogue covers pre-rolled cones, hemp wraps, rolling paper booklets, paper
            bobbins, filter tips, grinders, smoking trays, rolling machines, cone tubes, and
            silicone accessories.
          </p>
          <p>
            The company presents its offer around customizable products, OEM / ODM services, quality
            checks, export-standard packaging, and support for international buyers. Confirm product
            details and current capabilities with Wenside.
          </p>
          <Link
            className="text-link inline-flex items-center gap-2 text-sm font-semibold"
            href="/products"
          >
            Explore the catalogue <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="about-pillars bg-stone-100 max-md:pt-16 px-5 pb-16">
        <div
          className="section-heading mb-10 flex items-end justify-between gap-7 max-md:mb-7
            max-md:flex-col"
        >
          <div>
            <span
              className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                tracking-widest leading-normal"
            >
              HOW WENSIDE SUPPORTS YOUR RANGE
            </span>
            <h2>
              Made for <em>what’s next.</em>
            </h2>
          </div>
          <p>
            Options below are described in the supplied Wenside catalogue; availability depends on
            product and confirmation.
          </p>
        </div>
        <div className="pillar-grid grid grid-cols-3 gap-3.5 max-md:grid-cols-1 max-md:gap-2">
          <article>
            <span
              className="pillar-icon w-10 h-10 mb-7 grid place-items-center text-orange border
                rounded-full max-md:mb-5"
            >
              <Box size={23} />
            </span>
            <span
              className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                tracking-widest leading-normal"
            >
              01 / PRODUCT RANGE
            </span>
            <h3>Accessories &amp; packaging</h3>
            <p>
              Explore a range spanning papers, tips, wraps, grinders, trays, tubes, and other listed
              smoking accessories.
            </p>
          </article>
          <article>
            <span
              className="pillar-icon w-10 h-10 mb-7 grid place-items-center text-orange border
                rounded-full max-md:mb-5"
            >
              <Factory size={23} />
            </span>
            <span
              className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                tracking-widest leading-normal"
            >
              02 / OEM &amp; ODM
            </span>
            <h3>Customization services</h3>
            <p>
              The catalogue lists logo printing, custom sizes and materials, packaging design,
              hemp-wrap flavor development, and box, tube, and display packaging.
            </p>
          </article>
          <article>
            <span
              className="pillar-icon w-10 h-10 mb-7 grid place-items-center text-orange border
                rounded-full max-md:mb-5"
            >
              <MessageCircle size={23} />
            </span>
            <span
              className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                tracking-widest leading-normal"
            >
              03 / BUSINESS SUPPORT
            </span>
            <h3>International inquiries</h3>
            <p>
              Wenside lists global supply, export experience, fast response, and customer support
              for business buyers.
            </p>
          </article>
        </div>
      </section>
      <section className="quality-section section w-full max-w-7xl mx-auto">
        <div className="quality-copy">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            QUALITY CONTROL / AS LISTED IN THE CATALOGUE
          </span>
          <h2>
            Considered at
            <br />
            <em>every step.</em>
          </h2>
          <p>The company catalogue describes the following quality-control process:</p>
          <ul>
            {qualitySteps.map((step) => (
              <li key={step}>
                <ClipboardCheck size={17} />
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="quality-image">
          <Image
            src="/images/products/quality3.png"
            alt="Hand-finishing work shown in Wenside's supplied company catalogue"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span
            className="image-note absolute z-10 top-3 left-3 py-1.5 px-2 text-white bg-stone-700
              text-xs font-bold tracking-widest"
          >
            IMAGE FROM WENSIDE CATALOGUE
          </span>
        </div>
      </section>
      <section className="company-facts">
        <div>
          <strong>2011</strong>
          <span>Export experience stated since</span>
        </div>
        <div>
          <strong>30+</strong>
          <span>Countries reported in catalogue</span>
        </div>
        <div>
          <strong>200M+</strong>
          <span>Booklets exported annually, as reported</span>
        </div>
        <p>
          Figures above are claims in the supplied Wenside catalogue and have not been independently
          verified.
        </p>
      </section>
      <section
        className="closing-cta about-cta relative overflow-hidden text-white bg-green max-md:pt-9
          px-6 pb-12 bg-stone-500"
      >
        <div
          className="closing-topline flex justify-between text-stone-100 text-xs font-bold
            tracking-widest"
        >
          <span>LET’S START WITH A GOOD QUESTION</span>
          <span>W / SAY HELLO</span>
        </div>
        <h2>
          Tell us what
          <br />
          <em>you’re building.</em>
        </h2>
        <Link
          className="button button-light min-h-12 inline-flex items-center justify-center gap-4
            border text-sm font-semibold transition-transform bg-paper-light text-ink"
          href="/contact"
        >
          Start a conversation <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
