"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.45 + 0.35,
      s: Math.random() * 0.24 + 0.08,
      a: Math.random() * 0.44 + 0.12,
      drift: (Math.random() - 0.5) * 0.08,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y += p.s / Math.max(height, 1);
        p.x += p.drift / Math.max(width, 1);
        p.twinkle += 0.025;

        if (p.y > 1.02) {
          p.y = -0.02;
          p.x = Math.random();
        }

        if (p.x < -0.02) p.x = 1.02;
        if (p.x > 1.02) p.x = -0.02;

        const alpha = p.a * (0.72 + Math.sin(p.twinkle) * 0.28);
        const x = p.x * width;
        const y = p.y * height;

        ctx.save();
        ctx.fillStyle = `rgba(238, 241, 246, ${alpha})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.36)";
        ctx.shadowBlur = p.r * 3.5;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.r > 1.25) {
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(x - p.r * 2.4, y);
          ctx.lineTo(x + p.r * 2.4, y);
          ctx.moveTo(x, y - p.r * 2.4);
          ctx.lineTo(x, y + p.r * 2.4);
          ctx.stroke();
        }
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-60"
    />
  );
}
