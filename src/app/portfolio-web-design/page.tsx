import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/data/content";
import { portfolioSeoPage } from "@/data/seo-pages";
import { projects } from "@/data/project-showcase";

const canonical = `${seo.url}/portfolio-web-design`;

export const metadata: Metadata = {
  title: portfolioSeoPage.title,
  description: portfolioSeoPage.description,
  keywords: portfolioSeoPage.keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    type: "website",
    url: canonical,
    siteName: "Husnain Portfolio",
    title: portfolioSeoPage.title,
    description: portfolioSeoPage.description,
    images: ["/og.png"],
  },
};

export default function PortfolioWebDesignPage() {
  const relatedProjects = projects.filter((project) =>
    [
      "ghadeer-studio-portfolio-with-advanced-motion",
      "3d-portfolio",
      "previous-personal-portfolio",
      "spylt-award-inspired-animation-showcase",
    ].includes(project.id)
  );

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: portfolioSeoPage.heading,
    description: portfolioSeoPage.description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: "Husnain Portfolio",
      url: seo.url,
    },
    about: [
      "Portfolio Website Design",
      "Portfolio Theme",
      "Portfolio Hero Section",
      "Portfolio Video",
      "Web Development",
      "GSAP Animation",
      "Next.js Portfolio",
    ],
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
        name: "Portfolio Web Design",
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main className="min-h-screen bg-[#090917] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-[3.2vw] lg:pt-40">
        <article className="mx-auto w-full max-w-[112rem]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
            {portfolioSeoPage.eyebrow}
          </p>

          <h1 className="mt-7 max-w-7xl font-display text-[clamp(3rem,7.4vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
            {portfolioSeoPage.heading}
          </h1>

          <p className="mt-12 max-w-4xl font-display text-[clamp(1.35rem,2.6vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white/72">
            {portfolioSeoPage.intro}
          </p>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {portfolioSeoPage.sections.map((section) => (
              <section
                key={section.title}
                className="border-t border-white/12 pt-7"
              >
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {section.title}
                </h2>

                <p className="mt-5 leading-7 text-white/55">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-28 border-t border-white/10 pt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
              Related Portfolio Projects
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-accent/60"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>

                  <div className="mt-5 flex items-start justify-between gap-6">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:rotate-45 group-hover:text-accent" />
                  </div>

                  <p className="mt-5 leading-7 text-white/50">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20 flex flex-wrap gap-3">
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
              SaaS Product Development
            </Link>

            <Link
              href="/projects"
              className="rounded-full bg-accent px-5 py-3 text-xs font-bold text-white"
            >
              All Projects
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
