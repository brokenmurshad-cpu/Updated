"use client";

import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/content";

export default function RoleMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#090917] py-7 md:py-10"
      aria-label="Professional roles"
    >
      <Marquee speed={32} pauseOnHover={false}>
        {marqueeWords.map((word) => (
          <div key={word} className="flex shrink-0 items-center gap-8 px-4">
            <span className="whitespace-nowrap font-display text-[clamp(3.25rem,7vw,8.5rem)] font-extrabold tracking-[-0.065em] text-[#f2f3f4]">
              {word}
            </span>
            <span className="inline-flex animate-spin text-[clamp(2.2rem,5vw,5.5rem)] text-accent [animation-duration:5s]">
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
