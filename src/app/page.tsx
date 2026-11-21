"use client";

import "./globals.css";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/problem/Problem";
import { Features } from "@/components/features/Features";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { DownloadCTA } from "@/components/download-cta/DownloadCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DownloadCTA />
    </main>
  );
}