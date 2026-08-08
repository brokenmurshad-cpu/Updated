import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { personal, socials, whatsappUrl } from "@/data/content";
import { projectById, projects } from "@/data/project-showcase";
import { portfolioTestimonials } from "@/data/testimonials";
import CountryFlag from "@/components/ui/CountryFlag";
import ReviewSubmissionForm from "@/components/sections/ReviewSubmissionForm";

export const metadata: Metadata = {
  title: "Client Reviews | Muhammad Husnain",
  description:
    "Project feedback and client reviews for Muhammad Husnain, Full Stack Developer, AI Engineer, and SaaS Builder.",
};

const profileLinks = [
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: Linkedin,
  },
  {
    label: "TikTok",
    href: socials.tiktok,
    icon: SiTiktok,
  },
  {
    label: "Email",
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#08080e] text-white">
      <section className="editorial-grid border-b border-white/10 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-[3.2vw]">
        <div className="mx-auto w-full max-w-[112rem]">
          <Link
            href="/#testimonials"
            className="focus-ring inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/48 transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to testimonials
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(15rem,0.54fr)_1.46fr] lg:items-center lg:gap-[7vw]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[24rem] overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#111119] shadow-[0_32px_100px_rgba(0,0,0,0.48)] lg:mx-0">
              <Image
                src="/images/profile.jpg"
                alt={`${personal.fullName} profile portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 28vw"
                className="object-cover object-top grayscale-[0.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080e]/72 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#08080e]/72 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/75 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.75)]" />
                Available for work
              </span>
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-accent">
                Client review profile
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.9rem,6.4vw,7.2rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em]">
                Muhammad
                <br />
                Husnain /
              </h1>
              <p className="mt-7 max-w-3xl text-sm leading-[1.85] text-white/58 sm:text-base">
                {personal.role}, AI Engineer, and SaaS Builder based in{" "}
                {personal.location}. This profile brings project feedback,
                live work, and direct contact channels together in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {profileLinks.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-4 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/65 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-3 border-y border-white/10 py-6">
                <ProfileStat
                  value={`${portfolioTestimonials.length}`}
                  label="Reviews"
                />
                <ProfileStat value="5.0" label="Rating" bordered />
                <ProfileStat
                  value={`${projects.length}`}
                  label="Live projects"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-[3.2vw]">
        <div className="mx-auto w-full max-w-[112rem]">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-accent">
                Project feedback
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,4.8vw,5.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.065em]">
                All reviews /
              </h2>
            </div>
            <p className="max-w-md text-sm leading-[1.75] text-white/45">
              Every review is paired with the related case study and its live
              website whenever a public demo is available.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {portfolioTestimonials.map((review) => {
              const project = projectById(review.projectId);

              return (
                <article
                  key={review.id}
                  className="group flex min-h-[25rem] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#101018] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-500 [contain-intrinsic-size:400px] [content-visibility:auto] hover:-translate-y-1 hover:border-white/22 hover:bg-[#12121b] sm:p-7"
                >
                  <div>
                    <div
                      aria-label="5 out of 5 stars"
                      className="text-sm tracking-[0.12em] text-[#f8c94e] drop-shadow-[0_0_10px_rgba(248,201,78,0.2)]"
                    >
                      ★★★★★
                    </div>
                    <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent">
                      {review.projectName}
                    </p>
                    <blockquote className="mt-4 text-sm leading-[1.8] text-white/68">
                      “{review.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-8 border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] font-display text-sm font-extrabold">
                        {review.name.charAt(0)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="flex min-w-0 items-center gap-2 font-display text-sm font-semibold">
                          <span className="min-w-0 truncate">
                            {review.name}
                          </span>
                          <CountryFlag
                            flag={review.flag}
                            country={review.country}
                          />
                        </p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/34">
                          {review.country}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${review.projectId}`}
                        className="focus-ring inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/48 transition hover:text-accent"
                      >
                        Case study
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      {project ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#f8c94e] transition hover:text-white"
                        >
                          Live demo
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="submit-review"
        className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-[3.2vw]"
      >
        <div className="mx-auto grid w-full max-w-[112rem] gap-10 lg:grid-cols-[minmax(18rem,0.62fr)_minmax(0,1.38fr)] lg:gap-[7vw]">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-accent">
              Share your experience
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.8vw,5.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.065em]">
              Add your
              <br />
              review /
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-[1.8] text-white/45">
              Choose the project, select your country and rating, then share
              your honest feedback. Approved reviews are added to this client
              profile.
            </p>
          </div>

          <ReviewSubmissionForm
            projects={projects.map(({ id, title }) => ({ id, title }))}
          />
        </div>
      </section>
    </main>
  );
}

function ProfileStat({
  value,
  label,
  bordered = false,
}: {
  value: string;
  label: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={
        bordered
          ? "border-x border-white/10 px-4 text-center"
          : "px-4 text-center"
      }
    >
      <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/35 sm:text-[9px]">
        {label}
      </p>
    </div>
  );
}
