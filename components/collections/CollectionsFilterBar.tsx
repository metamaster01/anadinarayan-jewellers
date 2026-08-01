"use client";

import { Search, ArrowUpDown } from "lucide-react";
import {
  CATEGORIES,
  MATERIALS,
  PRICE_RANGES,
  type ProductCategorySlug,
  type ProductMaterialSlug,
} from "@/data/Product";

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export interface CollectionsFilters {
  category: ProductCategorySlug | "all";
  materials: ProductMaterialSlug[];
  priceRangeId: string;
  search: string;
  sort: SortOption;
}

interface CollectionsFilterBarProps {
  filters: CollectionsFilters;
  onCategoryChange: (category: ProductCategorySlug | "all") => void;
  onMaterialToggle: (material: ProductMaterialSlug) => void;
  onPriceRangeChange: (priceRangeId: string) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured Pieces" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

export default function CollectionsFilterBar({
  filters,
  onCategoryChange,
  onMaterialToggle,
  onPriceRangeChange,
  onSearchChange,
  onSortChange,
}: CollectionsFilterBarProps) {
  return (
    <div className="border-y border-neutral-200 bg-[#faf5ea]">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
        {/* Search — full width on its own row so it never feels cramped */}
        <div className="relative mb-6 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search the collection…"
            aria-label="Search products"
            className="w-full rounded-sm border border-neutral-300 bg-white py-2.5 pl-9 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-6">
          {/* Category pills */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600">
              Shop by Type
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onCategoryChange("all")}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  filters.category === "all"
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
                }`}
              >
                All
              </button>
              {CATEGORIES.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => onCategoryChange(category.slug)}
                  className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    filters.category === category.slug
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Material toggles */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600">
              Material
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {MATERIALS.map((material) => {
                const isActive = filters.materials.includes(material.slug);
                return (
                  <button
                    key={material.slug}
                    type="button"
                    onClick={() => onMaterialToggle(material.slug)}
                    aria-pressed={isActive}
                    className="flex items-center gap-2 text-xs font-medium text-neutral-700"
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-200 ${
                        isActive
                          ? "border-amber-500 bg-amber-500"
                          : "border-neutral-400 bg-transparent"
                      }`}
                    >
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    {material.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price range */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600">
              Price
            </p>
            <select
              value={filters.priceRangeId}
              onChange={(e) => onPriceRangeChange(e.target.value)}
              className="mt-3 rounded-sm border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 focus:border-amber-500 focus:outline-none"
            >
              {PRICE_RANGES.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="lg:ml-auto">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600">
              Sort By
            </p>
            <div className="mt-3 flex items-center gap-2">
              <select
                value={filters.sort}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="rounded-sm border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 focus:border-amber-500 focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ArrowUpDown className="h-4 w-4 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}