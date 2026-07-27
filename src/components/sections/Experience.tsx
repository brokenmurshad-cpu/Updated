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
              className="max-w-[86rem] font-display text-[clamp(3.6rem,8.5vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] text-white"
            />
          </div>

          <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border border-dashed border-accent/60 text-center">
            <span className="font-display text-4xl font-extrabold text-white">
              {personal.yearsExperience}+
            </span>
            <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-accent">
              Years
            </span>
          </div>
        </div>

        <div className="relative mt-[clamp(5rem,10vw,10rem)] md:pl-[8vw]">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/10 md:left-[3vw]" />
          <div
            ref={lineRef}
            className="absolute bottom-0 left-[11px] top-0 w-[3px] origin-top bg-gradient-to-b from-accent via-accent/55 to-transparent shadow-[0_0_22px_rgba(133,76,230,0.55)] md:left-[calc(3vw-1px)]"
          />

          <div className="space-y-16 md:space-y-24">
            {experience.map((item, index) => (
              <article
                key={item.period}
                data-experience-item
                className="relative grid gap-5 pl-10 md:grid-cols-[0.42fr_1fr] md:gap-[6vw] md:pl-0"
              >
                <span className="absolute left-[7px] top-2 h-2.5 w-2.5 rounded-full border-2 border-[#090917] bg-accent shadow-[0_0_18px_rgba(133,76,230,0.9)] md:-left-[calc(5vw+5px)]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
                    {item.company}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[clamp(2rem,4vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-white">
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
