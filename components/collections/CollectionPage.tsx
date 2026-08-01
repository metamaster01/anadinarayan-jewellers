"use client";

/**
 * CollectionsPage
 * ------------------------------------------------------------------
 * Light-theme "Heritage Collections" page: header, a controlled
 * filter/search/sort bar, and a 3-column product grid that animates
 * items in/out as filters change (Framer Motion `layout` + AnimatePresence).
 *
 * All filtering happens client-side against `PRODUCTS` from
 * `@/data/products` — swap in a server-fetched list later without
 * touching the filter logic below.
 * ------------------------------------------------------------------
 */

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  PRODUCTS,
  PRICE_RANGES,
  CATEGORIES,
  type Product,
  type ProductCategorySlug,
  type ProductMaterialSlug,
} from "@/data/Product";
import CollectionsHeader from "@/components/collections/CollectionsHeader";
import CollectionsFilterBar, {
  type SortOption,
} from "@/components/collections/CollectionsFilterBar";
import CollectionProductCard from "@/components/collections/CollectionProductCard";

interface Filters {
  category: ProductCategorySlug | "all";
  materials: ProductMaterialSlug[];
  priceRangeId: string;
  search: string;
  sort: SortOption;
}

const INITIAL_FILTERS: Filters = {
  category: "all",
  materials: [],
  priceRangeId: "all",
  search: "",
  sort: "featured",
};

function applyFilters(products: Product[], filters: Filters): Product[] {
  const priceRange = PRICE_RANGES.find((range) => range.id === filters.priceRangeId);
  const query = filters.search.trim().toLowerCase();

  const filtered = products.filter((product) => {
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }
    if (filters.materials.length > 0 && !filters.materials.includes(product.material)) {
      return false;
    }
    if (priceRange) {
      if (product.price < priceRange.min) return false;
      if (priceRange.max !== null && product.price > priceRange.max) return false;
    }
    if (query) {
      const haystack = `${product.title} ${product.subtitle}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  switch (filters.sort) {
    case "price-asc":
      return [...filtered].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...filtered].sort((a, b) => b.price - a.price);
    case "newest":
      return [...filtered].sort(
        (a, b) => Number(b.isNewArrival ?? false) - Number(a.isNewArrival ?? false)
      );
    case "featured":
    default:
      return [...filtered].sort(
        (a, b) => Number(b.isBestSeller ?? false) - Number(a.isBestSeller ?? false)
      );
  }
}

export default function CollectionsPage() {
  const searchParams = useSearchParams();

  // ?category=rings on the URL (e.g. from the homepage category circles)
  // pre-selects that filter on first render. Anything missing or not a
  // real category slug just falls back to "All".
  const initialCategory = useMemo<ProductCategorySlug | "all">(() => {
    const requested = searchParams.get("category");
    const isValidCategory = CATEGORIES.some((c) => c.slug === requested);
    return isValidCategory ? (requested as ProductCategorySlug) : "all";
  }, [searchParams]);

  const [filters, setFilters] = useState<Filters>(() => ({
    ...INITIAL_FILTERS,
    category: initialCategory,
  }));

  const visibleProducts = useMemo(() => applyFilters(PRODUCTS, filters), [filters]);

  const handleMaterialToggle = (material: ProductMaterialSlug) => {
    setFilters((prev) => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter((m) => m !== material)
        : [...prev.materials, material],
    }));
  };

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <main className="min-h-screen bg-[#f5f2ec]">
      <CollectionsHeader />

      <CollectionsFilterBar
        filters={filters}
        onCategoryChange={(category) => setFilters((prev) => ({ ...prev, category }))}
        onMaterialToggle={handleMaterialToggle}
        onPriceRangeChange={(priceRangeId) =>
          setFilters((prev) => ({ ...prev, priceRangeId }))
        }
        onSearchChange={(search) => setFilters((prev) => ({ ...prev, search }))}
        onSortChange={(sort) => setFilters((prev) => ({ ...prev, sort }))}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-20">
        {visibleProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product) => (
                <CollectionProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <p className="font-serif text-2xl text-neutral-800">
              No pieces match your filters
            </p>
            <p className="max-w-sm text-sm text-neutral-500">
              Try widening your search or clearing a filter to see more of the
              collection.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 rounded-sm border border-neutral-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-700 transition-colors duration-200 hover:border-black hover:text-black"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}