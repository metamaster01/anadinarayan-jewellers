// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import type { Product } from "@/data/Product";
// import { openProductInApp } from "@/lib/app-redirect";

// interface ProductCardProps {
//   product: Product;
//   className?: string;
// }

// export default function ProductCard({ product, className = "" }: ProductCardProps) {
//   return (
//     <motion.button
//       type="button"
//       onClick={() => openProductInApp(product.slug)}
//       whileHover={{ y: -6 }}
//       whileTap={{ scale: 0.98 }}
//       transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//       className={`group relative flex w-full flex-col overflow-hidden text-left ${className}`}
//       aria-label={`Open ${product.title} in the Anandi Narayan app`}
//     >
//       <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-900">
//         <Image
//           src={product.image}
//           alt={product.title}
//           fill
//           sizes="(min-width: 1024px) 280px, 65vw"
//           className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//         />

//         {(product.isNewArrival || product.isBestSeller) && (
//           <div className="absolute left-3 top-3 flex flex-col gap-1.5">
//             {product.isNewArrival && (
//               <span className="w-fit rounded-sm bg-rose-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
//                 New
//               </span>
//             )}
//             {product.isBestSeller && (
//               <span className="w-fit rounded-sm bg-amber-400 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
//                 Best Seller
//               </span>
//             )}
//           </div>
//         )}

//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       </div>

//       <div className="mt-4 px-0.5">
//         <h3 className="font-serif text-base text-white transition-colors duration-200 group-hover:text-amber-300 sm:text-lg">
//           {product.title}
//         </h3>
//         <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
//           {product.subtitle}
//         </p>
//       </div>
//     </motion.button>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Crown } from "lucide-react";
import type { Product } from "@/data/Product";
import { formatPrice } from "@/data/Product";
import { openProductInApp } from "@/lib/app-redirect";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => openProductInApp(product.slug)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex w-full flex-col overflow-hidden text-left ${className}`}
      aria-label={`Open ${product.title} in the Anandi Narayan app`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-neutral-900 ring-1 ring-white/10 transition-all duration-500 group-hover:ring-amber-400/50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 280px, 65vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />

        {/* Tags — small glass pills so they read as fine print, not stickers */}
        {(product.isNewArrival || product.isBestSeller) && (
          <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
            {product.isBestSeller && (
              <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-2.5 py-[5px] text-[9px] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                <Crown className="h-2.5 w-2.5" strokeWidth={2.25} />
                Best Seller
              </span>
            )}
            {product.isNewArrival && (
              <span className="flex items-center gap-1 rounded-full border border-amber-300/50 bg-black/55 px-2.5 py-[5px] text-[9px] font-semibold uppercase tracking-[0.12em] text-amber-200 backdrop-blur-sm">
                <Sparkles className="h-2.5 w-2.5" strokeWidth={2.25} />
                New
              </span>
            )}
          </div>
        )}

        {/* Soft vignette that deepens on hover for a more premium feel */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Hairline sheen sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </div>

      <div className="mt-4 px-0.5">
        <h3 className="font-serif text-base text-black transition-colors duration-300 group-hover:text-amber-300 sm:text-lg">
          {product.title}
        </h3>
        <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-black/45">
          {product.subtitle}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-amber-300">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.button>
  );
}