"use client";

/**
 * AppDownloadSection
 * ------------------------------------------------------------------
 * Left: heading, copy, Google Play / App Store badges, and a QR card.
 * Right: a single pre-composed image of the two overlapping phone
 * mockups (this is one image asset, not built from markup — swap it
 * out any time the app's screens change without touching this file).
 *
 * Stack: Next.js · TypeScript · Tailwind CSS v4 · Framer Motion (reveal)
 *        · GSAP + ScrollTrigger (image parallax)
 *
 * Required asset in /public:
 *   /public/app-phones.png -> the two-phone mockup composition
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Play, Grid3x3, QrCode } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

export default function AppDownloadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !imageRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -7,
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
      className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_top_right,_rgba(96,12,24,0.55),_rgba(0,0,0,0.95)_55%,_#000_100%)] px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="order-2 text-center lg:order-none lg:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
          >
            Experience Luxury at Your Fingertips
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0"
          >
            Download the Anadi Narayan App for exclusive access to new
            arrivals, virtual try-ons, and personalized shopping assistance
            from our experts.
          </motion.p>

          {/* Store badges */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.dsoft.anadinarayanjwlrsbhandara&pcampaignid=web_share"
              className="flex w-full items-center gap-3 rounded-sm border border-white/15 bg-white/[0.03] px-5 py-3 transition-colors duration-200 hover:border-amber-400/60 hover:bg-amber-400/[0.06] sm:w-auto"
            >
              <Play className="h-6 w-6 shrink-0 fill-white text-white" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider text-white/55">
                  Get it on
                </span>
                <span className="block text-sm font-semibold text-white">
                  Google Play
                </span>
              </span>
            </a>

            <a
              href="https://apps.apple.com/in/app/anadinarayan-jewellers/id6758596623"
              className="flex w-full items-center gap-3 rounded-sm border border-white/15 bg-white/[0.03] px-5 py-3 transition-colors duration-200 hover:border-amber-400/60 hover:bg-amber-400/[0.06] sm:w-auto"
            >
              <Grid3x3 className="h-6 w-6 shrink-0 text-white" strokeWidth={1.75} />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider text-white/55">
                  Download on the
                </span>
                <span className="block text-sm font-semibold text-white">
                  Apple Store
                </span>
              </span>
            </a>
          </motion.div>

          {/* QR card */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-6 flex w-full max-w-sm items-center gap-4 rounded-sm border border-white/15 bg-white/[0.03] p-4 lg:mx-0"
          >
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
              <Image
                src="/qr.png"
                alt="QR code to download the Anandi Narayan app"
                fill
                sizes="56px"
                className="object-contain p-1"
                onError={(e) => {
                  // Hide the broken image and let the fallback icon show
                  // through if /app-qr.png hasn't been added yet.
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <QrCode className="absolute h-8 w-8 text-black/70" strokeWidth={1.25} />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Scan to Download
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Exclusive Mobile App
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Phone mockup image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-none"
        >
          <div ref={imageRef} className="relative mx-auto max-w-sm lg:max-w-none">
            <Image
              src="/app-download.png"
              alt="AnadiNarayan app shown on two overlapping smartphones"
              width={760}
              height={640}
              priority
              className="h-auto w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}