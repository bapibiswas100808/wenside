import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { Suspense } from "react";
import ProductBrowser from "@/components/products/ProductBrowser";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Explore Wenside's sample smoking accessories catalogue and inquire about B2B supply and private-label options.",
};

export default function ProductsPage() {
  return (
    <main className="catalogue-page">
      <section
        className="page-hero catalogue-hero relative min-h-96 flex justify-between items-end
          bg-stone-100 max-md:min-h-80 max-md:pt-16 px-6 pb-11"
      >
        <div className="page-hero-main max-w-3xl">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            THE WENSIDE RANGE / 15 PRODUCT TYPES
          </span>
          <h1>
            Good things,
            <br />
            <em>in good company.</em>
          </h1>
          <p>
            Explore a considered selection of smoking accessories for your next range. Looking for a
            specific format? Let’s talk.
          </p>
        </div>
        <div
          className="page-hero-aside min-w-28 flex flex-col items-end gap-2.5 text-muted text-xs
            font-bold tracking-widest text-right max-md:min-w-16"
        >
          <span
            className="round-arrow w-12 h-12 grid place-items-center text-orange border
              rounded-full"
          >
            <ArrowDownRight size={25} />
          </span>
          <span>
            SCROLL TO
            <br />
            EXPLORE
          </span>
          <span>PRODUCTS / 2026</span>
        </div>
      </section>
      <section
        className="catalogue-content section pt-10 pb-24 max-md:pt-6 max-md:pb-16 w-full max-w-7xl
          mx-auto"
      >
        <Suspense
          fallback={
            <div
              className="catalogue-loading animate-pulse min-h-96 bg-cover"
              aria-label="Loading catalogue"
            />
          }
        >
          <ProductBrowser />
        </Suspense>
      </section>
    </main>
  );
}
