"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import { services } from "@/data/content";

const serviceMedia = [
  "/images/services/web-development.webp",
  "/images/services/ai-engineering.webp",
  "/images/services/saas-product-building.webp",
  "/images/services/performance-optimization.webp",
];

const cardColors = ["#171721", "#14141f", "#11111b", "#0d0d18"];
const serviceMarks = ["✦", "✤", "✶", "✥"];

type ServiceCardStyle = CSSProperties & {
  "--service-card-color": string;
  "--service-stack-top": string;
};

type ServiceStackStyle = CSSProperties & {
  "--service-stack-tail": string;
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#090917]">
      <div className="editorial-grid flex min-h-[72svh] items-center border-b border-white/10 px-5 py-20 sm:px-8 md:min-h-[100svh] md:py-24 lg:px-[3.2vw]">
        <div className="mx-auto grid w-full max-w-[112rem] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
              02 / Services
            </p>
            <RevealText
              as="h2"
              text="What I do /"
              accentWords={["do"]}
              className="font-display text-[clamp(3.5rem,11.5vw,14rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.07em] text-[#f2f3f4] sm:leading-[0.72] sm:tracking-[-0.085em]"
            />
          </div>
          <p className="max-w-[35rem] text-sm leading-[1.8] text-white/55 md:text-base lg:pb-4">
            User-friendly interfaces do not happen by chance. They are built
            with intention, clear systems, and motion that helps people move
            through every journey effortlessly.
          </p>
        </div>
      </div>

      <div
        className="service-stack relative isolate"
        style={
          {
            "--service-stack-tail": "72svh",
          } as ServiceStackStyle
        }
      >
        {services.map((service, index) => (
          <article
            key={service.index}
            tabIndex={0}
            className="service-stack-card group/service relative overflow-hidden outline-none"
            style={
              {
                "--service-card-color": cardColors[index],
                "--service-stack-top": `${(index + 1) * 4.75}rem`,
                zIndex: index + 1,
              } as ServiceCardStyle
            }
          >
            <div
              data-service-surface
              className="service-stack-card__surface relative flex flex-col overflow-hidden"
            >
              <header className="service-stack-card__header grid shrink-0 grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 px-5 sm:px-8 lg:grid-cols-[0.31fr_0.58fr_auto] lg:gap-[3vw] lg:px-[3.2vw]">
                <p className="font-sans text-[clamp(1.35rem,3vw,3.5rem)] font-extrabold leading-none tracking-[-0.055em] text-white">
                  ( {service.index} )
                </p>
                <h3 className="min-w-0 break-words font-sans text-[clamp(1.5rem,3.35vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-white">
                  {service.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="inline-flex w-10 shrink-0 animate-spin items-center justify-center text-[clamp(1.5rem,2.7vw,3.35rem)] leading-none text-white/55 [animation-duration:5s] motion-reduce:animate-none sm:w-14"
                >
                  {serviceMarks[index]}
                </span>
              </header>

              <div className="relative z-10 flex min-h-0 flex-1 items-center px-5 py-12 sm:px-8 md:py-14 lg:px-[3.2vw] lg:py-[clamp(2.5rem,5vh,5rem)]">
                <div className="mx-auto grid w-full max-w-[112rem] gap-10 lg:grid-cols-[0.31fr_0.34fr_0.35fr] lg:items-center lg:gap-[3vw]">
                  <div className="hidden lg:block" aria-hidden="true" />

                  <div className="relative z-10">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                      Service {service.index}
                    </p>
                    <p className="max-w-[39rem] text-sm leading-[1.8] text-white/55 md:text-base">
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

                  <div className="relative z-10 hidden lg:block">
                    <div className="service-hover-preview group invisible relative aspect-[4/3] translate-y-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#090917] opacity-0 shadow-[0_28px_90px_rgba(0,0,0,0.38)] transition duration-500 ease-out group-hover/service:visible group-hover/service:translate-y-0 group-hover/service:opacity-100 group-focus-within/service:visible group-focus-within/service:translate-y-0 group-focus-within/service:opacity-100">
                      <Image
                        src={serviceMedia[index]}
                        alt={`${service.title} service preview`}
                        fill
                        sizes="(max-width: 1024px) 92vw, 34vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.045]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/55 via-transparent to-transparent" />
                      <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_rgba(10,143,135,0.42)]">
                        <ArrowDownRight className="h-5 w-5" />
                      </span>
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
