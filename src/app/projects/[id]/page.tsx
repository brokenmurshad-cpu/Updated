import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projectById, projects } from "@/data/project-showcase";
import { seo } from "@/data/content";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

function projectRank(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function suggestedProjects(currentProjectId: string) {
  return projects
    .filter((candidate) => candidate.id !== currentProjectId)
    .map((candidate) => ({
      project: candidate,
      rank: projectRank(`${currentProjectId}:${candidate.id}`),
    }))
    .sort((first, second) => first.rank - second.rank)
    .slice(0, 3)
    .map(({ project }) => project);
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectById(id);

  if (!project) {
    return {
      title: "Project | Husnain Portfolio",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `${seo.url}/projects/${project.id}`;

  const projectDescription =
    `${project.description} Explore this ${project.category.toLowerCase()} case study by Muhammad Husnain, Full Stack Developer and AI Engineer.`;

  return {
    title: `${project.title} | ${project.category} Project | Husnain Portfolio`,
    description: projectDescription,
    keywords: [
      project.title,
      project.category,
      ...project.tags,
      "Muhammad Husnain",
      "Husnain Portfolio",
      "web development project",
      "portfolio project",
      project.category + " project",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "Husnain Portfolio",
      title: `${project.title} | Husnain Portfolio`,
      description: projectDescription,
      images: [
        {
          url: project.image,
          alt: `${project.title} project preview`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectById(id);

  if (!project) notFound();

  const technology =
    project.technologyLine ?? project.tags.join(" · ");
  const suggestions = suggestedProjects(project.id);
  const canonical = `${seo.url}/projects/${project.id}`;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: canonical,
    image: project.image,
    creator: {
      "@type": "Person",
      name: "Muhammad Husnain",
      url: seo.url,
      jobTitle: [
        "Full Stack Developer",
        "AI Engineer",
      ],
    },
    keywords: [
      project.category,
      ...project.tags,
      "Web Development",
      "Portfolio Project",
    ].join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Husnain Portfolio",
        item: seo.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${seo.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

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
            <h1 className="max-w-6xl font-display text-[clamp(2.6rem,5.6vw,6.9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
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

      <section className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-[3.2vw] lg:py-32">
        <div className="mx-auto w-full max-w-[112rem]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                More work
              </p>
              <h2 className="font-display text-[clamp(2.15rem,4.8vw,5.6rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
                Suggested
                <br />
                projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/75 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
            >
              Explore all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.id}
                href={`/projects/${suggestion.id}`}
                className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-accent/70 hover:bg-white/[0.045]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#090917]">
                  <Image
                    src={suggestion.image}
                    alt={`${suggestion.title} project preview`}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/55 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#090917]/70 text-white backdrop-blur-lg transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.18em]">
                    <span className="text-accent">Project {suggestion.index}</span>
                    <span className="text-white/38">{suggestion.category}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(1.45rem,2.2vw,2.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white/90">
                    {suggestion.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/52">
                    {suggestion.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {suggestion.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white/48"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
