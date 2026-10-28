import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { Suspense } from "react";
import ProductBrowser from "@/components/products/ProductBrowser";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description: "Explore Wenside's sample smoking accessories catalogue and inquire about B2B supply and private-label options.",
};

export default function ProductsPage() {
  return (
    <main className="catalogue-page">
      <section className="page-hero catalogue-hero">
        <div className="page-hero-main">
          <span className="eyebrow">THE WENSIDE RANGE / 15 PRODUCT TYPES</span>
          <h1>Good things,<br /><em>in good company.</em></h1>
          <p>Explore a considered selection of smoking accessories for your next range. Looking for a specific format? Let’s talk.</p>
        </div>
        <div className="page-hero-aside"><span className="round-arrow"><ArrowDownRight size={25} /></span><span>SCROLL TO<br />EXPLORE</span><span>PRODUCTS / 2026</span></div>
      </section>
      <section className="catalogue-content section">
        <Suspense fallback={<div className="catalogue-loading" aria-label="Loading catalogue" />}>
          <ProductBrowser />
        </Suspense>
      </section>
    </main>
  );
}
