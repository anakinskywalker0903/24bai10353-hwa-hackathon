"use client";

import { useEffect, useState } from "react";

export function ConfettiCanvas() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const count = 150;
    const colors = ["#F59E0B", "#FB7185", "#38BDF8", "#4ADE80", "#FFF8F0"];
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
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

    type Particle = {
      x: number;
      y: number;
      r: number;
      d: number;
      color: string;
    };
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * count + 10,
        color: colors[Math.random() * colors.length | 0],
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y += (p.d / 2) + Math.random() * 2;

        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(render);
    }

    render();

    setTimeout(() => {
      document.body.removeChild(canvas);
      window.removeEventListener("resize", resize);
      setActive(false);
    }, 3000);
  }, [active]);

  return null;
}