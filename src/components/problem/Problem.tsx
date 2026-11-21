"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Zap } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber mb-3">
            Every time you leave...
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why pet parents trust us to keep their furry friends happy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            className="group rounded-3xl bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-amber" />
            </div>
            <h3 className="text-3xl font-bold text-amber mb-2">68% of pets show anxiety signs</h3>
            <p className="text-muted-foreground">When left alone, pets can experience significant stress and anxiety</p>
          </motion.div>

          <motion.div
            className="group rounded-3xl bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-amber" />
            </div>
            <h3 className="text-3xl font-bold text-amber mb-2">4+ hours alone on average</h3>
            <p className="text-muted-foreground">The average dog or cat spends over 4 hours alone daily</p>
          </motion.div>

          <motion.div
            className="group rounded-3xl bg-white p-8 text-center transition-all hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-amber" />
            </div>
            <h3 className="text-3xl font-bold text-amber mb-2">1 in 3 pets destructive when bored</h3>
            <p className="text-muted-foreground">Boredom leads to destructive behavior in canine and feline companions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}