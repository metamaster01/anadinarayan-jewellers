/**
 * Single source of truth for products, categories, materials, and the
 * "Curated Heritage" lookbook tiles. Category/collection pages filter
 * `PRODUCTS` by `category`, `material`, price, and search text.
 */

export type ProductCategorySlug =
  | "rings"
  | "earrings"
  | "necklaces"
  | "bangles"
  | "bracelets"
  | "chains";

export type ProductMaterialSlug = "22k-gold" | "diamond" | "platinum" | "temple-art";

export interface Product {
  id: string;
  /** URL-safe identifier, also used to build the in-app deep link */
  slug: string;
  title: string;
  /** Short uppercase line under/above the title, e.g. "GEMSTONE SIGNATURE" */
  subtitle: string;
  category: ProductCategorySlug;
  material: ProductMaterialSlug;
  /** Price in whole Indian Rupees, e.g. 185000 */
  price: number;
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

export interface MaterialItem {
  slug: ProductMaterialSlug;
  label: string;
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
// Formatting
// ---------------------------------------------------------------------------

/** Formats a whole-rupee amount as "₹1,85,000" (Indian digit grouping). */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

// ---------------------------------------------------------------------------
// Categories ("Shop by Type" / "Exquisite Categories")
// ---------------------------------------------------------------------------

export const CATEGORIES: CategoryItem[] = [
  { slug: "rings", label: "Rings", href: "/collection?category=rings" },
  { slug: "earrings", label: "Earrings", href: "/collection?category=earrings" },
  { slug: "necklaces", label: "Necklaces", href: "/collection?category=necklaces" },
  { slug: "bangles", label: "Bangles", href: "/collection?category=bangles" },
  { slug: "bracelets", label: "Bracelets", href: "/collection?category=bracelets" },
  { slug: "chains", label: "Chains", href: "/collection?category=chains" },
];

// ---------------------------------------------------------------------------
// Materials ("Material" filter on the collections page)
// ---------------------------------------------------------------------------

export const MATERIALS: MaterialItem[] = [
  { slug: "22k-gold", label: "22K Gold" },
  { slug: "diamond", label: "Diamond" },
  { slug: "platinum", label: "Platinum" },
  { slug: "temple-art", label: "Temple Art" },
];

// ---------------------------------------------------------------------------
// Price bands (price filter on the collections page)
// ---------------------------------------------------------------------------

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max: number | null;
}

export const PRICE_RANGES: PriceRange[] = [
  { id: "all", label: "All Prices", min: 0, max: null },
  { id: "under-1l", label: "Under ₹1,00,000", min: 0, max: 100_000 },
  { id: "1l-3l", label: "₹1,00,000 – ₹3,00,000", min: 100_000, max: 300_000 },
  { id: "3l-5l", label: "₹3,00,000 – ₹5,00,000", min: 300_000, max: 500_000 },
  { id: "above-5l", label: "Above ₹5,00,000", min: 500_000, max: null },
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
    href: "/collection",
  },
  {
    id: "h2",
    image: "/heritage/heritage-2.jpg",
    tag: "Eternal",
    title: "Pure Gold Classics",
    href: "/collection",
  },
  {
    id: "h3",
    image: "/heritage/heritage-3.jpg",
    tag: "Brilliance",
    title: "Diamond Gallery",
    href: "/collection",
  },
  {
    id: "h4",
    image: "/heritage/heritage-4.jpg",
    tag: "Divine",
    title: "Temple Artistry",
    href: "/collection",
  },
  {
    id: "h5",
    image: "/heritage/heritage-5.jpg",
    tag: "Essential",
    title: "Daily Elegance",
    href: "/collection",
  },
];

// ---------------------------------------------------------------------------
// Products ("New Arrivals" + category/collections pages)
// ---------------------------------------------------------------------------

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "rose-sapphire-ring",
    title: "Rose Sapphire Ring",
    subtitle: "Gemstone Signature",
    category: "rings",
    material: "diamond",
    price: 185_000,
    image: "/products/product-1.png",
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "p2",
    slug: "floral-diamond-drops",
    title: "Floral Diamond Drops",
    subtitle: "Brilliance Series",
    category: "earrings",
    material: "diamond",
    price: 210_000,
    image: "/products/product-2.png",
    isNewArrival: true,
  },
  {
    id: "p3",
    slug: "emerald-pearl-choker",
    title: "Emerald & Pearl Choker",
    subtitle: "Royal Wedding",
    category: "necklaces",
    material: "22k-gold",
    price: 420_000,
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
    material: "platinum",
    price: 165_000,
    image: "/products/product-4.png",
    isNewArrival: true,
  },
  {
    id: "p5",
    slug: "temple-gold-bangle",
    title: "Temple Gold Bangle",
    subtitle: "Bridal Edit",
    category: "bangles",
    material: "22k-gold",
    price: 145_000,
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
    material: "22k-gold",
    price: 95_000,
    image: "/heritage/heritage-3.jpg",
  
    isNewArrival: true,
  },
  {
    id: "p7",
    slug: "lotus-petal-ring",
    title: "Lotus Petal Ring",
    subtitle: "Temple Collection",
    category: "rings",
    material: "temple-art",
    price: 128_000,
    image: "/heritage/heritage-5.jpg",
    
    isNewArrival: true,
  },
  {
    id: "p8",
    slug: "kundan-drop-earrings",
    title: "Kundan Drop Earrings",
    subtitle: "Bridal Edit",
    category: "earrings",
    material: "temple-art",
    price: 138_000,
    image: "/heritage/heritage-4.jpg",
  },
  {
    id: "p9",
    slug: "eternal-solitaire-ring",
    title: "Eternal Solitaire Ring",
    subtitle: "Brilliance Series",
    category: "rings",
    material: "diamond",
    price: 265_000,
    image: "/products/eternal-solitaire-ring.png",
  },
  {
    id: "p10",
    slug: "temple-antique-necklace",
    title: "Temple Antique Necklace",
    subtitle: "Temple Artistry",
    category: "necklaces",
    material: "temple-art",
    price: 350_000,
    image: "/products/temple-antique-necklace.png",
    isBestSeller: true,
  },
  {
    id: "p11",
    slug: "platinum-infinity-chain",
    title: "Platinum Infinity Chain",
    subtitle: "Modern Edit",
    category: "chains",
    material: "platinum",
    price: 118_000,
    image: "/products/product-6.jpg",
    isNewArrival: true,
  },
  {
    id: "p12",
    slug: "gold-charm-bangle-set",
    title: "Gold Charm Bangle Set",
    subtitle: "Daily Luxury",
    category: "bangles",
    material: "22k-gold",
    price: 88_000,
    image: "/products/gold-charm-bangle-set.png",
  },
];