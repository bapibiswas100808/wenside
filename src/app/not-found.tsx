import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="not-found-page min-h-screen flex flex-col items-start justify-center bg-stone-100
        max-md:min-h-0 max-md:py-20 px-6"
    >
      <span
        className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
          tracking-widest leading-normal"
      >
        404 / WRONG TURN
      </span>
      <h1>
        This page
        <br />
        <em>got away.</em>
      </h1>
      <p>We couldn’t find what you’re looking for. Let’s get you back to something good.</p>
      <div>
        <Link
          className="button button-dark min-h-12 inline-flex items-center justify-center gap-4
            border text-sm font-semibold transition-transform bg-ink text-white"
          href="/products"
        >
          Browse products <ArrowUpRight size={17} />
        </Link>
        <Link className="text-link inline-flex items-center gap-2 text-sm font-semibold" href="/">
          <ArrowLeft size={15} /> Back home
        </Link>
      </div>
    </main>
  );
}
