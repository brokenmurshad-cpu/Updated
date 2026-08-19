import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience, personal, seo, stack } from "@/data/content";

const canonical = `${seo.url}/about`;

export const metadata: Metadata = {
  title: "About Muhammad Husnain | Full Stack & AI Developer",
  description:
    "Meet Muhammad Husnain, a Dubai-based Full Stack Developer and AI Engineer building polished websites, SaaS platforms and AI-powered products.",
  alternates: { canonical },
  openGraph: {
    type: "profile",
    url: canonical,
    siteName: seo.siteName,
    title: "About Muhammad Husnain | Full Stack & AI Developer",
    description:
      "Experience, capabilities and technology stack of Dubai-based developer Muhammad Husnain.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Husnain | Full Stack & AI Developer",
    description:
      "Experience, capabilities and technology stack of Dubai-based developer Muhammad Husnain.",
    images: ["/og.png"],
  },
};

const capabilities = [
  {
    title: "Full-stack web development",
    body: "I build responsive, accessible products with Next.js, React and TypeScript, supported by practical backend APIs and production-ready data systems.",
  },
  {
    title: "AI products and automation",
    body: "I turn AI models into useful product workflows, including agents, intelligent interfaces, structured outputs and human approval steps.",
  },
  {
    title: "SaaS and interactive experiences",
    body: "I combine product thinking, scalable architecture and purposeful motion to create dashboards, SaaS platforms and memorable brand websites.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${canonical}/#webpage`,
      name: "About Muhammad Husnain",
      description: metadata.description,
      url: canonical,
      isPartOf: { "@id": `${seo.url}/#website` },
      mainEntity: { "@id": `${seo.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: seo.siteName,
          item: seo.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Muhammad Husnain",
          item: canonical,
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <main className="min-h-screen bg-[#090917] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-[3.2vw] lg:pt-40">
        <article className="mx-auto w-full max-w-[112rem]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
            Husnain Portfolio / About
          </p>

          <h1 className="mt-7 max-w-7xl font-display text-[clamp(3rem,7.5vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
            Full Stack Developer
            <br />
            & AI Engineer.
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
            <div>
              <p className="max-w-4xl font-display text-[clamp(1.35rem,2.6vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white/76">
                I&apos;m {personal.fullName}, a {personal.role} and AI Engineer
                based in {personal.location}. I take digital products from idea
                to launch, balancing clear user experience with reliable
                engineering and intentional motion.
              </p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
                My work spans modern marketing websites, full-stack SaaS
                products, AI-assisted tools, e-commerce experiences and
                performance-focused interactive portfolios. I care about the
                details users notice and the technical foundations they never
                have to think about.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-5 border-y border-white/10 py-7 lg:grid-cols-1">
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  Location
                </dt>
                <dd className="mt-2 font-display text-xl font-semibold">
                  {personal.location}
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  Experience
                </dt>
                <dd className="mt-2 font-display text-xl font-semibold">
                  {personal.yearsExperience}+ years
                </dd>
              </div>
            </dl>
          </div>

          <section className="mt-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
              What I build
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div key={capability.title} className="border-t border-white/12 pt-7">
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {capability.title}
                  </h2>
                  <p className="mt-5 leading-7 text-white/55">
                    {capability.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
              Experience
            </p>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className="grid gap-4 py-8 md:grid-cols-[1fr_0.6fr_0.45fr] md:gap-10"
                >
                  <div>
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                      {item.role}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-white/65">{item.company}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
              Technology stack
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stack.map((group) => (
                <div
                  key={group.category}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-6"
                >
                  <h2 className="font-display text-xl font-semibold">{group.category}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <nav aria-label="About page next steps" className="mt-20 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold text-white"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 transition hover:border-accent hover:text-accent"
            >
              Explore services
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 transition hover:border-accent hover:text-accent"
            >
              Start a project
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
