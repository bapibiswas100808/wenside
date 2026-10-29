"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about-us", label: "About us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-20 bg-paper-light">
      <div
        className="announcement h-7 bg-ink text-stone-100 flex items-center justify-center gap-3
          text-xs font-bold tracking-widest max-md:h-7 px-4"
      >
        <span>PRODUCTS THAT MAKE YOUR BRAND</span>
        <span className="announcement-star text-stone-500 text-sm" aria-hidden="true">
          ✳
        </span>
        <span>GLOBAL B2B PARTNERSHIPS</span>
      </div>
      <div className="nav-wrap h-20 flex items-center justify-between border-b max-md:h-16">
        <Link
          className="wordmark inline-flex items-center gap-2 text-base font-extrabold tracking-wide
            leading-none"
          href="/"
          aria-label="Wenside home"
          onClick={() => setOpen(false)}
        >
          <Image
            // className="wordmark-image"
            height={180}
            width={180}
            src="/images/logo.png"
            alt=""
          />

          {/* <span>WENSIDE<small>GLOBAL SUPPLY</small></span> */}
        </Link>
        <nav
          className={`main-nav ${open ? "is-open" : ""} flex items-center gap-1 lg:gap-6`}
          aria-label="Main navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={
                pathname === href || (href === "/products" && pathname.startsWith("/products/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="nav-quote mobile-quote min-h-11 justify-center items-center gap-3 bg-orange
              text-white text-sm font-semibold transition-transform"
            href="/contact"
          >
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </nav>
        <Image
          // className="wordmark-image"
          height={80}
          width={80}
          src="/images/zapwrap-logo.png"
          alt=""
        />
        <Link
          className="nav-quote desktop-quote min-h-11 inline-flex justify-center items-center gap-3
            bg-orange text-white text-sm font-semibold transition-transform max-md:hidden"
          href="/contact"
        >
          Request a quote <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle hidden max-md:grid max-md:size-10 max-md:place-items-center
            max-md:border max-md:bg-transparent max-md:cursor-pointer"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
