"use client";

import { motion } from "framer-motion";

export default function CollectionsHeader() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-14 pt-20 text-center sm:pt-24 lg:pt-28">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl"
      >
        The Heritage Collections
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 h-px w-16 bg-neutral-400"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-base leading-relaxed text-neutral-500 sm:text-lg"
      >
        Discover a timeless fusion of ancestral craftsmanship and contemporary
        elegance. Each piece in our collection tells a story of royalty,
        artistry, and eternal beauty.
      </motion.p>
    </div>
  );
}