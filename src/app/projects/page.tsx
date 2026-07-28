import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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

  return (
    <main className="bg-[#191924] pt-28 text-white sm:pt-36">
      <section className="px-5 pb-24 sm:px-8 lg:px-[3.2vw] lg:pb-36">
        <div className="mx-auto w-full max-w-[112rem]">
          <div className="mb-12 flex items-center justify-between gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/48 sm:mb-16">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>
            <span>Project / {project.index}</span>
          </div>

          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
            {project.category} / {project.index}
          </p>
          <h1 className="max-w-6xl font-display text-[clamp(3.6rem,9vw,11rem)] font-extrabold leading-[0.78] tracking-[-0.085em]">
            {project.title}
          </h1>

          <div className="relative mt-14 aspect-[16/9.4] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090917] shadow-[0_35px_110px_rgba(0,0,0,0.42)] sm:mt-20">
            <Image
              src={project.image}
              alt={project.title + " project preview"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/72 via-transparent to-transparent" />
          </div>
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
                {project.tags.join(" · ")}
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
              Live project
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
              Explore all<br />projects /
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
