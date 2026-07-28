// "use client";

// import Link from "next/link";
// import { motion, type Variants } from "framer-motion";
// import { PRODUCTS } from "@/data/Product";
// import ProductCard from "@/components/ProductCard";

// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: 24 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function NewArrivals() {
//   const newArrivals = PRODUCTS.filter((product) => product.isNewArrival);

//   return (
//     <section className="bg-black py-20 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6 sm:px-10">
//         <div className="flex items-end justify-between">
//           <motion.h2
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.8 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="font-serif text-3xl font-bold text-white sm:text-4xl"
//           >
//             New Arrivals
//           </motion.h2>

//           <Link
//             href="/new-arrivals"
//             className="hidden text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-200 hover:text-amber-300 sm:inline-block"
//           >
//             View All →
//           </Link>
//         </div>
//       </div>

//       {/* Full-bleed horizontal rail: padding-left matches the container so
//           the first card aligns with the heading, and the row bleeds off
//           the right edge on mobile to hint at more content (as in the ref). */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.15 }}
//         className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pl-6 pr-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:pl-10 sm:pr-10 [&::-webkit-scrollbar]:hidden"
//       >
//         {newArrivals.map((product) => (
//           <motion.div
//             key={product.id}
//             variants={itemVariants}
//             className="w-[62vw] shrink-0 snap-start sm:w-[40vw] lg:w-[280px]"
//           >
//             <ProductCard product={product} />
//           </motion.div>
//         ))}
//       </motion.div>

//       <div className="mt-8 px-6 text-center sm:hidden">
//         <Link
//           href="/new-arrivals"
//           className="text-xs font-semibold uppercase tracking-widest text-amber-400"
//         >
//           View All →
//         </Link>
//       </div>
//     </section>
//   );
// }





"use client";

/**
 * NewArrivals
 * ------------------------------------------------------------------
 * Horizontal product rail contained within the same page margins as
 * every other section (max-w-7xl, px-6/px-10). As the section scrolls
 * into and through view, GSAP drives the rail's native `scrollLeft`
 * so the row glides open on its own — users can still grab and scroll
 * it manually at any time.
 * ------------------------------------------------------------------
 */

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PRODUCTS } from "@/data/Product";
import ProductCard from "@/components/ProductCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NewArrivals() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const newArrivals = PRODUCTS.filter((product) => product.isNewArrival);

  // Scroll-driven auto-advance: as the section travels through the
  // viewport, gently sweep the rail from its start to its end. Purely
  // additive — dragging/swiping the rail still works normally.
  useEffect(() => {
    const rail = railRef.current;
    const section = sectionRef.current;
    if (prefersReducedMotion || !rail || !section) return;

    const ctx = gsap.context(() => {
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      if (maxScroll <= 0) return;

      gsap.fromTo(
        rail,
        { scrollLeft: 0 },
        {
          scrollLeft: maxScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 0.8,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Fresh From the Atelier
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              New Arrivals
            </h2>
          </motion.div>

          <Link
            href="/new-arrivals"
            className="hidden text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-200 hover:text-amber-300 sm:inline-block"
          >
            View All →
          </Link>
        </div>

        <motion.div
          ref={railRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="w-[68vw] shrink-0 snap-start sm:w-[38vw] lg:w-[290px]"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/new-arrivals"
            className="text-xs font-semibold uppercase tracking-widest text-amber-400"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}