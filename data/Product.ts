/**
 * Single source of truth for products, categories, and the "Curated
 * Heritage" lookbook tiles. Category landing pages (e.g. /categories/rings)
 * can later just filter `PRODUCTS` by `category`.
 */

export type ProductCategorySlug =
  | "rings"
  | "earrings"
  | "necklaces"
  | "bangles"
  | "bracelets"
  | "chains";

export interface Product {
  id: string;
  /** URL-safe identifier, also used to build the in-app deep link */
  slug: string;
  title: string;
  /** Short uppercase line under the title, e.g. "HERITAGE SERIES" */
  subtitle: string;
  category: ProductCategorySlug;
  /** Path under /public, e.g. "/products/rose-sapphire-ring.png" */
  image: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface CategoryItem {
  slug: ProductCategorySlug;
  label: string;
  href: string;
}

export interface HeritageItem {
  id: string;
  image: string;
  /** Small eyebrow label on the tile, e.g. "COLLECTION" */
  tag: string;
  title: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Categories ("Exquisite Categories" section)
// ---------------------------------------------------------------------------

export const CATEGORIES: CategoryItem[] = [
  { slug: "rings", label: "Rings", href: "/categories/rings" },
  { slug: "earrings", label: "Earrings", href: "/categories/earrings" },
  { slug: "necklaces", label: "Necklaces", href: "/categories/necklaces" },
  { slug: "bangles", label: "Bangles", href: "/categories/bangles" },
  { slug: "bracelets", label: "Bracelets", href: "/categories/bracelets" },
  { slug: "chains", label: "Chains", href: "/categories/chains" },
];

// ---------------------------------------------------------------------------
// Curated Heritage lookbook tiles
// ---------------------------------------------------------------------------

export const HERITAGE_ITEMS: HeritageItem[] = [
  {
    id: "h1",
    image: "/heritage/heritage-1.jpg",
    tag: "Collection",
    title: "The Royal Bridal",
    href: "/collections/royal-bridal",
  },
  {
    id: "h2",
    image: "/heritage/heritage-2.jpg",
    tag: "Eternal",
    title: "Pure Gold Classics",
    href: "/collections/pure-gold-classics",
  },
  {
    id: "h3",
    image: "/heritage/heritage-3.jpg",
    tag: "Brilliance",
    title: "Diamond Gallery",
    href: "/collections/diamond-gallery",
  },
  {
    id: "h4",
    image: "/heritage/heritage-4.jpg",
    tag: "Divine",
    title: "Temple Artistry",
    href: "/collections/temple-artistry",
  },
  {
    id: "h5",
    image: "/heritage/heritage-5.jpg",
    tag: "Essential",
    title: "Daily Elegance",
    href: "/collections/daily-elegance",
  },
];

// ---------------------------------------------------------------------------
// Products ("New Arrivals" + future category pages)
// ---------------------------------------------------------------------------

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "rose-sapphire-ring",
    title: "Rose Sapphire Ring",
    subtitle: "Heritage Series",
    category: "rings",
    image: "/products/product-1.png",
    isNewArrival: true,
  },
  {
    id: "p2",
    slug: "floral-diamond-drops",
    title: "Floral Diamond Drops",
    subtitle: "Evening Collection",
    category: "earrings",
    image: "/products/product-2.png",
    isNewArrival: true,
  },
  {
    id: "p3",
    slug: "emerald-pearl-choker",
    title: "Emerald & Pearl Choker",
    subtitle: "Royal Occasions",
    category: "necklaces",
    image: "/products/product-3.png",
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "p4",
    slug: "modern-platinum-bracelet",
    title: "Modern Platinum Bracelet",
    subtitle: "Men's Luxury",
    category: "bracelets",
    image: "/products/product-4.png",
    isNewArrival: true,
  },
  {
    id: "p5",
    slug: "temple-gold-bangle",
    title: "Temple Gold Bangle",
    subtitle: "Bridal Edit",
    category: "bangles",
    image: "/heritage/heritage-2.jpg",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "p6",
    slug: "heritage-link-chain",
    title: "Heritage Link Chain",
    subtitle: "Classic Gold",
    category: "chains",
    image: "/products/heritage-link-chain.png",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "p7",
    slug: "lotus-petal-ring",
    title: "Lotus Petal Ring",
    subtitle: "Temple Collection",
    category: "rings",
    image: "/products/lotus-petal-ring.png",
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: "p8",
    slug: "kundan-drop-earrings",
    title: "Kundan Drop Earrings",
    subtitle: "Bridal Edit",
    category: "earrings",
    image: "/products/kundan-drop-earrings.png",
    isBestSeller: true,
    isNewArrival: true,
  },
];