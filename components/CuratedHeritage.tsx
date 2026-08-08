"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HERITAGE_ITEMS } from "@/data/Product";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CuratedHeritage() {
  return (
    <section className=" px-6 py-20 sm:px-10 lg:py-28" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-black sm:text-4xl">
            Curated Heritage
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-16 bg-amber-400" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {HERITAGE_ITEMS.map((item, index) => {
            const isTopRow = index < 3;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={isTopRow ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <Link
                  href={item.href}
                  className={`group relative block w-full overflow-hidden rounded-sm aspect-[4/5] ${
                    isTopRow ? "lg:aspect-[3/4]" : "lg:aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <span className="mt-2 block h-[1px] w-0 bg-amber-400 transition-all duration-500 ease-out group-hover:w-10" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}