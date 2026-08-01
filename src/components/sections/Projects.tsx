"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TechStack from "@/components/sections/TechStack";
import RotatingStar from "@/components/ui/RotatingStar";
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
      className="relative overflow-x-clip bg-[#191924] text-white"
    >
      <div className="editorial-grid flex min-h-[74svh] items-center border-b border-white/10 px-5 py-20 sm:px-8 md:min-h-[100svh] md:py-24 lg:px-[3.2vw]">
        <div className="mx-auto flex w-full max-w-[112rem] flex-col items-center text-center">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-accent sm:mb-8">
            04 / Selected work
          </p>
          <div className="flex max-w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-[clamp(1rem,2vw,2.5rem)]">
            <RotatingStar className="text-[clamp(2.35rem,4.8vw,5.2rem)] text-white/85" />
            <h2 className="max-w-full font-display text-[clamp(2.85rem,8.2vw,9.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] lg:whitespace-nowrap lg:leading-[0.78] lg:tracking-[-0.085em]">
              <span>Selected </span>
              <span className="whitespace-nowrap">
                <span style={{ color: "var(--color-accent, #0a8f87)" }}>
                  Projects
                </span>
                <span className="text-white"> / </span>
                <span className="text-white/40">{selectedProjects.length}</span>
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[112rem] lg:grid-cols-[0.31fr_1fr]">
          <aside className="sticky top-0 hidden h-[100svh] self-start border-r border-white/10 lg:flex lg:items-center lg:justify-center">
            {activeFeaturedProject ? (
              <div
                aria-live="polite"
                aria-label={`Project ${activeFeaturedProject.index}`}
                className="flex items-center justify-center text-center font-display text-[clamp(7rem,12vw,14rem)] font-extrabold leading-[0.68] tracking-[-0.1em] text-white"
              >
                <span aria-hidden="true">0</span>
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={activeFeaturedProject.id}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 26, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -26, filter: "blur(5px)" }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block min-w-[0.52em]"
                  >
                    {activeFeaturedProject.index.slice(-1)}
                  </motion.span>
                </AnimatePresence>
                <span aria-hidden="true">.</span>
              </div>
            ) : null}
          </aside>

          <div>
        {selectedProjects.map((project, index) => (
          <article
            key={project.id}
            data-feature-project
            data-feature-card
            className="relative flex min-h-0 items-center overflow-hidden border-b border-white/10 px-5 py-20 last:border-b-0 sm:px-8 md:min-h-[100svh] md:py-24 lg:px-[clamp(2rem,4.7vw,6rem)]"
          >
            <div className="w-full">
              <div className="relative z-10 mb-9 lg:hidden">
                <span className="font-display text-[clamp(4rem,12vw,14rem)] font-extrabold leading-[0.68] tracking-[-0.1em] text-white">
                  {project.index}.
                </span>
              </div>

              <div className="relative">
                <Link
                  href={"/projects/" + project.id}
                  data-feature-media
                  aria-label={"Open " + project.title + " case study"}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#090917] shadow-[0_35px_110px_rgba(0,0,0,0.42)] sm:aspect-[16/9.4] sm:rounded-[1.4rem]"
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
                  <p className="max-w-[70rem] text-[clamp(0.9rem,1.45vw,1.7rem)] leading-[1.45] text-white/58 sm:leading-[1.25]">
                    {project.technologyLine}
                  </p>
                  <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                    <h3 className="max-w-[58rem] break-words font-display text-[clamp(1.75rem,4vw,5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.05em] sm:leading-[0.92] sm:tracking-[-0.06em]">
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
                            "inline-flex cursor-default items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition duration-300 hover:-translate-y-1 sm:px-4 sm:py-2 sm:text-sm " +
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
          <div className="mb-10 flex items-end justify-between gap-8 sm:mb-12">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                All projects
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
                <RotatingStar className="text-[clamp(2rem,4vw,4.75rem)] text-white/85" />
                <h3 className="font-display text-[clamp(2.65rem,8vw,9rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.065em] sm:leading-[0.8] sm:tracking-[-0.075em]">
                  <span className="text-white">Project</span>{" "}
                  <span style={{ color: "var(--color-accent, #0a8f87)" }}>
                    List
                  </span>
                </h3>
              </div>
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
                className="project-row focus-ring group grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.025] md:grid-cols-[3.5rem_1.15fr_0.5fr_0.9fr_auto] md:items-center md:gap-6 md:px-3 lg:py-8"
              >
                <span className="col-start-1 row-start-1 text-[10px] font-bold tracking-[0.18em] text-accent md:col-auto md:row-auto">
                  {project.index}.
                </span>
                <span className="col-span-2 row-start-2 min-w-0 break-words font-display text-[clamp(1.3rem,2.25vw,2.8rem)] font-semibold leading-tight tracking-[-0.045em] text-white/75 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white md:col-auto md:row-auto md:group-hover:translate-x-2">
                  {project.title}
                </span>
                <span className="col-start-1 row-start-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/38 md:col-auto md:row-auto">
                  {project.category}
                </span>
                <span className="hidden max-w-sm text-xs leading-relaxed text-white/38 lg:block">
                  {project.description}
                </span>
                <span className="col-start-2 row-start-1 ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/45 transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white md:col-auto md:row-auto">
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
