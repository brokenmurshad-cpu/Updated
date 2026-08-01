"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import RotatingStar from "@/components/ui/RotatingStar";
import CountryFlag from "@/components/ui/CountryFlag";
import { projectById } from "@/data/project-showcase";
import {
  portfolioTestimonials,
  type PortfolioTestimonial,
} from "@/data/testimonials";

const reviewMidpoint = Math.ceil(portfolioTestimonials.length / 2);
const firstReviewRow = portfolioTestimonials.slice(0, reviewMidpoint);
const secondReviewRow = portfolioTestimonials.slice(reviewMidpoint);
const clientFlags = portfolioTestimonials.slice(0, 5);

export default function Testimonials() {
  const [activeReview, setActiveReview] =
    useState<PortfolioTestimonial | null>(null);

  useEffect(() => {
    if (!activeReview) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveReview(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeReview]);

  const activeProject = activeReview
    ? projectById(activeReview.projectId)
    : undefined;

  return (
    <section
      id="testimonials"
      className="editorial-grid relative overflow-hidden border-b border-white/10 bg-[#111119] py-[clamp(7rem,12vw,12rem)]"
    >
      <div className="mx-auto mb-[clamp(4rem,7vw,7rem)] w-full max-w-[112rem] px-5 sm:px-8 lg:px-[3.2vw]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <RotatingStar className="text-[clamp(2.1rem,4vw,4.8rem)] text-white/85" />
            <p className="font-display text-[clamp(1.5rem,3.5vw,3.4rem)] font-extrabold uppercase tracking-[-0.045em] text-white">
              <span className="text-white">Testi</span>
              <span style={{ color: "var(--color-accent, #0a8f87)" }}>
                monials
              </span>
            </p>
          </div>

          <Link
            href="/reviews"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/72 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
          >
            View review profile
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <h2 className="mx-auto mt-[clamp(4rem,8vw,8rem)] max-w-[92rem] break-words text-center font-display text-[clamp(2.8rem,6.6vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-white sm:leading-[0.88] sm:tracking-[-0.07em]">
          <span>Kind words from </span>
          <span className="text-accent">satisfied clients</span>
        </h2>

        <div className="mx-auto mt-9 flex w-fit items-center rounded-full border border-white/12 bg-white/[0.035] px-4 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.22)]">
          <div className="flex -space-x-2.5">
            {clientFlags.map((item) => (
              <span
                key={item.id}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111119] bg-[#181820] text-sm shadow-[0_0_14px_rgba(255,255,255,0.08)]"
              >
                <CountryFlag
                  flag={item.flag}
                  country={item.country}
                  className="h-[14px] w-5"
                />
              </span>
            ))}
          </div>
          <p className="ml-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/55 sm:text-xs">
            <span className="text-white">
              {portfolioTestimonials.length}
            </span>{" "}
            client reviews
          </p>
        </div>
      </div>

      <Marquee speed={92} pauseOnHover className="mb-5">
        {firstReviewRow.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
            onOpen={setActiveReview}
          />
        ))}
      </Marquee>

      <Marquee speed={98} reverse pauseOnHover>
        {secondReviewRow.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
            onOpen={setActiveReview}
          />
        ))}
      </Marquee>

      <AnimatePresence>
        {activeReview ? (
          <motion.div
            className="fixed inset-0 z-[8000] flex items-center justify-center bg-[#05050c]/90 p-4 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReview(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-dialog-title"
              className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] border border-white/14 bg-[#111119] p-6 text-left shadow-[0_30px_120px_rgba(0,0,0,0.72)] sm:p-10"
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                autoFocus
                aria-label="Close review"
                onClick={() => setActiveReview(null)}
                className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/65 transition hover:rotate-90 hover:border-accent hover:bg-accent hover:text-white sm:right-6 sm:top-6"
              >
                <X className="h-4 w-4" />
              </button>

              <div
                aria-label="5 out of 5 stars"
                className="text-lg tracking-[0.14em] text-[#f8c94e] drop-shadow-[0_0_12px_rgba(248,201,78,0.28)]"
              >
                ★★★★★
              </div>

              <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent">
                {activeReview.title}
              </p>
              <blockquote
                id="review-dialog-title"
                className="mt-4 font-display text-[clamp(1.5rem,3.2vw,2.45rem)] font-semibold leading-[1.25] tracking-[-0.035em] text-white"
              >
                “{activeReview.quote}”
              </blockquote>

              <div className="mt-9 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.045] font-display text-lg font-extrabold text-white">
                    {activeReview.name.charAt(0)}
                  </span>
                  <div>
                    <p className="flex items-center gap-2 font-display text-base font-semibold text-white">
                      <span>{activeReview.name}</span>
                      <CountryFlag
                        flag={activeReview.flag}
                        country={activeReview.country}
                      />
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/38">
                      {activeReview.projectName}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeProject ? (
                    <a
                      href={activeProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#111119] transition hover:-translate-y-1 hover:bg-[#f8c94e]"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                  <Link
                    href={`/projects/${activeReview.projectId}`}
                    onClick={() => setActiveReview(null)}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#31b8ae] transition hover:-translate-y-1 hover:bg-accent hover:text-white"
                  >
                    Project details
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/reviews"
                    onClick={() => setActiveReview(null)}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/65 transition hover:-translate-y-1 hover:border-white/35 hover:text-white"
                  >
                    Review profile
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function TestimonialCard({
  item,
  onOpen,
}: {
  item: PortfolioTestimonial;
  onOpen: (item: PortfolioTestimonial) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      data-cursor="hover"
      aria-label={`View review for ${item.projectName}`}
      className="testimonial-card group relative flex min-h-[20rem] w-[min(86vw,27rem)] shrink-0 flex-col justify-between overflow-hidden rounded-[1.15rem] border bg-[#0b0b12] p-6 text-left transition duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-[21rem] sm:p-7"
    >
      <span className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] leading-none text-white/[0.035]">
        “
      </span>

      <div>
        <div
          aria-label="5 out of 5 stars"
          className="text-sm tracking-[0.12em] text-[#f8c94e] drop-shadow-[0_0_10px_rgba(248,201,78,0.22)]"
        >
          ★★★★★
        </div>
        <p className="mt-6 line-clamp-5 text-sm leading-[1.75] text-white/68 sm:text-[15px]">
          “{item.quote}”
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/42 transition group-hover:text-[#f8c94e]">
          View review
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="mt-7 flex items-center gap-4 border-t border-white/[0.07] pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.045] font-display text-base font-extrabold text-white transition group-hover:border-accent">
          {item.name.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex min-w-0 items-center gap-2 font-display text-sm font-semibold text-white">
            <span className="min-w-0 truncate">{item.name}</span>
            <CountryFlag flag={item.flag} country={item.country} />
          </p>
          <p className="mt-1 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-accent/80">
            {item.projectName}
          </p>
        </div>
      </div>
    </button>
  );
}
