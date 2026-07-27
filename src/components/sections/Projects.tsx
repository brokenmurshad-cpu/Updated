"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import { getGsap } from "@/lib/gsap";
import { projects } from "@/data/content";

const featuredProjects = projects.slice(0, 5);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { gsap } = getGsap();
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

      const xTo = gsap.quickTo(previewRef.current, "x", {
        duration: 0.34,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(previewRef.current, "y", {
        duration: 0.34,
        ease: "power3.out",
      });

      const handlePointerMove = (event: PointerEvent) => {
        const width = 360;
        const height = 250;
        const gap = 24;
        const x = Math.min(
          event.clientX + gap,
          window.innerWidth - width - gap,
        );
        const y = Math.min(
          Math.max(event.clientY - height / 2, gap),
          window.innerHeight - height - gap,
        );
        xTo(x);
        yTo(y);
      };

      section.addEventListener("pointermove", handlePointerMove);
      return () => section.removeEventListener("pointermove", handlePointerMove);
    }, section);

    return () => context.revert();
  }, []);

  const currentPreview =
    activeProject === null ? null : projects[activeProject];

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
            ( {projects.length} )
          </p>
        </div>
      </div>

      <div className="border-b border-white/10">
        {featuredProjects.map((project, index) => (
          <article
            key={project.id}
            data-feature-project
            className="relative min-h-[100svh] overflow-hidden border-b border-white/10 px-5 py-24 last:border-b-0 sm:px-8 lg:px-[3.2vw]"
          >
            <div className="mx-auto grid min-h-[calc(100svh-12rem)] w-full max-w-[112rem] items-center gap-10 lg:grid-cols-[0.34fr_1.66fr]">
              <div className="relative z-10 flex items-start gap-3 lg:block">
                <span className="font-display text-[clamp(5rem,12vw,14rem)] font-extrabold leading-[0.68] tracking-[-0.1em] text-white">
                  {project.index}.
                </span>
                <p className="pt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-accent lg:mt-7 lg:pt-0">
                  {project.category}
                </p>
              </div>

              <div className="relative">
                <div
                  data-feature-media
                  className="group relative aspect-[16/9.4] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090917] shadow-[0_35px_110px_rgba(0,0,0,0.42)]"
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
                </div>

                <div
                  data-feature-content
                  className="relative z-10 -mt-16 ml-auto w-[94%] rounded-[1.2rem] border border-white/10 bg-[#11111b]/92 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8 lg:w-[82%]"
                >
                  <h3 className="max-w-[52rem] font-display text-[clamp(2rem,4vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">
                    {project.title}
                  </h3>
                  <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
                    <div>
                      <p className="max-w-[42rem] text-sm leading-[1.75] text-white/55">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.18em]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live project
                      </Button>
                      {project.github ? (
                        <Button
                          href={project.github}
                          variant="outline"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.18em]"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

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
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-[500] hidden md:block"
      >
        <AnimatePresence mode="wait">
          {currentPreview ? (
            <motion.div
              key={currentPreview.id}
              initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="project-preview-frame relative h-[250px] w-[360px] overflow-hidden rounded-[1.1rem] bg-[#090917]"
            >
              <Image
                src={currentPreview.image}
                alt=""
                fill
                sizes="360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/75 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-display text-lg font-semibold leading-tight text-white">
                {currentPreview.title}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
