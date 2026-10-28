import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <span className="eyebrow">404 / WRONG TURN</span>
      <h1>This page<br /><em>got away.</em></h1>
      <p>We couldn’t find what you’re looking for. Let’s get you back to something good.</p>
      <div><Link className="button button-dark" href="/products">Browse products <ArrowUpRight size={17} /></Link><Link className="text-link" href="/"><ArrowLeft size={15} /> Back home</Link></div>
    </main>
  );
}
