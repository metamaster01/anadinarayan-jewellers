"use client";

import { motion } from "framer-motion";

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/10 py-10 first:pt-0 last:border-b-0"
    >
      <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/65 sm:text-base [&_a]:text-amber-400 [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-amber-300 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-amber-400">
        {children}
      </div>
    </motion.section>
  );
}