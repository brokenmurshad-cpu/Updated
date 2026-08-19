import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { seo, personal } from "@/data/content";
import {
  seoServiceBySlug,
  seoServicePages,
} from "@/data/seo-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoServicePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoServiceBySlug(slug);

  if (!page) {
    return {
      title: "Service | Husnain Portfolio",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `${seo.url}/services/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Husnain Portfolio",
      title: page.title,
      description: page.description,
      images: ["/og.png"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = seoServiceBySlug(slug);

  if (!page) notFound();

  const canonical = `${seo.url}/services/${page.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.heading,
    description: page.description,
    url: canonical,
    provider: {
      "@type": "Person",
      name: personal.fullName,
      url: seo.url,
      jobTitle: [
        "Full Stack Developer",
        "AI Engineer",
        "Front-End Developer",
      ],
    },
    areaServed: {
      "@type": "Place",
      name: "Dubai, UAE",
    },
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
        name: "Services",
        item: `${seo.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.heading,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>

          <p className="mt-16 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
            {page.eyebrow}
          </p>

          <h1 className="mt-7 max-w-7xl font-display text-[clamp(3rem,7.5vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
            {page.heading}
          </h1>

          <p className="mt-12 max-w-4xl font-display text-[clamp(1.35rem,2.6vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white/72">
            {page.intro}
          </p>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {page.sections.map((section) => (
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

          <section className="mt-24 border-t border-white/10 pt-10">
            <h2 className="font-display text-2xl font-semibold">
              Related expertise
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {seoServicePages
                .filter((item) => item.slug !== page.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 transition hover:border-accent hover:text-accent"
                  >
                    {item.heading}
                  </Link>
                ))}

              <Link
                href="/portfolio-web-design"
                className="rounded-full border border-white/12 px-5 py-3 text-xs font-bold text-white/65 transition hover:border-accent hover:text-accent"
              >
                Portfolio Web Design
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold text-white"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
