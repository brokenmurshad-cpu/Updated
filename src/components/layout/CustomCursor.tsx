"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
    const outlineX = gsap.quickTo(outline, "x", {
      duration: 0.34,
      ease: "power3.out",
    });
    const outlineY = gsap.quickTo(outline, "y", {
      duration: 0.34,
      ease: "power3.out",
    });

    const handlePointerMove = (event: PointerEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      outlineX(event.clientX);
      outlineY(event.clientY);
      gsap.to([dot, outline], { autoAlpha: 1, duration: 0.2 });
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest(
        "a, button, input, textarea, [data-cursor='hover']",
      );
      if (!target) return;
      outline.classList.add("cursor-hover");
      gsap.to(dot, { scale: 0.55, duration: 0.25 });
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest(
        "a, button, input, textarea, [data-cursor='hover']",
      );
      if (!target) return;
      outline.classList.remove("cursor-hover");
      gsap.to(dot, { scale: 1, duration: 0.25 });
    };

    const handleLeave = () => {
      gsap.to([dot, outline], { autoAlpha: 0, duration: 0.2 });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={outlineRef} className="cursor-outline" aria-hidden />
    </>
  );
}
