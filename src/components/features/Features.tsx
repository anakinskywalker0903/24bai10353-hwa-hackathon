"use client";

import { motion } from "framer-motion";
import { Camera, Phone, Gift, Mouse, Music, BarChart3, Shield, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Live Pet Cam",
      description: "Watch them in HD, anytime",
      icon: Camera,
    },
    {
      id: 2,
      title: "Two-Way Voice",
      description: "They hear you. You hear them.",
      icon: Phone,
    },
    {
      id: 3,
      title: "Treat Dispenser",
      description: "Reward from anywhere",
      icon: Gift,
    },
    {
      id: 4,
      title: "Remote Toys",
      description: "Play together, miles apart",
      icon: Mouse,
    },
    {
      id: 5,
      title: "Mood Music",
      description: "Calming sounds on demand",
      icon: Music,
    },
    {
      id: 6,
      title: "Activity Dashboard",
      description: "Sleep, play, eat — tracked",
      icon: BarChart3,
    },
    {
      id: 7,
      title: "Emergency Alerts",
      description: "Instant SOS to you + vet",
      icon: Shield,
    },
    {
      id: 8,
      title: "Pet Sitter Network",
      description: "Trusted humans nearby",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber mb-3">
            Keep tails wagging
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything your pet needs to stay happy, healthy, and entertained
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-3xl bg-white p-6 text-left transition-all hover:shadow-xl hover:scale-105"
            >
              <div
                className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-5"
              >
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-medium text-amber mb-2">
                {feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}