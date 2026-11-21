"use client";

import { useEffect, useState } from "react";

export function PawCursor() {
  const [customCursor, setCustomCursor] = useState(false);

  useEffect(() => {
    if (!("pointerEvents" in document.body.style)) return;

    const cursor = document.createElement("div");
    cursor.className = "paw-cursor";
    document.body.appendChild(cursor);

    const mouse = { x: 0, y: 0 };
    const element = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      element.x += (mouse.x - element.x) * 0.15;
      element.y += (mouse.y - element.y) * 0.15;
      cursor.style.left = element.x + "px";
      cursor.style.top = element.y + "px";
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}