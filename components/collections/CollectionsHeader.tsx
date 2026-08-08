// "use client";

// import { motion } from "framer-motion";

// export default function CollectionsHeader() {
//   return (
//     <div className="mx-auto max-w-3xl px-6 pb-14 pt-20 text-center sm:pt-24 lg:pt-28">
//       <motion.h1
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="font-serif text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl"
//       >
//         The Heritage Collections
//       </motion.h1>

//       <motion.div
//         initial={{ opacity: 0, scaleX: 0 }}
//         animate={{ opacity: 1, scaleX: 1 }}
//         transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//         className="mx-auto mt-6 h-px w-16 bg-neutral-400"
//       />

//       <motion.p
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//         className="mt-8 text-base leading-relaxed text-neutral-500 sm:text-lg"
//       >
//         Discover a timeless fusion of ancestral craftsmanship and contemporary
//         elegance. Each piece in our collection tells a story of royalty,
//         artistry, and eternal beauty.
//       </motion.p>
//     </div>
//   );
// }





"use client";

/**
 * CollectionsHeader
 * ------------------------------------------------------------------
 * Full-bleed image banner: a thin accent line at the very top, a
 * background photo with a dark scrim for legibility, and centered
 * eyebrow / heading / description text.
 *
 * Note: this is a dark banner sitting on top of the otherwise light
 * "#f5f2ec" collections page — the filter bar and product grid below
 * keep their light theme, only this header is dark.
 *
 * Required asset in /public:
 *   /public/collection-header.png -> banner background photo
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function CollectionsHeader() {
  return (
    <section className="relative isolate w-full overflow-hidden py-16" style={{ backgroundColor: "#621244" }}>
      {/* Thin accent line across the very top edge */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-rose-900 to-transparent" />

      {/* Background photo with a slow, subtle Ken Burns zoom-out on load */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/collection-header.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Scrim: darkest at the edges, a touch lighter center-top where the
          copy sits, so both the photo and the text stay readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/15 to-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 sm:text-sm"
        >
          Curated Masterpieces
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          The Heritage Collections
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
        >
          Discover a timeless fusion of ancestral craftsmanship and
          contemporary elegance. Each piece in our collection tells a story
          of royalty, artistry, and eternal beauty.
        </motion.p>
      </div>
    </section>
  );
}