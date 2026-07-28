// "use client";

// /**
//  * HeroSection
//  * ------------------------------------------------------------------
//  * Full-bleed hero with an autoplaying muted background video, a
//  * poster-image + <Image> fallback for browsers/devices that block
//  * or fail to load the video, left-aligned copy + CTAs, and a
//  * right-aligned product/phone image.
//  *
//  * Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4
//  *        Framer Motion (entrance choreography) · GSAP + ScrollTrigger
//  *        (parallax on the hero image)
//  *
//  * Required assets in /public:
//  *   /public/bg-video.mp4     -> looping background video
//  *   /public/bg-image.png     -> poster + no-JS/video-failure fallback
//  *   /public/hero-image.png   -> right-side product image (phone mockup)
//  * ------------------------------------------------------------------
//  */

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const imageWrapRef = useRef<HTMLDivElement>(null);

//   const [videoFailed, setVideoFailed] = useState(false);
//   const prefersReducedMotion = useReducedMotion();

//   // Pause/skip the video entirely for users who asked for reduced motion,
//   // and guard against autoplay being blocked by the browser.
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video || prefersReducedMotion) return;

//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {
//         // Autoplay was blocked (e.g. data-saver mode) -> fall back to poster.
//         setVideoFailed(true);
//       });
//     }
//   }, [prefersReducedMotion]);

//   // Subtle scroll-linked parallax on the right-hand image. Skipped
//   // completely when the user prefers reduced motion.
//   useEffect(() => {
//     if (prefersReducedMotion || !imageWrapRef.current || !sectionRef.current) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       gsap.to(imageWrapRef.current, {
//         yPercent: 8,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 0.6,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [prefersReducedMotion]);

//   const showVideo = !prefersReducedMotion && !videoFailed;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-black"
//     >
//       {/* ---------------- Background layer ---------------- */}
//       <div className="absolute inset-0 -z-10">
//         {/* Static poster/fallback image. Always mounted (as the poster
//             frame) so there is zero flash-of-empty-background before the
//             video can play, and it becomes the permanent background if
//             the video fails or reduced motion is requested. */}
//         <Image
//           src="/bg-image.jpg"
//           alt=""
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover"
//         />

//         {showVideo && (
//           <video
//             ref={videoRef}
//             className="absolute inset-0 h-full w-full object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             poster="/bg-image.jpg"
//             onError={() => setVideoFailed(true)}
//             aria-hidden="true"
//           >
//             <source src="/bg-video.mp4" type="video/mp4" />
//           </video>
//         )}

//         {/* Readability scrim: darkest on the left where copy sits */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
//       </div>

//       {/* ---------------- Foreground content ---------------- */}
//       <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6 pt-28 pb-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-24">
//         {/* Copy */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-xl text-center lg:text-left"
//         >
//           <motion.p
//             variants={itemVariants}
//             className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
//           >
//             The Heritage Collection
//           </motion.p>

//           <motion.h1
//             variants={itemVariants}
//             className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
//           >
//             Timeless Jewellery for Every Celebration
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="mx-auto mt-6 max-w-md text-base text-white/70 sm:text-lg lg:mx-0"
//           >
//             Crafting legacy through generations of artistry. Discover pieces
//             that define royalty and celebrate the extraordinary moments of
//             life.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
//           >
//             <a
//               href="#collections"
//               className="w-full rounded-sm bg-amber-400 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto"
//             >
//               Explore Collections
//             </a>
//             <a
//               href="#download"
//               className="w-full rounded-sm border border-amber-400/70 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-amber-400 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-400/10 sm:w-auto"
//             >
//               Download App
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Product image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.94 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//           className="w-full max-w-[280px] shrink-0 sm:max-w-sm lg:max-w-md"
//         >
//           <div ref={imageWrapRef} className="relative">
//             <Image
//               src="/hero-image.png"
//               alt="Anandi Narayan app preview showing the Royal Collection on a smartphone"
//               width={640}
//               height={860}
//               priority
//               className="h-auto w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






"use client";

/**
 * HeroSection
 * ------------------------------------------------------------------
 * Full-bleed hero with an autoplaying muted background video, a
 * poster-image + <Image> fallback for browsers/devices that block
 * or fail to load the video, left-aligned copy + CTAs, and a
 * right-aligned product/phone image.
 *
 * Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4
 *        Framer Motion (entrance choreography) · GSAP + ScrollTrigger
 *        (parallax on the hero image)
 *
 * Required assets in /public:
 *   /public/bg-video.mp4     -> looping background video
 *   /public/bg-image.png     -> poster + no-JS/video-failure fallback
 *   /public/hero-image.png   -> right-side product image (phone mockup)
 *
 * Mobile (<lg): collapses to a short landscape/"wallpaper" banner —
 * heading, description, and the phone image are hidden so the video
 * itself is the focus, with just the two CTAs sitting over it. The
 * full layout (copy + image, full-height section) returns at `lg`.
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const [videoFailed, setVideoFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Pause/skip the video entirely for users who asked for reduced motion,
  // and guard against autoplay being blocked by the browser.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was blocked (e.g. data-saver mode) -> fall back to poster.
        setVideoFailed(true);
      });
    }
  }, [prefersReducedMotion]);

  // Subtle scroll-linked parallax on the right-hand image. Skipped
  // completely when the user prefers reduced motion.
  useEffect(() => {
    if (prefersReducedMotion || !imageWrapRef.current || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(imageWrapRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const showVideo = !prefersReducedMotion && !videoFailed;

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-[62vw] max-h-[440px] min-h-[260px] w-full items-end overflow-hidden bg-black lg:h-auto lg:max-h-none lg:min-h-screen lg:items-center"
    >
      {/* ---------------- Background layer ---------------- */}
      <div className="absolute inset-0 -z-10">
        {/* Static poster/fallback image. Always mounted (as the poster
            frame) so there is zero flash-of-empty-background before the
            video can play, and it becomes the permanent background if
            the video fails or reduced motion is requested. */}
        <Image
          src="/bg-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {showVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/bg-image.jpg"
            onError={() => setVideoFailed(true)}
            aria-hidden="true"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
        )}

        {/* Readability scrim: darkest on the left where copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* ---------------- Foreground content ---------------- */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 pb-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-16 lg:pt-24">
        {/* Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl text-center lg:text-left"
        >
          {/* Eyebrow, heading, and description are hidden on mobile so the
              hero reads as a clean landscape banner there; they return at
              the lg breakpoint alongside the full layout. */}
          <motion.p
            variants={itemVariants}
            className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 lg:block"
          >
            The Heritage Collection
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 hidden font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:block lg:text-6xl"
          >
            Timeless Jewellery for Every Celebration
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 hidden max-w-md text-base text-white/70 sm:text-lg lg:mx-0 lg:block"
          >
            Crafting legacy through generations of artistry. Discover pieces
            that define royalty and celebrate the extraordinary moments of
            life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-9 lg:justify-start"
          >
            <a
              href="#collections"
              className="w-full rounded-sm bg-amber-400 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto sm:text-sm lg:px-8 lg:py-3.5"
            >
              Explore Collections
            </a>
            <a
              href="#download"
              className="w-full rounded-sm border border-amber-400/70 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-amber-400 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-400/10 sm:w-auto sm:text-sm lg:px-8 lg:py-3.5"
            >
              Download App
            </a>
          </motion.div>
        </motion.div>

        {/* Product image — hidden on mobile so the banner stays a clean
            landscape strip; reappears at lg alongside the full copy block. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hidden w-full max-w-[280px] shrink-0 sm:max-w-sm lg:block lg:max-w-md"
        >
          <div ref={imageWrapRef} className="relative">
            <Image
              src="/hero-image.png"
              alt="AnadiNarayan app preview showing the Royal Collection on a smartphone"
              width={640}
              height={860}
              priority
              className="h-auto w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}