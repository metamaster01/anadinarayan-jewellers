"use client";

/**
 * Navbar
 * ------------------------------------------------------------------
 * Transparent-over-hero navbar: logo mark + wordmark on the left,
 * primary nav centered, "Download App" CTA on the right. Collapses
 * to a slide-down mobile menu below the `lg` breakpoint.
 *
 * Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4
 *        Framer Motion (mobile menu open/close + link underline)
 *
 * Required asset in /public:
 *   /public/logo.png   -> small square brand mark (swap path as needed)
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Stores", href: "/stores" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  /** Path of the currently active route, used to underline the matching link. */
  activePath?: string;
}

export default function Navbar({ activePath = "/" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Swap the bar to a solid backing once the user scrolls past the hero
  // so it stays legible over whatever content comes next.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the mobile menu automatically if the viewport grows back to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-black/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="AnadiNarayan"
            width={36}
            height={36}
            className="h-9 w-9 rounded-sm object-cover"
            priority
          />
          <span className="font-serif text-xl font-semibold tracking-wide text-rose-200 sm:text-2xl">
            AnadiNarayan Jewellers
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activePath;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white/85 hover:text-amber-300"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#download"
          className="hidden rounded-sm border border-amber-400/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-400/10 lg:inline-block"
        >
          Download App
        </Link>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-black/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === activePath;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 text-sm font-semibold uppercase tracking-widest ${
                        isActive ? "text-amber-400" : "text-white/85"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-3">
                <Link
                  href="#download"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-sm border border-amber-400/70 px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-400"
                >
                  Download App
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}