import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className={`product-card card-tone-${index % 4}`}>
      <Link href={`/products/${product.slug}`} className="product-card-image" aria-label={`View ${product.name}`}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw" />
        <span className="image-note">SAMPLE VISUAL</span>
        <span className="card-arrow"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="product-card-copy">
        <div className="product-card-meta"><span>{product.category}</span><span>W / {String(index + 1).padStart(2, "0")}</span></div>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.shortDescription}</p>
        <Link className="text-link" href={`/products/${product.slug}`}>Discover product <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
