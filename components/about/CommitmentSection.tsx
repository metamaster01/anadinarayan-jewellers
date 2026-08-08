"use client";

import { ShieldCheck, Sparkles, ScrollText, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Commitment {
  icon: LucideIcon;
  title: string;
  description: string;
}

const COMMITMENTS: Commitment[] = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Full disclosure of purity, weights, and sourcing. We believe trust is our most precious metal.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "While we honor heritage, we embrace contemporary aesthetics and modern wearable technology.",
  },
  {
    icon: ScrollText,
    title: "Preservation",
    description:
      "Protecting the rare arts of Kundan, Polki, and Meenakari for future generations of artisans.",
  },
];

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

export default function CommitmentSection() {
  return (
    <section className="bg-[#f7f6f4] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
            Integrity &amp; Value
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Our Commitment
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COMMITMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group rounded-sm bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg"
              >
                <Icon
                  className="h-7 w-7 text-amber-500 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}