"use client";

import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/content";

export default function RoleMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#090917] py-5 md:py-7"
      aria-label="Professional roles"
    >
      <Marquee speed={24} pauseOnHover={false}>
        {marqueeWords.map((word) => (
          <div
            key={word}
            className="flex shrink-0 items-center gap-[clamp(1.75rem,3.5vw,4.9rem)] px-4"
          >
            <span className="whitespace-nowrap font-sans text-[clamp(2.275rem,4.9vw,5.95rem)] font-extrabold tracking-[-0.055em] text-[#f2f3f4]">
              {word}
            </span>
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 animate-spin text-[clamp(2.38rem,4.48vw,5.075rem)] leading-none text-[#f2f3f4] [animation-duration:5s] motion-reduce:animate-none"
            >
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
