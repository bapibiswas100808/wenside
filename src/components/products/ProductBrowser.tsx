"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import { productCategories, products } from "@/data/products";

export default function ProductBrowser() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = !category || product.category === category;
      const search = query.trim().toLowerCase();
      const matchesQuery = !search || `${product.name} ${product.modelNumber ?? ""} ${product.category} ${product.shortDescription} ${(product.keywords ?? []).join(" ")}`.toLowerCase().includes(search);
      return matchesCategory && matchesQuery;
    });
    if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "category") filtered.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    return filtered;
  }, [category, query, sort]);

  function clearFilters() {
    setCategory("");
    setQuery("");
    setSort("featured");
  }

  return (
    <>
      <div className="catalogue-controls">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the range" />
          {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></button>}
        </label>
        <label className="filter-field">
          <SlidersHorizontal size={17} aria-hidden="true" />
          <span className="sr-only">Filter by category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All categories</option>
            {productCategories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="filter-field sort-field">
          <span className="sort-label">SORT</span>
          <span className="sr-only">Sort products</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured first</option>
            <option value="name">Name A–Z</option>
            <option value="category">Category</option>
          </select>
        </label>
        {(category || query || sort !== "featured") && <button className="clear-filters" type="button" onClick={clearFilters}>Clear filters <X size={14} /></button>}
      </div>
      <div className="results-row" aria-live="polite">
        <span><strong>{visibleProducts.length}</strong> {visibleProducts.length === 1 ? "product" : "products"}</span>
        {category && <span className="active-filter">{category}<button onClick={() => setCategory("")} type="button" aria-label={`Remove ${category} filter`}><X size={13} /></button></span>}
      </div>
      {visibleProducts.length ? (
        <div className="product-grid">
          {visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
      ) : (
        <div className="empty-state"><span className="eyebrow">NOTHING HERE JUST YET</span><h2>No matches <em>found.</em></h2><p>Try a different search or clear the selected category to explore the full range.</p><button className="button button-dark" onClick={clearFilters} type="button">Clear filters <X size={16} /></button></div>
      )}
      <p className="sample-note catalogue-note">Product information and images are taken from the supplied Wenside catalogue. Confirm current options, specifications, and availability with the sales team.</p>
    </>
  );
}
