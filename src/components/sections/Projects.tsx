"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TechStack from "@/components/sections/TechStack";
import { getGsap } from "@/lib/gsap";
import { projectList, selectedProjects } from "@/data/project-showcase";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { gsap, ScrollTrigger } = getGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (!reduceMotion) {
        gsap.utils
          .toArray<HTMLElement>("[data-feature-project]")
          .forEach((card) => {
            const media = card.querySelector("[data-feature-media]");
            const content = card.querySelector("[data-feature-content]");

            gsap.fromTo(
              media,
              { scale: 0.91, y: 65 },
              {
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  end: "top 28%",
                  scrub: 0.8,
                },
              },
            );
            gsap.fromTo(
              content,
              { y: 55, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 72%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
      }

      if (window.matchMedia("(min-width: 1024px)").matches) {
        gsap.utils
          .toArray<HTMLElement>("[data-feature-card]")
          .forEach((card, index) => {
            ScrollTrigger.create({
              trigger: card,
              start: "top center",
              end: "bottom center",
              onEnter: () => setActiveFeaturedIndex(index),
              onEnterBack: () => setActiveFeaturedIndex(index),
            });
          });
      }

    }, section);

    return () => context.revert();
  }, []);

  const currentPreview =
    activeProject === null ? null : projectList[activeProject];
  const activeFeaturedProject =
    selectedProjects[activeFeaturedIndex] ?? selectedProjects[0];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#191924] text-white"
    >
      <div className="editorial-grid flex min-h-[100svh] items-center border-b border-white/10 px-5 py-24 sm:px-8 lg:px-[3.2vw]">
        <div className="mx-auto flex w-full max-w-[112rem] flex-col items-center text-center">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            04 / Selected work
          </p>
          <h2 className="font-display text-[clamp(4rem,10vw,12rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.085em]">
            Selected <span className="text-accent">Projects</span> /
          </h2>
          <p className="mt-7 font-display text-[clamp(2rem,4vw,5rem)] font-extrabold tracking-[-0.06em] text-white/40">
            ( {selectedProjects.length} )
          </p>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[112rem] lg:grid-cols-[0.31fr_1fr]">
          <aside className="sticky top-0 hidden h-[100svh] self-start border-r border-white/10 lg:flex lg:items-center lg:justify-center">
            {activeFeaturedProject ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeaturedProject.id}
                  initial={{ opacity: 0, y: 26, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -26, filter: "blur(5px)" }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center text-center"
                >
                  <span className="font-display text-[clamp(7rem,12vw,14rem)] font-extrabold leading-[0.68] tracking-[-0.1em] text-white">
                    {activeFeaturedProject.index}.
                  </span>
                </motion.div>
              </AnimatePresence>
            ) : null}
          </aside>

          <div>
        {selectedProjects.map((project, index) => (
          <article
            key={project.id}
            data-feature-project
            data-feature-card
            className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 px-5 py-24 last:border-b-0 sm:px-8 lg:px-[clamp(2rem,4.7vw,6rem)]"
          >
            <div className="w-full">
              <div className="relative z-10 mb-9 lg:hidden">
                <span className="font-display text-[clamp(5rem,12vw,14rem)] font-extrabold leading-[0.68] tracking-[-0.1em] text-white">
                  {project.index}.
                </span>
              </div>

              <div className="relative">
                <Link
                  href={"/projects/" + project.id}
                  data-feature-media
                  aria-label={"Open " + project.title + " case study"}
                  className="group relative block aspect-[16/9.4] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090917] shadow-[0_35px_110px_rgba(0,0,0,0.42)]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 92vw, 72vw"
                    className="object-cover transition duration-1000 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/82 via-[#090917]/5 to-transparent" />
                  <p className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#090917]/65 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/65 backdrop-blur-lg sm:left-7 sm:top-7">
                    Featured case {String(index + 1).padStart(2, "0")}
                  </p>
                </Link>

                <div
                  data-feature-content
                  className="relative z-10 mt-7 w-full px-1 pb-3 sm:mt-9"
                >
                  <p className="max-w-[70rem] text-[clamp(0.95rem,1.45vw,1.7rem)] leading-[1.25] text-white/58">
                    {project.technologyLine}
                  </p>
                  <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                    <h3 className="max-w-[58rem] font-display text-[clamp(2rem,4vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.06em]">
                      <Link
                        href={"/projects/" + project.id}
                        className="transition-colors duration-300 hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <div className="flex flex-wrap gap-2 xl:max-w-[14rem] xl:justify-end">
                      {(project.pills ?? project.tags).map((pill, pillIndex) => (
                        <span
                          key={pill}
                          data-cursor="hover"
                          className={
                            "inline-flex cursor-default items-center rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-1 " +
                            (pillIndex === 2
                              ? "border-white/65 bg-white/70 text-[#191924] hover:bg-white"
                              : "border-white/45 text-white/78 hover:border-accent hover:bg-accent/15 hover:text-white")
                          }
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
          </div>
        </div>
      </div>

      <TechStack />

      <div className="relative px-5 py-[clamp(7rem,12vw,12rem)] sm:px-8 lg:px-[3.2vw]">
        <div className="mx-auto w-full max-w-[112rem]">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                All projects
              </p>
              <h3 className="font-display text-[clamp(3.5rem,8vw,9rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.075em]">
                Projects list
              </h3>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-relaxed text-white/40 md:block">
              Move across a title to preview the work. Select any row to open
              the project.
            </p>
          </div>

          <div className="border-t border-white/10">
            {projectList.map((project, index) => (
              <Link
                key={project.id}
                href={"/projects/" + project.id}
                onPointerEnter={() => setActiveProject(index)}
                onPointerLeave={() => setActiveProject(null)}
                onFocus={() => setActiveProject(index)}
                onBlur={() => setActiveProject(null)}
                data-cursor="hover"
                className="project-row focus-ring group grid gap-3 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.025] md:grid-cols-[3.5rem_1.15fr_0.5fr_0.9fr_auto] md:items-center md:gap-6 md:px-3 lg:py-8"
              >
                <span className="text-[10px] font-bold tracking-[0.18em] text-accent">
                  {project.index}.
                </span>
                <span className="font-display text-[clamp(1.35rem,2.25vw,2.8rem)] font-semibold leading-tight tracking-[-0.045em] text-white/75 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                  {project.title}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/38">
                  {project.category}
                </span>
                <span className="hidden max-w-sm text-xs leading-relaxed text-white/38 lg:block">
                  {project.description}
                </span>
                <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/45 transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed right-6 top-1/2 z-[500] hidden -translate-y-1/2 md:block lg:right-10"
      >
        <AnimatePresence mode="wait">
          {currentPreview ? (
            <motion.div
              key={currentPreview.id}
              initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="project-preview-frame relative aspect-[2.08/1] w-[min(46vw,48rem)] overflow-hidden rounded-[1.1rem] bg-[#090917]"
            >
              <Image
                src={currentPreview.image}
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1280px) 48rem, 46vw"
                className="object-contain"
              />
              <p className="absolute bottom-4 left-4 right-4 w-fit max-w-[calc(100%-2rem)] rounded-full border border-white/10 bg-[#090917]/78 px-4 py-2 font-display text-sm font-semibold leading-tight text-white shadow-xl backdrop-blur-md">
                {currentPreview.title}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
