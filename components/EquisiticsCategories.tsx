"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CATEGORIES, type ProductCategorySlug } from "@/data/Product";
import { useRef } from "react";

// Map categories to image paths stored under public/categories.
const CATEGORY_IMAGES: Record<ProductCategorySlug, string> = {
  rings: "/categories/category-1.jpg",
  earrings: "/categories/category-2.jpg",
  necklaces: "/categories/category-3.jpg",
  bangles: "/categories/category-4.jpg",
  bracelets: "/categories/category-5.jpg",
  chains: "/categories/category-6.jpg",
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExquisiteCategories() {
    const sectionRef = useRef<HTMLElement>(null);
    
  return (
    <section ref={sectionRef} id="categories" className="px-6 py-20 sm:px-10 lg:py-24" style={{ backgroundColor: "#621244" }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Shop by Type
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              Exquisite Categories
            </h2>
          </motion.div>

          {/* Points at the collections page with no filter applied —
              individual circles below carry the ?category=… param. */}
          <Link
            href="/collection"
            className="hidden text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-200 hover:text-amber-300 sm:inline-block"
          >
            View All Categories →
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((category) => {
            const imageSrc = CATEGORY_IMAGES[category.slug];
            return (
              <motion.div
                key={category.slug}
                variants={itemVariants}
                className="flex shrink-0 flex-col items-center gap-3"
              >
                <Link
                  href={category.href}
                  className="group relative flex h-24 w-24 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:ring-amber-400/60 sm:h-28 sm:w-28"
                >
                  <Image
                    src={imageSrc}
                    alt={`${category.label} category`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
                  {category.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <Link
          href="/collection"
          className="mt-8 block text-center text-xs font-semibold uppercase tracking-widest text-amber-400 sm:hidden"
        >
          View All Categories →
        </Link>
      </div>
    </section>
  );
}