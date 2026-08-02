"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface LegalPageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  lastUpdated?: string;
}

export default function LegalPageHeader({
  eyebrow,
  title,
  description,
  lastUpdated,
}: LegalPageHeaderProps) {
  return (
    <div className="border-b border-white/10 bg-black px-6 pb-14 pt-32 sm:px-10 lg:pt-40">
      <div className="mx-auto max-w-4xl">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-white/45"
        >
          <Link href="/" className="transition-colors duration-200 hover:text-amber-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/70">{title}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {description}
          </motion.p>
        )}

        {lastUpdated && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xs uppercase tracking-widest text-white/35"
          >
            Last updated: {lastUpdated}
          </motion.p>
        )}
      </div>
    </div>
  );
}