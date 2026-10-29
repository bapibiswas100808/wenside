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

const tickerItems = [
  "PRE-ROLLED CONES",
  "HEMP WRAPS",
  "ROLLING PAPERS & TIPS",
  "ACCESSORIES",
  "BOBBINS",
  "OEM / ODM",
];

const benefits = [
  {
    icon: Layers3,
    title: "A considered range",
    body: "Explore a broad mix of accessories and find the right fit for your product assortment.",
  },
  {
    icon: Sparkles,
    title: "Your brand, your way",
    body: "Ask us about custom logos, colors, packaging, and branded product sets.",
  },
  {
    icon: Box,
    title: "Room to shape it",
    body: "Discuss product configurations and development needs with our team.",
  },
  {
    icon: Handshake,
    title: "Made for B2B",
    body: "A direct point of contact for importers, wholesalers, and brand owners.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        className="hero relative flex flex-col overflow-hidden bg-stone-100 lg:grid lg:grid-cols-2"
      >
        <div
          className="hero-copy relative z-10 flex min-h-128 flex-col items-start px-6 pt-16 pb-7
            lg:min-h-screen lg:pt-24"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-700">
            <span className="size-1.5 rounded-full bg-orange shadow-sm" />
            YOUR NEXT GREAT SUPPLY PARTNER
          </div>
          <h1 className="my-0 mt-7 mb-6 text-5xl leading-none font-medium tracking-tighter text-ink">
            Your partner in
            <br />
            <em className="font-serif font-medium tracking-tighter text-orange">
              smoking accessories
            </em>
            <br />
            and B2B supply.
          </h1>
          <p className="mb-7 max-w-96 text-sm leading-loose text-stone-500 lg:text-sm">
            Wenside supplies smoking accessories and packaging solutions for modern brands,
            wholesalers, and distributors worldwide.
          </p>
          <div className="flex flex-wrap gap-2.5 max-sm:max-w-72">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-4 border
                border-transparent bg-ink px-5 text-sm font-semibold !text-white transition
                duration-200 hover:-translate-y-0.5 hover:bg-orange"
              href="/products"
            >
              Explore our products <ArrowUpRight size={17} />
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-4 border border
                bg-transparent px-5 text-sm font-semibold text-ink transition duration-200
                hover:-translate-y-0.5"
              href="/contact"
            >
              Request a quote <ArrowRight size={17} />
            </Link>
          </div>
          <div
            className="mt-auto flex w-full justify-between gap-3.5 pt-8 text-xs font-bold
              tracking-widest text-stone-500"
          >
            <span>MANUFACTURING & GLOBAL SUPPLY</span>
            <span>OEM / ODM CUSTOMIZATION</span>
          </div>
        </div>
        <div
          className="hero-banner relative flex min-h-80 items-center justify-center overflow-hidden
            px-0 py-9 sm:min-h-96 lg:min-h-screen"
        >
          <div className="hero-banner-frame">
            <Image
              src="/images/banner2.png"
              alt="Wenside smoking accessories and branded product range"
              width={1888}
              height={1312}
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
              className="hero-banner-image"
            />
          </div>
        </div>
      </section>

      <section
        className="ticker h-12 flex items-center overflow-hidden bg-orange text-stone-100"
        aria-label="Wenside capabilities"
      >
        <div className="ticker-track text-xs font-bold tracking-widest">
          {[0, 1].map((copy) => (
            <div className="ticker-group" aria-hidden={copy === 1} key={copy}>
              {tickerItems.map((item) => (
                <span className="ticker-item" key={item}>
                  {item}
                  <span className="ticker-star" aria-hidden="true">
                    ✳
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className="section categories-section w-full max-w-7xl mx-auto pt-28 pb-28 max-md:pt-20
          max-md:pb-16"
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
              PRODUCTS FROM THE CATALOGUE
            </span>
            <h2>
              Explore by <em>category.</em>
            </h2>
          </div>
          {/* <p>Browse Wenside’s catalogue categories and discover the formats available for your product range.</p> */}
        </div>
        <div className="category-grid grid grid-cols-4 gap-3 max-md:grid-cols-2 max-md:gap-2">
          {categories.map((category) => (
            <Link
              className="category-tile group flex min-h-72 flex-col overflow-hidden
                transition-transform hover:-translate-y-1 max-md:min-h-64"
              href={`/products?category=${encodeURIComponent(category.name)}`}
              key={category.name}
            >
              <div className="category-image-wrap relative shrink-0 overflow-hidden bg-white">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 760px) 45vw, 23vw"
                    className="category-image object-cover transition-transform
                      group-hover:scale-105"
                  />
                )}
              </div>
              <div className="category-copy relative flex flex-1 flex-col items-start p-4">
                <span className="category-index mb-2 text-xs font-bold tracking-widest">
                  {category.count} {category.count === 1 ? "PRODUCT" : "PRODUCT TYPES"}
                </span>
                <h3 className="mb-1 max-w-xs text-xl font-semibold tracking-tight">
                  {category.name}
                </h3>
                <span className="category-description">{category.description}</span>
                <span
                  className="category-icon absolute right-4 bottom-4 grid h-8 w-8 place-items-center
                    rounded-full border transition max-md:right-3 max-md:bottom-3"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="align-right mt-6 flex justify-end">
          <Link
            className="text-link inline-flex items-center gap-2 text-sm font-semibold"
            href="/products"
          >
            See all product categories <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="featured-section bg-stone-100">
        <div className="section section-inner w-full max-w-7xl mx-auto">
          <div
            className="section-heading mb-10 flex items-end justify-between gap-7 max-md:mb-7
              max-md:flex-col"
          >
            <div>
              <span
                className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
                  tracking-widest leading-normal"
              >
                FROM THE WENSIDE CATALOGUE
              </span>
              <h2>
                Featured <em>products.</em>
              </h2>
            </div>
            <Link
              className="button button-outline min-h-12 inline-flex items-center justify-center
                gap-4 border text-sm font-semibold transition-transform border-stone-200
                bg-stone-100"
              href="/products"
            >
              View the catalogue <ArrowRight size={16} />
            </Link>
          </div>
          <div
            className="product-grid product-grid-home grid grid-cols-4 gap-4 max-xl:gap-6
              max-md:gap-6 max-sm:gap-6"
          >
            {products
              .filter((product) => product.featured)
              .slice(0, 4)
              .map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
          </div>
          <p className="sample-note text-stone-500 text-xs leading-relaxed">
            Product options and availability may vary. Contact Wenside to confirm details for your
            requirements.
          </p>
        </div>
      </section>

      <section
        className="why-section section pt-32 pb-32 grid grid-cols-2 gap-6 max-xl:gap-6
          max-md:grid-cols-1 max-md:pt-20 max-md:pb-20 w-full max-w-7xl mx-auto"
      >
        <div className="why-intro relative">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            WHY CHOOSE WENSIDE
          </span>
          <h2>
            Product supply,
            <br />
            <em>made easier.</em>
          </h2>
          <p>
            Wenside’s catalogue highlights OEM / ODM customization, quality checks, export
            experience, and customer support for international buyers.
          </p>
          <Link
            className="text-link inline-flex items-center gap-2 text-sm font-semibold"
            href="/about-us"
          >
            Get to know Wenside <ArrowUpRight size={16} />
          </Link>
          <div
            className="why-stamp absolute right-0 -bottom-8 w-24 h-24 flex flex-col items-center
              justify-center gap-1 border rounded-full text-green rotate-12 max-md:right-0
              max-md:-bottom-4 max-md:w-20 max-md:h-20"
          >
            <BadgeCheck size={26} />
            <span>
              DETAILS
              <br />
              MATTER
            </span>
          </div>
        </div>
        <div className="benefit-grid grid grid-cols-2">
          {benefits.map(({ icon: Icon, title, body }, index) => (
            <article
              className="benefit-card min-h-44 relative border-b max-md:min-h-40 max-md:pr-3"
              key={title}
            >
              <span
                className="benefit-number absolute top-5 right-4 text-stone-300 text-xs
                  tracking-widest"
              >
                0{index + 1}
              </span>
              <Icon size={23} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-section min-h-96 grid grid-cols-2 bg-stone-100 max-md:grid-cols-1">
        <div className="oem-image relative min-h-96 overflow-hidden bg-stone-200 max-md:min-h-80">
          <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4 lg:gap-5 lg:p-6">
            <div className="relative min-w-0 overflow-hidden rounded-sm bg-stone-100">
              <Image
                src="/images/products/contact1.png"
                alt="Lifestyle campaign artwork from the supplied catalogue"
                fill
                sizes="(max-width: 760px) 45vw, 25vw"
                className="object-contain p-2"
              />
            </div>
            <div className="relative min-w-0 overflow-hidden rounded-sm bg-stone-100">
              <Image
                src="/images/products/contact2.png"
                alt="Promotional brand artwork from the supplied catalogue"
                fill
                sizes="(max-width: 760px) 45vw, 25vw"
                className="object-contain p-2"
              />
            </div>
          </div>
          <span
            className="image-note absolute z-10 top-3 left-3 py-1.5 px-2 text-white bg-stone-700
              text-xs font-bold tracking-widest"
          >
            BRAND & LIFESTYLE INSPIRATION
          </span>
          <div
            className="oem-image-label absolute z-10 bottom-9 left-0 text-white font-serif text-5xl
              leading-none tracking-tighter"
          >
            LET YOUR
            <br />
            BRAND SHOW UP.
          </div>
        </div>
        <div className="oem-copy flex flex-col items-start max-md:pt-12 px-6 pb-14">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            OEM & PRIVATE LABEL
          </span>
          <h2>
            Make it
            <br />
            <em>yours.</em>
          </h2>
          <p>
            Wenside’s catalogue lists OEM / ODM services including logo printing, custom sizes and
            materials, packaging design, flavor development for hemp wraps, and box, tube, and
            display packaging.
          </p>
          <ul>
            <li>Logo printing and private-label options</li>
            <li>Custom sizes, materials, and packaging</li>
            <li>Hemp-wrap flavor development inquiries</li>
          </ul>
          <Link
            className="button button-dark min-h-12 inline-flex items-center justify-center gap-4
              border text-sm font-semibold transition-transform bg-ink text-white"
            href="/contact"
          >
            Discuss your project <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section
        className="section grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-2 w-full max-w-7xl
          mx-auto"
      >
        <div className="relative min-h-80 overflow-hidden bg-stone-200">
          <Image
            src="/images/products/quality2.png"
            alt="Product hand-rolling shown in the Wenside company catalogue"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            className="object-cover"
          />
          <span
            className="image-note absolute z-10 top-3 left-3 py-1.5 px-2 text-white bg-stone-700
              text-xs font-bold tracking-widest"
          >
            WENSIDE CATALOGUE
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            ABOUT WENSIDE
          </span>
          <h2 className="my-0 mt-3 mb-5 text-5xl leading-tight font-medium tracking-tighter">
            Built to support
            <br />
            brands <em>worldwide.</em>
          </h2>
          <p className="max-w-96 text-xs leading-loose text-muted">
            Wenside Shanghai International E-Commerce Co., Ltd. describes itself as a manufacturer
            and global supplier of smoking accessories and packaging solutions for modern brands,
            wholesalers, and distributors.
          </p>
          <Link
            className="text-link inline-flex items-center gap-2 text-sm font-semibold"
            href="/about-us"
          >
            More about Wenside <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="closing-cta relative overflow-hidden text-white bg-green max-md:pt-9 px-6
        pb-12">
        <div
          className="closing-topline flex justify-between text-stone-100 text-xs font-bold
            tracking-widest"
        >
          <span>GOOD IDEAS LOOK BETTER IN MOTION</span>
          <span>W / LET’S TALK</span>
        </div>
        <h2>
          Have a good
          <br />
          <em>one in mind?</em>
        </h2>
        <p>Tell us what you’re looking for. We’ll help you explore the possibilities.</p>
        <Link
          className="button button-light min-h-12 inline-flex items-center justify-center gap-4
            border text-sm font-semibold transition-transform bg-paper-light text-ink"
          href="/contact"
        >
          Contact our sales team <ArrowUpRight size={18} />
        </Link>
        <div
          className="closing-scribble absolute right-0 -bottom-8 text-stone-100 text-7xl
            leading-none rotate-12 pointer-events-none max-md:right-0 max-md:-bottom-12
            max-md:text-7xl"
          aria-hidden="true"
        >
          ✳
        </div>
      </section>
    </main>
  );
}
