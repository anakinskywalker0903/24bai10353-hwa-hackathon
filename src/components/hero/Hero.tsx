"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-cream overflow-hidden">
      <div className="relative w-64 h-48 rounded-2xl overflow-hidden mx-auto -bottom-6 left-1/2 -translate-x-1/2">
        <svg className="w-full h-full object-max" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L20.27 9.9l3.35 2.8L23 32l-11-2.14L12 11.55l-7.91 1.75L5 32l6.91-1.84L1.18 9.35L12 2Z" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold text-amber mb-4 leading-tight">
          Your pet misses you. We've got them.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Live camera, voice calls, treat drops & more — keep your pet happy from anywhere
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-amber text-white font-medium rounded-full text-sm transition-all duration-200"
            type="button"
          >
            Download Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 border-2 border-amber text-amber font-medium rounded-full text-sm transition-all duration-200"
            type="button"
          >
            Watch Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
}