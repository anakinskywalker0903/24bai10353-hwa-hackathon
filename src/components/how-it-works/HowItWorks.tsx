"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      title: "Set up",
      description: "Create your pet's profile and connect devices",
    },
    {
      title: "Go out",
      description: "Leave knowing your pet is safe and monitored",
    },
    {
      title: "Stay connected",
      description: "Stay in touch from anywhere in the world",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-amber mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Three simple steps to keep your pet happy wherever you are
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="rounded-3xl bg-white p-8 text-center transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-amber mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}