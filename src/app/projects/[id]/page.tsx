import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projectById, projects } from "@/data/project-showcase";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectById(id);

  return {
    title: project
      ? project.title + " | Muhammad Husnain"
      : "Project | Muhammad Husnain",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectById(id);

  if (!project) notFound();

  const technology =
    project.technologyLine ?? project.tags.join(" · ");

  return (
    <main className="min-h-screen bg-[#191924] pt-28 text-white sm:pt-36">
      <section className="px-5 pb-24 sm:px-8 lg:px-[3.2vw] lg:pb-36">
        <div className="mx-auto w-full max-w-[112rem]">
          <div className="mb-12 flex items-center justify-between gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/48 sm:mb-16">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <span>Project / {project.index}</span>
          </div>

          <span className="inline-flex rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
            Case Study
          </span>

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <h1 className="max-w-6xl font-display text-[clamp(3.25rem,7vw,8.6rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
              {project.title}
            </h1>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#191924] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-7 font-display text-[clamp(1.25rem,2vw,2.2rem)] font-medium text-white/45">
            {project.category}
          </p>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Open the live " + project.title + " website"}
            className="group relative mt-14 block aspect-[16/9.4] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090917] shadow-[0_35px_110px_rgba(0,0,0,0.42)] sm:mt-20"
          >
            <Image
              src={project.image}
              alt={project.title + " landing-page preview"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 92vw"
              className="object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/58 via-transparent to-transparent" />
            <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#090917]/70 text-white backdrop-blur-lg transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent sm:bottom-7 sm:right-7">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-[3.2vw] lg:py-36">
        <div className="mx-auto grid w-full max-w-[112rem] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <p className="max-w-4xl font-display text-[clamp(2rem,4vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-white/88">
            {project.description}
          </p>

          <div className="space-y-10">
            <div className="border-t border-white/10 pt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                Technology
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {technology}
              </p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Creative direction · Development · Motion design
              </p>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-[3.2vw]">
        <div className="mx-auto flex w-full max-w-[112rem] items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              More work
            </p>
            <h2 className="font-display text-[clamp(2.7rem,6vw,7rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
              Explore all
              <br />
              projects /
            </h2>
          </div>
          <Link
            href="/#projects"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:rotate-45 hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Back to all projects"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
