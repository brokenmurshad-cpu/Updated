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
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  GSAP: { icon: SiGreensock, color: "#88ce02" },
  "Framer Motion": { icon: SiFramer, color: "#7b61ff" },
  "Node.js": { icon: SiNodedotjs, color: "#53a344" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  Git: { icon: SiGit, color: "#f05032" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Figma: { icon: SiFigma, color: "#f24e1e" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
};

export default function TechStack() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden border-b border-white/10 bg-[#191924] px-5 py-[clamp(7rem,12vw,12rem)] sm:px-8 lg:px-[3.2vw]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[112rem]">
        <Reveal>
          <div className="mb-[clamp(4rem,8vw,8rem)]">
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
              05 / Technology
            </p>
            <h2 className="max-w-[92rem] font-display text-[clamp(3.5rem,8vw,9.8rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] text-white">
              Programmer, developer, interface craftsman /
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {stack.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.06}>
              <div className="grid gap-7 border-b border-white/10 py-8 md:grid-cols-[11rem_1fr] md:items-center md:py-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  {group.items.map((item) => {
                    const iconData = icons[item];
                    const Icon = iconData?.icon;

                    return (
                      <motion.div
                        key={item}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        className="group flex items-center gap-3 text-white/52 transition-colors hover:text-white"
                      >
                        {Icon ? (
                          <Icon
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 md:h-6 md:w-6"
                            style={{ color: iconData.color }}
                          />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-accent" />
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
