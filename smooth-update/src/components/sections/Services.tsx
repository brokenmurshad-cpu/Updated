"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import { services } from "@/data/content";
import { getGsap } from "@/lib/gsap";

const serviceMedia = [
  "/images/services/web-development.webp",
  "/images/services/ai-engineering.webp",
  "/images/services/saas-product-building.webp",
  "/images/services/performance-optimization.webp",
];

const cardColors = ["#171721", "#14141f", "#11111b", "#0d0d18"];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { gsap } = getGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      if (!window.matchMedia("(min-width: 768px)").matches) return;

      const cards = cardRefs.current.filter(
        (card): card is HTMLElement => Boolean(card),
      );

      cards.forEach((card, index) => {
        const surface = card.querySelector<HTMLElement>(
          "[data-service-surface]",
        );
        if (!surface) return;

        gsap.set(surface, {
          transformOrigin: "center top",
          willChange: "transform, border-radius",
        });

        if (index > 0) {
          gsap.fromTo(
            surface,
            {
              yPercent: 10,
              scale: 0.975,
              borderRadius: "1.75rem 1.75rem 0 0",
            },
            {
              yPercent: 0,
              scale: 1,
              borderRadius: "0rem 0rem 0rem 0rem",
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        }

        const nextCard = cards[index + 1];
        if (nextCard) {
          gsap.to(surface, {
            scale: 0.965,
            y: -18,
            borderRadius: "0 0 1.75rem 1.75rem",
            ease: "power2.out",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 92%",
              end: "top top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#090917]"
    >
      <div className="editorial-grid flex min-h-[100svh] items-center border-b border-white/10 px-5 py-24 sm:px-8 lg:px-[3.2vw]">
        <div className="mx-auto grid w-full max-w-[112rem] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
              02 / Services
            </p>
            <RevealText
              as="h2"
              text="What I do /"
              className="font-display text-[clamp(4.5rem,11.5vw,14rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.085em] text-[#f2f3f4]"
            />
          </div>
          <p className="max-w-[35rem] text-sm leading-[1.8] text-white/55 md:text-base lg:pb-4">
            User-friendly interfaces do not happen by chance. They are built
            with intention, clear systems, and motion that helps people move
            through every journey effortlessly.
          </p>
        </div>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <article
            key={service.index}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="service-card relative min-h-[88svh] overflow-hidden md:sticky md:top-0 md:min-h-[100svh]"
            style={{ zIndex: index + 1, backgroundColor: cardColors[index] }}
          >
            <div
              data-service-surface
              className="service-card-surface relative flex min-h-[88svh] items-center overflow-hidden border-t border-white/10 px-5 py-24 sm:px-8 md:min-h-[100svh] lg:px-[3.2vw]"
              style={{ backgroundColor: cardColors[index] }}
            >
              <div className="mx-auto grid w-full max-w-[112rem] gap-12 lg:grid-cols-[0.12fr_0.92fr_0.96fr] lg:items-center lg:gap-[4vw]">
                <p className="font-display text-[clamp(3rem,7.5vw,9rem)] font-extrabold leading-none tracking-[-0.08em] text-white/18">
                  {service.index}
                </p>

                <div className="relative z-10">
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                    Service {service.index}
                  </p>
                  <h3 className="font-display text-[clamp(3.2rem,7vw,8.5rem)] font-extrabold leading-[0.82] tracking-[-0.07em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-8 max-w-[39rem] text-sm leading-[1.8] text-white/55 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-white/[0.035] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#090917] shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
                    <Image
                      src={serviceMedia[index]}
                      alt={`${service.title} service preview`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 38vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090917]/55 via-transparent to-transparent" />
                    <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_rgba(133,76,230,0.42)]">
                      <ArrowDownRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 sm:left-8 lg:left-[3.2vw]">
                Smooth stacked panels
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
