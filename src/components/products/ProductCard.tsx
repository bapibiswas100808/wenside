import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className={`product-card card-tone-${index % 4}`} style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
      <Link href={`/products/${product.slug}`} className="product-card-image" aria-label={`View ${product.name}`}>
        {product.image ? (
          <>
            <Image src={product.image} alt={product.imageAlt ?? product.name} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw" />
            <span className="image-note">CATALOGUE IMAGE</span>
          </>
        ) : (
          <span className="missing-card-image">IMAGE TO BE ADDED</span>
        )}
        <span className="card-arrow"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="product-card-copy">
        <div className="product-card-meta"><span>{product.category}</span>{product.modelNumber && <span>{product.modelNumber}</span>}</div>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.shortDescription}</p>
        <Link className="text-link" href={`/products/${product.slug}`}>View details <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
