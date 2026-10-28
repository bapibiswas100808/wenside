"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

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
    <header className="site-header">
      <div className="announcement">
        <span>PRODUCTS THAT MAKE YOUR BRAND</span>
        <span className="announcement-star" aria-hidden="true">✳</span>
        <span>GLOBAL B2B PARTNERSHIPS</span>
      </div>
      <div className="nav-wrap">
        <Link className="wordmark" href="/" aria-label="Wenside home" onClick={() => setOpen(false)}>
          <span className="wordmark-icon" aria-hidden="true">w.</span>
          <span>WENSIDE<small>SUPPLY CO.</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="nav-quote mobile-quote" href="/contact">
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </nav>
        <Link className="nav-quote desktop-quote" href="/contact">
          Request a quote <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
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
