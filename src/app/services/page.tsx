import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/data/content";
import { seoServicePages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title:
    "Web Development, AI Engineering & SaaS Development | Husnain Portfolio",
  description:
    "Explore web development, AI engineering, SaaS product development and performance optimization services by Muhammad Husnain.",
  alternates: {
    canonical: `${seo.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#090917] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-[3.2vw] lg:pt-40">
      <div className="mx-auto w-full max-w-[112rem]">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          Husnain Portfolio / Services
        </p>

        <h1 className="mt-6 max-w-6xl font-display text-[clamp(3rem,8vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
          Web, AI & SaaS
          <br />
          Development.
        </h1>

        <p className="mt-10 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
          Muhammad Husnain is a Full Stack Developer and AI Engineer building
          modern websites, SaaS products, AI-powered applications, e-commerce
          experiences, marketing websites and high-performance web platforms.
        </p>

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {seoServicePages.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/60 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:rotate-45 group-hover:text-accent" />
              </div>

              <h2 className="mt-10 font-display text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
                {service.heading}
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-white/55">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-12">
          <Link
            href="/portfolio-web-design"
            className="inline-flex items-center gap-3 text-sm font-bold text-accent"
          >
            Explore Portfolio Website Design
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
