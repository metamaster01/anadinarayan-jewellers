"use client";

/**
 * VisitStoreSection
 * ------------------------------------------------------------------
 * Left: the store's real address, with a "Get Directions" link out
 * to Google Maps. Right: app-download-2.png (the two-phone mockup,
 * a single pre-composed image) plus store badges and a QR card.
 *
 * Required asset in /public:
 *   /public/app-download-2.png -> two-phone app mockup image
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import { MapPin, Play, Grid3x3, QrCode } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { APP_CONFIG } from "@/lib/app-redirect";

const STORE = {
  label: "Anandi Narayan — Bhandara",
  addressLines: ["Kamla House, 1/2, Main Rd, Santaji Nagar", "Bhandara, Maharashtra 441904"],
  hours: "Mon – Sat: 10:00 AM – 8:00 PM",
};

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Kamla House, 1/2, Main Rd, Santaji Nagar, Bhandara, Maharashtra 441904"
)}`;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function VisitStoreSection() {
  return (
    <section className="bg-[#f9f9f9] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Store address */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Visit Our Place
          </motion.h2>

          <motion.div variants={itemVariants} className="mt-8 flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose-800" strokeWidth={1.75} />
            <div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-rose-800 transition-colors duration-200 hover:text-rose-700"
              >
                {STORE.label}
              </a>
              {STORE.addressLines.map((line) => (
                <p key={line} className="mt-1 text-sm text-neutral-600">
                  {line}
                </p>
              ))}
              <p className="mt-1 text-sm text-neutral-500">{STORE.hours}</p>
            </div>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-t border-neutral-300 pt-6 text-xs font-semibold uppercase tracking-widest text-rose-800 transition-colors duration-200 hover:text-rose-700"
          >
            Get Directions →
          </motion.a>
        </motion.div>

        {/* App promo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="relative mx-auto max-w-sm">
            <Image
              src="/app-download-3.png"
              alt="Anandi Narayan app shown on two smartphones"
              width={640}
              height={520}
              className="h-auto w-full"
            />
          </div>

          <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
            Download our App
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
            Shop our collections, book virtual consultations, and track your
            orders with our exclusive mobile app.
          </p>

          {/* Store badges: one dark pill, split by a divider */}
          <div className="mx-auto mt-7 flex w-full max-w-xs overflow-hidden rounded-full bg-black">
            <a
              href="https://apps.apple.com"
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3 transition-colors duration-200 hover:bg-white/5"
            >
              <Grid3x3 className="h-4 w-4 shrink-0 text-white" strokeWidth={1.75} />
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wider text-white/55">
                  Download on the
                </span>
                <span className="block text-xs font-semibold text-white">
                  App Store
                </span>
              </span>
            </a>
            <div className="w-px bg-white/15" />
            <a
              href={APP_CONFIG.playStoreUrl}
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3 transition-colors duration-200 hover:bg-white/5"
            >
              <Play className="h-4 w-4 shrink-0 fill-white text-white" />
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wider text-white/55">
                  Get it on
                </span>
                <span className="block text-xs font-semibold text-white">
                  Google Play
                </span>
              </span>
            </a>
          </div>

          {/* QR card */}
          <div className="mx-auto mt-5 flex w-full max-w-xs items-center gap-3 rounded-sm border border-neutral-200 bg-white/60 p-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
              <Image
                src="/qr.png"
                alt="QR code to download the Anandi Narayan app"
                fill
                sizes="44px"
                className="object-contain p-1"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <QrCode className="absolute h-6 w-6 text-black/50" strokeWidth={1.25} />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                Scan to Download
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                Exclusive Mobile App
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}