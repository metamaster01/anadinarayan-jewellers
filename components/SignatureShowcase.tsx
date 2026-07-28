"use client";

/**
 * SignatureShowcase
 * ------------------------------------------------------------------
 * Editorial split section spotlighting a single hero piece: a framed
 * product photo on the left (with a subtle GSAP parallax float) and
 * eyebrow / heading / copy / feature checklist / CTA on the right.
 *
 * Stack: Next.js · TypeScript · Tailwind CSS v4 · Framer Motion (reveal)
 *        · GSAP + ScrollTrigger (image parallax)
 *
 * Required asset in /public:
 *   /public/signature-set.png -> the framed product photo
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { useEffect, useRef } from "react";
import { BadgeCheck } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  "Antique Finish 22K Solid Gold",
  "Ethically Sourced Burmese Rubies",
  "BIS Hallmarked Purity",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SignatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !imageRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_top_left,_rgba(96,12,24,0.55),_rgba(0,0,0,0.95)_55%,_#000_100%)] px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Product photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-none"
        >
          <div ref={imageRef} className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm ring-1 ring-white/10">
              <Image
                src="/showcase-image.png"
                alt="The AnadiNarayan Signature Set — heritage necklace on a display cushion"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Soft amber glow behind the frame for a jewel-case feel */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-amber-500/10 blur-3xl" />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="order-2 lg:order-none"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
          >
            Iconic Masterpiece
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
          >
            The AnadiNarayan Signature Set
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Our most celebrated creation, embodying the spirit of traditional
            Indian craftsmanship with a contemporary twist. Handcrafted over
            400 hours by master artisans.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-7 flex flex-col gap-3.5">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <BadgeCheck
                  className="h-5 w-5 shrink-0 text-amber-400"
                  strokeWidth={1.75}
                />
                <span className="text-sm text-white/85 sm:text-base">{feature}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#inquire"
              className="inline-block w-full rounded-sm bg-amber-400 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto"
            >
              Inquire for Price
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}