"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import { personal, socials, whatsappUrl } from "@/data/content";
import { projects } from "@/data/project-showcase";
import { getGsap } from "@/lib/gsap";

const socialItems = [
  { href: socials.tiktok, icon: SiTiktok, label: "TikTok" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];

const galleryWave = [12, 3, 0, 6, 14, 19, 10, 2, 0, 7, 15, 20, 11, 3, 0, 6, 14];
const galleryRotation = [-1.2, -0.5, 0.25, 0.75, 1.15, 0.55, -0.35, -0.8];

type GalleryStyle = CSSProperties & {
  "--gallery-offset": string;
  "--gallery-rotation": string;
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const { gsap } = getGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let played = false;
    let fallback = 0;

    const reveal = () => {
      if (played) return;
      played = true;

      if (reduceMotion) {
        gsap.set("[data-hero-reveal]", {
          autoAlpha: 1,
          clearProps: "transform,filter",
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .fromTo(
          "[data-hero-heading]",
          { autoAlpha: 0, y: 34, filter: "blur(12px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.95 },
        )
        .fromTo(
          "[data-hero-gallery]",
          { autoAlpha: 0, scale: 0.975, y: 24 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.05 },
          0.2,
        )
        .fromTo(
          "[data-hero-actions]",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.75 },
          0.55,
        );
    };

    const context = gsap.context(() => {
      gsap.set("[data-hero-reveal]", { autoAlpha: 0 });
      window.addEventListener("app:preloader-complete", reveal);
      fallback = window.setTimeout(reveal, 3000);
    }, section);

    return () => {
      window.removeEventListener("app:preloader-complete", reveal);
      window.clearTimeout(fallback);
      context.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="editorial-grid relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#090917] px-5 pb-10 pt-[6.5rem] sm:px-8 sm:pb-12 sm:pt-[7.25rem] lg:px-[3.2vw]"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-[112rem] flex-col justify-center">
        <div
          data-hero-reveal
          data-hero-heading
          className="relative z-10 mx-auto mb-5 max-w-[74rem] text-center sm:mb-7"
        >
          <h1 className="hero-project-heading text-balance font-display font-extrabold uppercase leading-[0.78] tracking-[-0.075em] text-white">
            <span className="block">{personal.firstName}</span>
            <span className="hero-last-name block">{personal.lastName}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[50rem] text-[clamp(0.78rem,1.15vw,1.1rem)] font-semibold leading-relaxed text-white/82 sm:mt-6">
            {personal.roles.slice(0, 3).join(", ")}
          </p>
          <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.28em]">
            Based in {personal.location}
          </p>
        </div>

        <div
          data-hero-reveal
          data-hero-gallery
          className="hero-project-marquee relative left-1/2 z-10 w-screen -translate-x-1/2"
          aria-label="Featured project gallery"
        >
          <Marquee
            speed={32}
            pauseOnHover={false}
            className="hero-project-track w-full"
          >
            {projects.map((project, index) => {
              const style: GalleryStyle = {
                "--gallery-offset": `${galleryWave[index % galleryWave.length]}px`,
                "--gallery-rotation": `${galleryRotation[index % galleryRotation.length]}deg`,
              };

              return (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title}`}
                  data-cursor="hover"
                  className="hero-project-card group relative block shrink-0 overflow-hidden border border-white/15 bg-[#111119] shadow-[0_22px_60px_rgba(0,0,0,0.42)]"
                  style={style}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    priority={index < 5}
                    sizes="(max-width: 767px) 52vw, 21vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.055]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#090917]/40 via-transparent to-transparent opacity-35 transition-opacity duration-500 group-hover:opacity-10" />
                </a>
              );
            })}
          </Marquee>
        </div>

        <div
          data-hero-reveal
          data-hero-actions
          className="relative z-20 mx-auto mt-4 flex w-full flex-col items-center sm:mt-5"
        >
          <div className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.055] p-1.5 shadow-[0_10px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md sm:gap-3 sm:p-2">
            {socialItems.map((item) => (
              <Magnetic key={item.label} strength={22}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  data-cursor="hover"
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/85 transition duration-300 hover:-translate-y-1 hover:border-[#31b8ae] hover:bg-[#004643] hover:text-[#f0ede5] hover:shadow-[0_0_22px_rgba(10,143,135,0.46)] sm:h-10 sm:w-10"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-4 sm:gap-3">
            <Button
              href={personal.cvUrl}
              variant="outline"
              download
              ariaLabel="Download Muhammad Husnain's CV"
              className="border-[2px] border-[#0a8f87] bg-transparent px-5 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:border-[#f0ede5] hover:bg-[#004643] hover:shadow-[0_0_30px_rgba(10,143,135,0.58)] sm:px-6 sm:py-3 sm:text-[10px] sm:tracking-[0.24em]"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              className="px-5 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/75 sm:py-3 sm:text-[10px] sm:tracking-[0.24em]"
            >
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
