import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

const imageTones = ["bg-stone-100", "bg-stone-200", "bg-stone-300", "bg-stone-200"];

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className={`product-card card-tone-${index % 4} min-w-0 `}>
      <Link
        href={`/products/${product.slug}`}
        className={`product-card-image ${imageTones[index % imageTones.length]} relative block
          w-full aspect-square overflow-hidden `}
        aria-label={`View ${product.name}`}
      >
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={product.imageAlt ?? product.name}
              fill
              sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw"
            />
            <span
              className="image-note absolute z-10 top-3 left-3 py-1.5 px-2 text-white bg-stone-700
                text-xs font-bold tracking-widest"
            >
              CATALOGUE IMAGE
            </span>
          </>
        ) : (
          <span className="missing-card-image">IMAGE TO BE ADDED</span>
        )}
        <span
          className="card-arrow absolute z-10 right-3 bottom-3 w-8 h-8 grid place-items-center
            text-ink bg-paper-light rounded-full transition"
        >
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="product-card-copy pt-4 px-0.5 pb-1">
        <div
          className="product-card-meta flex justify-between gap-2 text-stone-500 text-xs font-bold
            tracking-widest uppercase"
        >
          <span>{product.category}</span>
          {product.modelNumber && <span>{product.modelNumber}</span>}
        </div>
        <h3>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="">{product.shortDescription}</p>
        <Link
          className="text-link inline-flex items-center gap-2 text-sm font-semibold"
          href={`/products/${product.slug}`}
        >
          View details <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
