"use client";

import type { CSSProperties } from "react";
import RevealText from "@/components/ui/RevealText";
import { services } from "@/data/content";

const cardColors = ["#171721", "#14141f", "#11111b", "#0d0d18"];
const serviceMarks = ["✦", "✤", "✶", "✥"];

type ServiceCardStyle = CSSProperties & {
  "--service-card-color": string;
  "--service-stack-top": string;
};

type ServiceStackStyle = CSSProperties & {
  "--service-stack-tail": string;
  "--service-heading-height": string;
  "--service-heading-gap": string;
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#090917]">
      <div
        className="service-pin-scene relative"
        style={
          {
            "--service-stack-tail": "clamp(5rem, 12svh, 8rem)",
            "--service-heading-height": "clamp(8.5rem, 18svh, 11rem)",
            "--service-heading-gap": "clamp(7rem, 15svh, 10rem)",
          } as ServiceStackStyle
        }
      >
        <div className="service-stack-intro z-40 min-h-[58svh] md:min-h-0">
          <div className="service-stack-intro-panel flex min-h-[58svh] items-center border-b border-white/10 px-5 py-12 sm:px-8 md:min-h-0 md:py-5 lg:px-[3.2vw]">
            <div className="editorial-grid mx-auto grid h-full w-full max-w-[112rem] items-center gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-accent md:mb-5">
                  02 / Services
                </p>
                <RevealText
                  as="h2"
                  text="What I do /"
                  accentWords={["do"]}
                  className="font-display text-[clamp(2.8rem,9.2vw,11.2rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.07em] text-[#f2f3f4] sm:leading-[0.72] sm:tracking-[-0.085em]"
                />
              </div>
              <p className="max-w-[35rem] text-xs leading-[1.7] text-white/55 md:text-sm lg:pb-2">
                User-friendly interfaces do not happen by chance. They are built
                with intention, clear systems, and motion that helps people move
                through every journey effortlessly.
              </p>
            </div>
          </div>
        </div>

        {services.map((service, index) => (
          <article
              key={service.index}
              tabIndex={0}
              className="service-stack-card group/service relative overflow-hidden outline-none"
              style={
                {
                  "--service-card-color": cardColors[index],
                  "--service-stack-top": `calc(4.75rem + var(--service-heading-height) + var(--service-heading-gap) + ${index * 4.25}rem)`,
                  zIndex: index + 10,
                } as ServiceCardStyle
              }
            >
            <div
              data-service-surface
              className="service-stack-card__surface relative flex flex-col overflow-hidden"
            >
              <header className="service-stack-card__header grid shrink-0 grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 px-5 sm:px-8 lg:grid-cols-[0.31fr_0.58fr_auto] lg:gap-[3vw] lg:px-[3.2vw]">
                <p className="font-sans text-[clamp(1.08rem,2.4vw,2.8rem)] font-extrabold leading-none tracking-[-0.055em] text-white">
                  ( {service.index} )
                </p>
                <h3 className="min-w-0 break-words font-sans text-[clamp(1.2rem,2.68vw,3.4rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-white">
                  {service.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="inline-flex w-10 shrink-0 animate-spin items-center justify-center text-[clamp(1.2rem,2.16vw,2.68rem)] leading-none text-white/55 [animation-duration:5s] motion-reduce:animate-none sm:w-14"
                >
                  {serviceMarks[index]}
                </span>
              </header>

              <div className="relative z-10 flex min-h-0 flex-1 items-center px-5 py-12 sm:px-8 md:py-14 lg:px-[3.2vw] lg:py-[clamp(2.5rem,5vh,5rem)]">
                <div className="mx-auto grid w-full max-w-[112rem] gap-10 lg:grid-cols-[0.31fr_0.69fr] lg:items-center lg:gap-[3vw]">
                  <div className="hidden lg:block" aria-hidden="true" />

                  <div className="relative z-10">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                      Service {service.index}
                    </p>
                    <p className="max-w-[52rem] text-sm leading-[1.8] text-white/55 md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="service-tag rounded-full border border-white/12 bg-white/[0.035] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/65"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div className="service-stack-hold" aria-hidden="true" />
      </div>
    </section>
  );
}
