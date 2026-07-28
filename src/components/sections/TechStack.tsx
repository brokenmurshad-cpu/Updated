"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Reveal from "@/components/ui/Reveal";
import { stack } from "@/data/content";

const icons: Record<string, { icon: ElementType; color: string }> = {
  JavaScript: { icon: SiJavascript, color: "#ffe45c" },
  TypeScript: { icon: SiTypescript, color: "#54a9ff" },
  React: { icon: SiReact, color: "#69e8ff" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38e8ff" },
  GSAP: { icon: SiGreensock, color: "#b8f52d" },
  "Framer Motion": { icon: SiFramer, color: "#b28cff" },
  "Node.js": { icon: SiNodedotjs, color: "#7ce66d" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  MongoDB: { icon: SiMongodb, color: "#60df8d" },
  PostgreSQL: { icon: SiPostgresql, color: "#75a6ff" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  Git: { icon: SiGit, color: "#ff7656" },
  Docker: { icon: SiDocker, color: "#55b7ff" },
  Figma: { icon: SiFigma, color: "#ff7189" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
};

export default function TechStack() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden border-b border-[#b98cff]/20 bg-[#1d1930] px-5 py-[clamp(7rem,12vw,12rem)] sm:px-8 lg:px-[3.2vw]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9d63ff]/20 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[112rem]">
        <Reveal>
          <div className="mb-[clamp(4rem,8vw,8rem)]">
            <h2 className="flex items-center gap-3 font-display text-[clamp(2rem,3.2vw,3.4rem)] font-extrabold uppercase leading-none tracking-[-0.055em] text-white">
              <motion.span
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                className="inline-flex text-[0.92em] text-white/80"
              >
                ✦
              </motion.span>
              <span>My</span>
              <span className="text-[#a978ff]">Stack</span>
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-[#c69eff]/25">
          {stack.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.06}>
              <div className="grid gap-7 border-b border-[#c69eff]/20 py-8 md:grid-cols-[11rem_1fr] md:items-center md:py-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c69eff]">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  {group.items.map((item) => {
                    const iconData = icons[item];
                    const Icon = iconData?.icon;

                    return (
                      <motion.div
                        key={item}
                        whileHover={{ y: -5, scale: 1.045 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        className="group flex items-center gap-3 text-white/75 transition-colors hover:text-white"
                      >
                        {Icon ? (
                          <Icon
                            className="h-5 w-5 drop-shadow-[0_0_8px_currentColor] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_currentColor] md:h-6 md:w-6"
                            style={{ color: iconData.color }}
                          />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-[#c69eff] shadow-[0_0_12px_rgba(198,158,255,0.95)]" />
                        )}
                        <span className="text-sm font-semibold md:text-base">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
