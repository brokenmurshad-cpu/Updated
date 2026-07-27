"use client";

import Marquee from "@/components/ui/Marquee";
import { testimonials, type Testimonial } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-white/10 bg-[#090917] py-[clamp(7rem,12vw,12rem)]"
    >
      <div className="mx-auto mb-[clamp(4rem,7vw,7rem)] w-full max-w-[112rem] px-5 sm:px-8 lg:px-[3.2vw]">
        <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
          06 / Testimonials
        </p>
        <h2 className="max-w-[82rem] font-display text-[clamp(3.6rem,8.3vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] text-white">
          Kind words from people I&apos;ve built with /
        </h2>
      </div>

      <Marquee speed={58} className="mb-5">
        {testimonials.map((item) => (
          <TestimonialCard key={`${item.name}-${item.title}`} item={item} />
        ))}
      </Marquee>
      <Marquee speed={62} reverse>
        {[...testimonials].reverse().map((item) => (
          <TestimonialCard
            key={`reverse-${item.name}-${item.title}`}
            item={item}
          />
        ))}
      </Marquee>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="mx-2.5 flex min-h-[17rem] w-[min(88vw,31rem)] shrink-0 flex-col justify-between rounded-[1.1rem] border border-white/10 bg-[#171721] p-6 shadow-[0_22px_55px_rgba(0,0,0,0.25)] sm:p-8">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-white">
          {item.initial}
        </span>
        <span className="text-accent">★★★★★</span>
      </div>
      <p className="my-8 text-sm leading-[1.75] text-white/60 md:text-[15px]">
        “{item.quote}”
      </p>
      <div>
        <p className="font-display text-lg font-semibold text-white">
          {item.name}
        </p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
          {item.title}
        </p>
      </div>
    </article>
  );
}
