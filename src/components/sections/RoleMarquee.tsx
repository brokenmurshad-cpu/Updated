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
          <div
            key={word}
            className="flex shrink-0 items-center gap-[clamp(2.5rem,5vw,7rem)] px-5"
          >
            <span className="whitespace-nowrap font-sans text-[clamp(3.25rem,7vw,8.5rem)] font-extrabold tracking-[-0.055em] text-[#f2f3f4]">
              {word}
            </span>
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 animate-spin text-[clamp(3.4rem,6.4vw,7.25rem)] leading-none text-[#f2f3f4] [animation-duration:5s] motion-reduce:animate-none"
            >
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
