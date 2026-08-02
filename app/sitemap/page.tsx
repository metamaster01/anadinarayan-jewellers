import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, HERITAGE_ITEMS } from "@/data/Product";
import LegalPageHeader from "@/components/legal/LegalPageHeader";

export const metadata: Metadata = {
  title: "Sitemap | Anandi Narayan",
  description: "A full directory of every page across the Anandi Narayan website.",
};

interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const MAIN_PAGES: LinkGroup = {
  title: "Main Pages",
  links: [
    { label: "Home", href: "/" },
    { label: "The Heritage Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Store Locator", href: "/stores" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const CATEGORY_LINKS: LinkGroup = {
  title: "Shop by Category",
  links: CATEGORIES.map((category) => ({
    label: category.label,
    href: `/collections?category=${category.slug}`,
  })),
};

const HERITAGE_LINKS: LinkGroup = {
  title: "Curated Collections",
  links: HERITAGE_ITEMS.map((item) => ({
    label: item.title,
    href: item.href,
  })),
};

const LEGAL_LINKS: LinkGroup = {
  title: "Legal & Support",
  links: [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Returns", href: "/returns" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const GROUPS: LinkGroup[] = [MAIN_PAGES, CATEGORY_LINKS, HERITAGE_LINKS, LEGAL_LINKS];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-black">
      <LegalPageHeader
        eyebrow="Directory"
        title="Sitemap"
        description="A complete directory of every page on the Anandi Narayan website — jump straight to what you're looking for."
      />

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-amber-300 sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}