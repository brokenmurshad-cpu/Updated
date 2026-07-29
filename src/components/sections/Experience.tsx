"use client";

import { useEffect, useRef } from "react";
import RevealText from "@/components/ui/RevealText";
import { experience, personal } from "@/data/content";
import { getGsap } from "@/lib/gsap";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    const { gsap } = getGsap();

    const context = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 25%",
            scrub: true,
          },
        },
      );

      gsap.utils
        .toArray<HTMLElement>("[data-experience-item]")
        .forEach((item, index) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, x: index % 2 === 0 ? -35 : 35 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-white/10 bg-[#090917] px-5 py-[clamp(7rem,13vw,13rem)] sm:px-8 lg:px-[3.2vw]"
    >
      <div className="mx-auto w-full max-w-[112rem]">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
              03 / Career &amp; Experience
            </p>
            <RevealText
              as="h2"
              text="A path shaped by craft and shipping"
              className="max-w-[86rem] break-words font-display text-[clamp(2.85rem,8.5vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.06em] text-white sm:leading-[0.82] sm:tracking-[-0.075em]"
            />
          </div>

          <div className="mx-auto flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border border-dashed border-accent/60 text-center sm:h-32 sm:w-32 lg:mx-0">
            <span className="font-display text-4xl font-extrabold text-white">
              {personal.yearsExperience}+
            </span>
            <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-accent">
              Years
            </span>
          </div>
        </div>

        <div className="relative mt-[clamp(5rem,10vw,10rem)]">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/40 shadow-[0_0_16px_rgba(255,255,255,0.14)] md:left-[33%]" />
          <div
            ref={lineRef}
            className="absolute bottom-0 left-[11px] top-0 w-[3px] origin-top bg-gradient-to-b from-white via-[#d6c1ff] to-[#854ce6]/55 shadow-[0_0_18px_rgba(255,255,255,0.6),0_0_50px_rgba(89,37,171,0.95),0_0_92px_rgba(56,19,111,0.68)] md:left-[calc(33%_-_1px)]"
          />

          <div className="space-y-16 md:space-y-24">
            {experience.map((item, index) => (
              <article
                key={item.period}
                data-experience-item
                className="relative grid gap-5 pl-10 md:grid-cols-[28%_1fr] md:gap-[10%] md:pl-0"
              >
                <span className="absolute left-[7px] top-2 h-2.5 w-2.5 rounded-full border-2 border-[#090917] bg-white shadow-[0_0_12px_rgba(255,255,255,0.95),0_0_28px_rgba(133,76,230,0.95)] md:left-[calc(33%_-_5px)]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c69eff]">
                    {item.period}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
                    {item.company}
                  </p>
                </div>
                <div>
                  <h3 className="break-words font-display text-[clamp(1.8rem,4vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:leading-[0.92] sm:tracking-[-0.06em]">
                    {item.role}
                  </h3>
                  <p className="mt-5 max-w-[44rem] text-sm leading-[1.8] text-white/50 md:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
