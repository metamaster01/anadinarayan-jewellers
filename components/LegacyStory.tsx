"use client";

/**
 * LegacyStory
 * ------------------------------------------------------------------
 * Two stacked blocks in one dark section:
 *   1. A 4-up trust-badge grid (hallmark / certification / exchange /
 *      shipping guarantees).
 *   2. An editorial "Our Legacy" block: an overlapping two-photo
 *      collage on the left, copy + pull-quote + CTA on the right.
 *
 * Stack: Next.js · TypeScript · Tailwind CSS v4 · Framer Motion (reveal)
 *        · GSAP + ScrollTrigger (collage parallax)
 *
 * Required assets in /public:
 *   /public/legacy-artisan.png  -> close-up of a jeweler at work
 *   /public/legacy-showroom.png -> boutique/showroom interior
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Tag, BadgeCheck, Award, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TrustBadge {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TRUST_BADGES: TrustBadge[] = [
  {
    icon: Tag,
    title: "BIS Hallmarked",
    description: "Guaranteed purity with BIS hallmark certification on every piece.",
  },
  {
    icon: BadgeCheck,
    title: "IGI Certified",
    description: "Diamonds certified by world-renowned labs for quality assurance.",
  },
  {
    icon: Award,
    title: "Lifetime Exchange",
    description: "Transparent policies for lifetime exchange and buyback values.",
  },
  {
    icon: ShieldCheck,
    title: "Insured Shipping",
    description: "Your precious jewelry is fully insured until it reaches your doorstep.",
  },
];

const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const copyContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const copyItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LegacyStory() {
  const collageRef = useRef<HTMLDivElement>(null);
  const backImageRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // The two collage photos drift at slightly different speeds on scroll
  // for a light sense of depth.
  useEffect(() => {
    if (prefersReducedMotion || !collageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(backImageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(frontImageRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, collageRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="bg-black px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* ---------------- Trust badges ---------------- */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                variants={gridItemVariants}
                className="group rounded-sm border border-amber-400/20 bg-white/[0.02] px-6 py-8 text-center transition-colors duration-300 hover:border-amber-400/50 hover:bg-amber-400/[0.04]"
              >
                <Icon
                  className="mx-auto h-7 w-7 text-amber-400 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-serif text-lg text-white">{badge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------------- Legacy story ---------------- */}
        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          {/* Photo collage */}
          <motion.div
            ref={collageRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Mobile: simple side-by-side pair. Desktop: overlapping collage. */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/legacy-1.png"
                  alt="Master jeweler hand-finishing a piece"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/legacy-2.png"
                  alt="Anandi Narayan boutique showroom interior"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative hidden h-[460px] lg:block">
              <motion.div
                ref={backImageRef}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-0 h-[85%] w-[68%] overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/10"
              >
                <Image
                  src="/legacy-2.png"
                  alt="Anandi Narayan boutique showroom interior"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                ref={frontImageRef}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="absolute bottom-0 left-0 h-[58%] w-[52%] overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/10"
              >
                <Image
                  src="/legacy-1.png"
                  alt="Master jeweler hand-finishing a piece"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={copyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              variants={copyItemVariants}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
            >
              Our Legacy
            </motion.p>

            <motion.h2
              variants={copyItemVariants}
              className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
            >
              Crafting Memories for Generations
            </motion.h2>

            <motion.p
              variants={copyItemVariants}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
            >
              At Anandi Narayan, jewelry is more than an accessory; it is a
              legacy of love and a vessel for history. For over five decades,
              we have been the silent witness to thousands of weddings and
              celebrations, providing the sparkle that marks the most
              significant milestones of life.
            </motion.p>

            <motion.blockquote
              variants={copyItemVariants}
              className="mt-6 max-w-lg border-l-2 border-amber-400/50 pl-5 text-base italic leading-relaxed text-white/60 sm:text-lg"
            >
              &ldquo;Every piece we create tells a story of unparalleled
              craftsmanship and absolute devotion to the art of fine
              jewelry.&rdquo;
            </motion.blockquote>

            <motion.div variants={copyItemVariants} className="mt-9">
              <a
                href="/our-story"
                className="inline-block w-full rounded-sm border border-amber-400/70 px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-400/10 sm:w-auto"
              >
                Our Story
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}