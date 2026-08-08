"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function PhilosophyQuote() {
  return (
    <section className="bg-[#5a0f30] px-6 py-20 sm:px-10 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <Quote
          className="mx-auto h-8 w-8 rotate-180 text-amber-400"
          strokeWidth={0}
          fill="currentColor"
        />

        <p className="mt-6 font-serif text-2xl italic leading-snug text-white sm:text-3xl lg:text-4xl">
          &ldquo;Every piece we create tells a story of unparalleled
          craftsmanship, weaving together the threads of tradition and the
          sparkle of tomorrow.&rdquo;
        </p>

        <div className="mx-auto mt-8 h-px w-12 bg-amber-400/60" />

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          Anadi Narayan Philosophy
        </p>
      </motion.div>
    </section>
  );
}