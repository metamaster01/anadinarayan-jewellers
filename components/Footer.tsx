"use client";

/**
 * Footer
 * ------------------------------------------------------------------
 * Brand + description + socials, three link/newsletter columns, and
 * a bottom bar with copyright + payment-method glyphs.
 *
 * Stack: Next.js · TypeScript · Tailwind CSS v4 · Framer Motion (reveal)
 *
 * Required asset in /public:
 *   /public/logo.png -> small square brand mark (same one used in Navbar)
 * ------------------------------------------------------------------
 */

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  Share2,
  Camera,
  PlayCircle,
  ArrowRight,
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";


const COLLECTIONS_LINKS = [
  { label: "The Heritage Series", href: "/collection" },
  { label: "Bridal Couture", href: "/collection" },
  { label: "Modern Diamond", href: "/collection" },
  { label: "Daily Luxury", href: "/collection" },
  { label: "Temple Gems", href: "/collection" },
];

const CUSTOMER_CARE_LINKS = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns", href: "/return" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: Share2, label: "Share", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: PlayCircle, label: "Video / Reels", href: "#" },
];

const PAYMENT_ICONS = [CreditCard, Wallet, Landmark];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    // TODO: wire up to your actual newsletter/email endpoint.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("done");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex items-center gap-3 border-b border-white/25 pb-2 transition-colors duration-200 focus-within:border-amber-400">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          aria-label="Email address"
          className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="shrink-0 text-amber-400 transition-transform duration-200 hover:translate-x-0.5"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {status === "done" && (
        <p className="mt-2 text-xs text-amber-400">
          Thanks — you&apos;re on the list.
        </p>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-16 sm:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12"
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AnadiNarayan"
              width={36}
              height={36}
              className="h-18 w-18 rounded-sm object-cover"
            />
            <div className="flex flex-col items-center text-center">
            <span className="font-serif text-xl font-semibold tracking-wide text-amber-400 sm:text-2xl">
              Anadi Narayan
            </span>
            <span className="text-xs uppercase tracking-widest text-white/75">
              Jewellers
            </span>
          </div>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            AnadiNarayan represents the pinnacle of luxury jewelry,
            combining heritage designs with modern aesthetics for the
            discerning individual.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-200 hover:border-amber-400/70 hover:text-amber-400"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Collections */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Collections
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {COLLECTIONS_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer care */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Customer Care
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {CUSTOMER_CARE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Join the Circle
          </h3>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Subscribe to receive updates on our latest collections and
            private events.
          </p>
          <NewsletterForm />
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="mx-auto mt-14 flex max-w-7xl flex-col-reverse items-center gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} <a href="https://metamaster.in" className="text-amber-400 hover:text-amber-300">Metamaster</a>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          {PAYMENT_ICONS.map((Icon, index) => (
            <Icon key={index} className="h-5 w-5 text-white/35" strokeWidth={1.5} />
          ))}
        </div>
      </div>
    </footer>
  );
}