"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Microsoft", letters: "MS" },
  { name: "Steam", letters: "ST" },
  { name: "Epic Games", letters: "EG" },
  { name: "EA", letters: "EA" },
  { name: "Ubisoft", letters: "UB" },
  { name: "Adobe", letters: "Ad" },
  { name: "Kaspersky", letters: "Ka" },
  { name: "Norton", letters: "Nr" },
  { name: "McAfee", letters: "Mc" },
  { name: "Autodesk", letters: "Au" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by digital merchants worldwide
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-lg bg-muted/30 border border-border/50"
              >
                <div className="w-8 h-8 rounded-md bg-foreground/10 flex items-center justify-center">
                  <span className="text-xs font-black text-foreground/60 tracking-tight">{brand.letters}</span>
                </div>
                <span className="text-sm font-semibold text-foreground/50">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
