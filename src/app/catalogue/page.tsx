import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import CatalogueBook from "@/components/catalogue/CatalogueBook";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Read the Wenside product catalogue online.",
};

export default function CataloguePage() {
  return (
    <main className="catalogue-page">
      <section
        className="page-hero relative min-h-96 flex justify-between items-end bg-stone-100
          max-md:min-h-80 max-md:pt-16 px-6 pb-11"
      >
        <div className="page-hero-main">
          <span className="eyebrow">THE WENSIDE CATALOGUE / 2026 EDITION</span>
          <h1>
            Made to be
            <br />
            <em>explored.</em>
          </h1>
          <p>Turn through our catalogue and discover the products, materials, and possibilities.</p>
        </div>
        <div className="page-hero-aside">
          <span className="round-arrow">
            <BookOpen size={24} aria-hidden="true" />
          </span>
          <span>
            READ THE
            <br />
            CATALOGUE
          </span>
          <span>15 PAGES / 2026</span>
        </div>
      </section>
      <section className="section w-full max-w-7xl mx-auto pt-12 pb-24 max-md:pt-8 max-md:pb-16">
        <CatalogueBook />
      </section>
    </main>
  );
}
