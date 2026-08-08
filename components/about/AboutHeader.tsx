"use client";

/**
 * AboutHeader
 * ------------------------------------------------------------------
 * Full-bleed image banner for the About page — same construction as
 * the Collections page header (thin top accent line, Ken Burns zoom,
 * dark scrim, centered copy) with About-specific content.
 *
 * Required asset in /public:
 *   /public/about-header.png -> banner background photo
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <section className="relative isolate w-full overflow-hidden py-16" style={{ backgroundColor: "#621244" }}>
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-rose-900 to-transparent" />

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/about-header.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 sm:text-sm"
        >
          About Anandi Narayan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Crafting Memories for Generations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
        >
          Over five decades of heritage, silent witness to thousands of
          weddings. We don&apos;t just design jewelry; we forge the bonds
          that last forever.
        </motion.p>
      </div>
    </section>
  );
}