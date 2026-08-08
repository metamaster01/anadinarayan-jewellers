"use client";

/**
 * CraftsmanshipSection
 * ------------------------------------------------------------------
 * Light-theme editorial split: eyebrow/heading/copy + two feature
 * lines on the left, an artisan photo with an overlapping pull-quote
 * card on the right.
 *
 * Required asset in /public:
 *   /public/about-artisan.png -> close-up of a jeweler at work
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { Gem, PenTool, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Gem,
    title: "Authentic Sourcing",
    description:
      "Ethically sourced gemstones and pure 22K gold, certified for generations.",
  },
  {
    icon: PenTool,
    title: "Hand-Drawn Sketches",
    description:
      "Every design begins as a dream on paper before it ever touches a jeweler's bench.",
  },
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

export default function CraftsmanshipSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500"
          >
            The Soul of Our Atelier
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-sans text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl"
          >
            The Art of Craftsmanship
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500"
          >
            In our sanctum of creation, every diamond is hand-picked and
            every metal is forged with intention. Our master artisans, many
            of whom are third-generation craftsmen, bring a level of detail
            that modern machines can never replicate.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-9 flex flex-col gap-7">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">{feature.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Photo + overlapping quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pb-10 pl-6 sm:max-w-lg lg:mx-0 lg:max-w-none lg:pb-16 lg:pl-10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src="/legacy-1.png"
              alt="A master jeweler hand-finishing a piece at the bench"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-2 left-0 w-[75%] max-w-xs rounded-sm bg-[#f7f1e6] p-6 shadow-2xl sm:w-[65%] lg:-bottom-4 lg:left-0 lg:w-[60%] lg:p-7"
          >
            <p className="font-serif text-lg italic leading-snug text-neutral-800 sm:text-xl">
              &ldquo;Hands that breathe life into gold.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-amber-600">
              Chief Rajiv Sharma
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}