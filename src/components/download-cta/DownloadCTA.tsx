"use client";

import { motion } from "framer-motion";

export function DownloadCTA() {
  return (
    <section className="relative py-24 bg-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-amber mb-6">
          Keep tails wagging
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of pet parents keeping their pets happy from anywhere
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
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

        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            App Store
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm-1-1h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm12 4h-3v5h-5v-5H5v5h3v-5H5v-5h3zm5-9h2v11h-2V8z" />
            </svg>
            Play Store
          </div>
        </div>
      </div>
    </section>
  );
}