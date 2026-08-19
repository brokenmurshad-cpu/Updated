import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/project-showcase";
import { seo } from "@/data/content";

export const metadata: Metadata = {
  title: "Web, AI & SaaS Projects | Muhammad Husnain Portfolio",
  description:
    "Explore Muhammad Husnain's selected web development, AI, SaaS, e-commerce and interactive projects built with modern full-stack technologies.",
  alternates: {
    canonical: `${seo.url}/projects`,
  },
  openGraph: {
    type: "website",
    url: `${seo.url}/projects`,
    siteName: seo.siteName,
    title: "Web, AI & SaaS Projects | Muhammad Husnain Portfolio",
    description:
      "Selected web development, AI, SaaS, e-commerce and interactive projects by Muhammad Husnain.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web, AI & SaaS Projects | Muhammad Husnain Portfolio",
    description:
      "Selected web development, AI, SaaS, e-commerce and interactive projects by Muhammad Husnain.",
    images: ["/og.png"],
  },
};

export default function ProjectsIndexPage() {
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${seo.url}/projects/#webpage`,
    name: "Muhammad Husnain Projects",
    description: metadata.description,
    url: `${seo.url}/projects`,
    isPartOf: { "@id": `${seo.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${seo.url}/projects/${project.id}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <main className="min-h-screen bg-[#090917] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-[3.2vw] lg:pt-40">
      <div className="mx-auto w-full max-w-[112rem]">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          Husnain Portfolio / Project Archive
        </p>

        <h1 className="mt-7 max-w-7xl font-display text-[clamp(3rem,8vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
          Web, AI, SaaS
          <br />
          & Creative Projects.
        </h1>

        <p className="mt-12 max-w-4xl text-base leading-8 text-white/60 sm:text-lg">
          A collection of web development, AI engineering, SaaS, e-commerce,
          Shopify, education, healthcare, portfolio design, 3D and interactive
          projects created with technologies including JavaScript, TypeScript,
          React, Next.js, Tailwind CSS, GSAP, Framer Motion, Node.js,
          PostgreSQL and Prisma.
        </p>

        <nav
          aria-label="Project expertise"
          className="mt-12 flex flex-wrap gap-3"
        >
          <Link
            href="/services/web-development"
            className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 hover:border-accent hover:text-accent"
          >
            Web Development
          </Link>

          <Link
            href="/services/ai-engineering"
            className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 hover:border-accent hover:text-accent"
          >
            AI Engineering
          </Link>

          <Link
            href="/services/saas-product-development"
            className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 hover:border-accent hover:text-accent"
          >
            SaaS Development
          </Link>

          <Link
            href="/portfolio-web-design"
            className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 hover:border-accent hover:text-accent"
          >
            Portfolio Web Design
          </Link>
        </nav>

        <div className="mt-20 divide-y divide-white/10 border-y border-white/10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group grid gap-4 py-8 transition hover:bg-white/[0.018] md:grid-cols-[6rem_1fr_14rem_auto] md:items-center md:px-5"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                {project.index}
              </span>

              <div>
                <h2 className="font-display text-[clamp(1.5rem,2.8vw,3.3rem)] font-semibold leading-[1] tracking-[-0.05em]">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/45">
                  {project.description}
                </p>
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                {project.category}
              </span>

              <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:rotate-45 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
      </main>
    </>
  );
}
