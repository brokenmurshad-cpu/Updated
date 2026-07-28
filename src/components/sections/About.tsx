"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import TiltCard from "@/components/ui/TiltCard";
import { personal } from "@/data/content";

const capabilities = [
  ["01", "Full Stack Web Development"],
  ["02", "AI Integration & Agent Workflows"],
  ["03", "SaaS Product Development"],
  ["04", "Cloud Architecture & Performance"],
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-[#191924] px-5 py-[clamp(6rem,12vw,11rem)] sm:px-8 lg:px-[3.2vw]"
    >
      <div className="pointer-events-none absolute left-[12%] top-[28%] h-72 w-72 rounded-full bg-accent/10 blur-[130px]" />

      <div className="mx-auto w-full max-w-[112rem]">
        <div className="mb-10 flex flex-col items-center gap-3 text-center text-[10px] font-bold uppercase tracking-[0.26em] text-white/40 sm:flex-row sm:justify-between sm:text-left">
          <span className="text-accent">01 / About</span>
          <span>{personal.location}</span>
        </div>

        <RevealText
          as="h2"
          text={personal.aboutTitle}
          className="mx-auto max-w-[96rem] text-balance text-center font-display text-[clamp(3.3rem,8.3vw,10.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] text-[#f2f3f4] lg:mx-0 lg:text-left"
        />

        <div className="mt-[clamp(4rem,9vw,9rem)] grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[8vw]">
          <Reveal>
            <TiltCard maxTilt={3.5} className="mx-auto max-w-[32rem] lg:mx-0">
              <div className="group relative aspect-[8/9] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090917]">
                <Image
                  src="/images/profile.jpg"
                  alt={`${personal.fullName}, ${personal.role}`}
                  fill
                  sizes="(max-width: 1024px) 92vw, 34vw"
                  className="object-cover grayscale-[0.15] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-white">
                      {personal.fullName}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                      {personal.role}
                    </p>
                  </div>
                  <p className="font-display text-4xl font-extrabold text-accent">
                    {personal.yearsExperience}+
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="text-center lg:text-left">
            <Reveal>
              <p className="max-w-[48rem] font-display text-[clamp(1.4rem,2.5vw,3rem)] font-semibold leading-[1.16] tracking-[-0.035em] text-white">
                {personal.aboutIntro}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 max-w-[45rem] text-sm leading-[1.8] text-white/55 md:text-base">
                {personal.aboutBody}
              </p>
            </Reveal>

            <div className="mt-12 border-t border-white/10">
              {capabilities.map(([index, label], itemIndex) => (
                <Reveal key={label} delay={itemIndex * 0.04}>
                  <div className="group flex items-center justify-between gap-5 border-b border-white/10 py-5">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-accent">
                      {index}
                    </span>
                    <p className="ml-auto font-display text-right text-[clamp(1rem,1.7vw,1.55rem)] font-semibold text-white/72 transition-all duration-300 group-hover:-translate-x-2 group-hover:text-white">
                      {label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
