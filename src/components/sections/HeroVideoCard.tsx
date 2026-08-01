"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroVideoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 20 });
  const mediaX = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const mediaY = useTransform(springY, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [1.7, -1.7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.4, 2.4]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{ perspective: 1400 }}
      className="group relative aspect-[16/9.8] w-full overflow-hidden bg-[#171721]"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/profile.jpg"
        aria-label="Muhammad Husnain creative development reel"
        style={{ x: mediaX, y: mediaY, rotateX, rotateY }}
        className="h-[104%] w-[104%] -translate-x-[2%] -translate-y-[2%] object-cover saturate-[0.9] will-change-transform"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,23,0.35),transparent_42%,rgba(9,9,23,0.18)),linear-gradient(to_top,rgba(9,9,23,0.62),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-18deg] bg-white/10 blur-2xl transition-transform duration-1000 group-hover:translate-x-[360%]" />
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-[#090917]/65 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl sm:bottom-7 sm:left-7">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(10,143,135,0.95)]" />
        Design · Engineering · Motion
      </div>
    </motion.div>
  );
}
