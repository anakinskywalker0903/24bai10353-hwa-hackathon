"use client";

import { motion } from "framer-motion";
import { Users, Heart, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    avatar: "SR",
    name: "Sarah M.",
    pet: "Golden Retriever",
    quote: '"Happy While Away gave me peace of mind seeing my pup play with remote toys while I was at work. Best investment ever!"',
  },
  {
    id: 2,
    avatar: "MJ",
    name: "Marcus J.",
    pet: "Cat",
    quote: '"The two-way voice feature is amazing. My cat actually responds when I call him. He seems much calmer."',
  },
  {
    id: 3,
    avatar: "ER",
    name: "Emily R.",
    pet: "Labrador",
    quote: '"The treat dispenser worked perfectly for our pups separation anxiety. He settles down much faster now."',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber mb-3">
            Happy pet parents
          </h2>
          <p className="text-muted-foreground text-lg">
            See why pet parents love keeping their furry friends happy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-2xl group"
            >
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6 text-3xl">
                {t.avatar}
              </div>
              <p className="text-lg text-amber mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex justify-center gap-2">
                <Heart className="w-5 h-5 text-amber-600" />
                <Star className="w-5 h-5 text-amber-500" />
              </div>
              <div className="mt-4">
                <span className="font-medium text-amber">{t.name}</span>
                <span className="text-muted-foreground ml-2">{t.pet}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}