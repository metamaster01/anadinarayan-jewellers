"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { formatPrice, type Product } from "@/data/Product";
import { openProductInApp } from "@/lib/app-redirect";

interface CollectionProductCardProps {
  product: Product;
}

export default function CollectionProductCard({ product }: CollectionProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={() => openProductInApp(product.slug)}
        className="group flex w-full flex-col overflow-hidden rounded-sm bg-white text-left shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl"
        aria-label={`Open ${product.title} in the Anandi Narayan app`}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {(product.isBestSeller || product.isNewArrival) && (
            <span
              className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                product.isBestSeller
                  ? "bg-black text-white"
                  : "bg-amber-400 text-black"
              }`}
            >
              {product.isBestSeller ? "Bestseller" : "New Arrival"}
            </span>
          )}

          <span
            role="button"
            tabIndex={0}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted((prev) => !prev);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                setIsWishlisted((prev) => !prev);
              }
            }}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow-sm transition-colors duration-200 hover:text-amber-500"
          >
            <Heart
              className="h-4 w-4"
              strokeWidth={1.75}
              fill={isWishlisted ? "currentColor" : "none"}
              color={isWishlisted ? "#d97706" : "currentColor"}
            />
          </span>
        </div>

        <div className="px-5 py-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-600/80">
            {product.subtitle}
          </p>
          <h3 className="mt-2 font-serif text-lg text-neutral-900 sm:text-xl">
            {product.title}
          </h3>
          <p className="mt-2 text-base font-semibold text-amber-600">
            {formatPrice(product.price)}
          </p>
        </div>
      </button>
    </motion.div>
  );
}