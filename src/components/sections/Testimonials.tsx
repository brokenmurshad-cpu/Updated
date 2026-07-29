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
        <h2 className="max-w-[82rem] break-words font-display text-[clamp(2.8rem,8.3vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.06em] text-white sm:leading-[0.82] sm:tracking-[-0.075em]">
          Kind words from people I&apos;ve built with /
        </h2>
      </div>

      <Marquee speed={58} className="mb-5">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name + "-" + item.title} item={item} />
        ))}
      </Marquee>
      <Marquee speed={62} reverse>
        {[...testimonials].reverse().map((item) => (
          <TestimonialCard
            key={"reverse-" + item.name + "-" + item.title}
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
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7baff]/70 bg-gradient-to-br from-[#c5a6ff] via-[#854ce6] to-[#4e258f] font-display text-lg font-extrabold text-white shadow-[0_0_20px_rgba(133,76,230,0.6)]">
          {item.initial}
        </span>
        <span
          aria-label="5 out of 5 stars"
          className="text-[#ffd54a] drop-shadow-[0_0_8px_rgba(255,213,74,0.45)]"
        >
          {"\u2605\u2605\u2605\u2605\u2605"}
        </span>
      </div>
      <p className="my-8 text-sm leading-[1.75] text-white/60 md:text-[15px]">
        &ldquo;{item.quote}&rdquo;
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
