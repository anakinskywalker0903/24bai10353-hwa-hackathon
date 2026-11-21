"use client";

import { useState, useEffect } from "react";

export function useConfetti() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const count = 150;
    const colors = ["#F59E0B", "#FB7185", "#38BDF8", "#4ADE80", "#FFF8F0"];

    const defaults = Array.from({ length: count }, () => ({
      origin: { x: Math.random(), y: Math.random() },
      colors: [colors[Math.random() * colors.length | 0]],
      scalar: 1,
      drift: Math.random() - 0.5,
      gravity: 1.5,
      ticks: 60,
    }));

    const canvas = document.createElement("canvas");
    canvas.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < defaults.length; i++) {
        const p = defaults[i];
        ctx.fillStyle = p.colors[0];
        ctx.beginPath();
        ctx.arc(
          p.ticks * p.scalar * (p.origin.x + 0.5),
          p.ticks * p.scalar * (p.origin.y + 0.5),
          p.scalar * 4,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    const particles = defaults.map((p, i) => ({
      ...p,
      ticks: 0,
    }));

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.ticks += p.gravity;
        ctx.fillStyle = p.colors[0];
        ctx.beginPath();
        ctx.arc(
          p.ticks * p.scalar * (p.origin.x + 0.5),
          p.ticks * p.scalar * (p.origin.y + 0.5),
          p.scalar * 4,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      requestAnimationFrame(update);
    }

    update();

    setTimeout(() => {
      document.body.removeChild(canvas);
      window.removeEventListener("resize", resize);
      setActive(false);
    }, 3000);
  }, [active]);

  return { setActive };
}