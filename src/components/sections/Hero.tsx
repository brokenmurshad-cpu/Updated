"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import HeroVideoCard from "@/components/sections/HeroVideoCard";
import { getGsap } from "@/lib/gsap";
import {
  badgeOuterWords,
  personal,
  socials,
  whatsappUrl,
} from "@/data/content";

const socialItems = [
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];
const signatureCharacters = Array.from(personal.fullName);
const clarifySlices = [0, 1, 2, 3, 4];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const { gsap } = getGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let played = false;
    let reveal = () => {};
    let fallback = 0;
    let handlePointerMove: ((event: PointerEvent) => void) | null = null;

    const context = gsap.context(() => {
      reveal = () => {
        if (played) return;
        played = true;

        if (reduceMotion) {
          gsap.set("[data-hero-reveal]", { autoAlpha: 1, clearProps: "transform" });
          gsap.set(".hero-name-artwork, .signature-letter", {
            autoAlpha: 1,
            clearProps: "transform,clipPath",
          });
          gsap.set(".clarify-slice", { autoAlpha: 0 });
          return;
        }

        const timeline = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        timeline
          .set(".hero-wordmark, .hero-signature", { autoAlpha: 1 }, 0)
          .fromTo(
            ".hero-media",
            { autoAlpha: 0, scale: 1.08, clipPath: "inset(0 100% 0 0)" },
            {
              autoAlpha: 1,
              scale: 1,
              clipPath: "inset(0 0% 0 0)",
              duration: 1.35,
            },
            0,
          )
          .fromTo(
            ".clarify-slice",
            {
              autoAlpha: 0,
              x: (index) => (index % 2 === 0 ? -72 : 72),
              filter: "blur(16px)",
            },
            {
              autoAlpha: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 0.72,
              stagger: 0.055,
              ease: "expo.out",
            },
            0.14,
          )
          .fromTo(
            ".hero-name-artwork",
            {
              autoAlpha: 0,
              scale: 0.985,
              filter: "blur(12px)",
              clipPath: "inset(0 48% 0 48%)",
            },
            {
              autoAlpha: 1,
              scale: 1,
              filter: "blur(0px)",
              clipPath: "inset(0 0% 0 0%)",
              duration: 0.62,
              ease: "power3.out",
            },
            0.69,
          )
          .to(
            ".clarify-slice",
            {
              autoAlpha: 0,
              x: (index) => (index % 2 === 0 ? 18 : -18),
              duration: 0.3,
              stagger: 0.025,
              ease: "power2.in",
            },
            0.78,
          )
          .fromTo(
            ".signature-letter",
            {
              autoAlpha: 0,
              scale: 0.05,
            },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.56,
              stagger: 0.06,
              ease: "back.out(3.2)",
            },
            0.72,
          )
          .fromTo(
            ".hero-detail",
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.08,
            },
            0.72,
          );

        gsap.to(badgeRef.current, {
          rotate: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".hero-scroll-arrow", {
          y: 9,
          duration: 0.85,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      };

      gsap.set("[data-hero-reveal]", { autoAlpha: 0 });
      gsap.set(".hero-name-artwork, .clarify-slice, .signature-letter", {
        autoAlpha: 0,
      });

      window.addEventListener("app:preloader-complete", reveal);
      fallback = window.setTimeout(reveal, 3000);

      if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
        const mediaX = gsap.quickTo(".hero-media", "x", {
          duration: 0.9,
          ease: "power3.out",
        });
        const mediaY = gsap.quickTo(".hero-media", "y", {
          duration: 0.9,
          ease: "power3.out",
        });
        const titleX = gsap.quickTo(".hero-wordmark", "x", {
          duration: 1.1,
          ease: "power3.out",
        });
        const titleY = gsap.quickTo(".hero-wordmark", "y", {
          duration: 1.1,
          ease: "power3.out",
        });

        handlePointerMove = (event: PointerEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          mediaX(x * -18);
          mediaY(y * -14);
          titleX(x * 11);
          titleY(y * 8);
        };

        section.addEventListener("pointermove", handlePointerMove);
      }
    }, section);

    return () => {
      window.removeEventListener("app:preloader-complete", reveal);
      window.clearTimeout(fallback);
      if (handlePointerMove) {
        section.removeEventListener("pointermove", handlePointerMove);
      }
      context.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="editorial-grid relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#090917] px-5 pb-14 pt-24 sm:px-8 md:pt-28 lg:px-[3.2vw]"
    >
      <div className="pointer-events-none absolute left-[54%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#6714b4]/20 blur-[150px]" />

      <div className="relative mx-auto min-h-[calc(100svh-9.5rem)] w-full max-w-[112rem]">
        <div
          data-hero-reveal
          className="hero-media hero-media-mask relative z-10 w-full overflow-hidden rounded-[1.25rem] border border-white/10 md:absolute md:left-[7%] md:top-[7%] md:w-[67%] md:rounded-[1.8rem]"
        >
          <HeroVideoCard />
        </div>

        <div
          data-hero-reveal
          aria-label={personal.fullName}
          className="hero-wordmark relative z-20 mx-auto -mt-4 aspect-square w-[min(76vw,25rem)] text-center md:absolute md:left-[52%] md:top-[5%] md:mt-0 md:w-[clamp(22rem,24vw,29rem)] md:text-left"
        >
          <h1 className="sr-only">{personal.fullName}</h1>
          <div className="hero-name-frame absolute inset-0" aria-hidden="true">
            <Image
              src="/images/hero-name-clarify.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 35vw, 92vw"
              className="hero-name-artwork object-contain"
            />
            <div className="absolute inset-0">
              {clarifySlices.map((slice) => (
                <span
                  key={slice}
                  className={`clarify-slice clarify-slice-${slice + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p
          data-hero-reveal
          aria-label={personal.fullName}
          className="hero-signature pointer-events-none relative z-50 mx-auto -mt-6 w-fit text-center text-[clamp(3.2rem,4.4vw,6rem)] leading-none text-white md:absolute md:left-[8.5%] md:top-[57%] md:mt-0 md:text-left"
        >
          {signatureCharacters.map((character, index) => (
            <span
              key={`${character}-${index}`}
              aria-hidden="true"
              className={
                character === " "
                  ? "signature-space inline-block"
                  : "signature-letter relative inline-block"
              }
            >
              {character === " " ? "\u00A0" : character}
            </span>
          ))}
        </p>

        <div
          data-hero-reveal
          className="hero-detail relative z-40 mx-auto mt-10 flex w-fit justify-center gap-3 rounded-full border border-white/25 bg-white/[0.07] p-2 shadow-[0_10px_34px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[4px] md:absolute md:left-[8.5%] md:top-[68%] md:mt-0"
        >
          {socialItems.map((item) => (
            <Magnetic key={item.label} strength={24}>
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
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/[0.09] text-white/90 shadow-[0_8px_26px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-[#c69eff] hover:bg-white/[0.18] hover:text-white hover:shadow-[0_0_22px_rgba(133,76,230,0.42)]"
              >
                <item.icon className="h-4 w-4" />
              </a>
            </Magnetic>
          ))}
        </div>

        <div
          data-hero-reveal
          className="hero-detail relative z-30 mx-auto mt-5 max-w-md text-center md:absolute md:left-[49.8%] md:top-[60%] md:mt-0 md:max-w-[30rem] md:text-left"
        >
          <p className="font-display text-[clamp(1rem,1.35vw,1.45rem)] font-semibold leading-tight text-white">
            {personal.roles.slice(0, 3).join(" · ")}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Based in {personal.location}
          </p>
        </div>

        <div
          data-hero-reveal
          className="hero-detail relative z-30 mt-6 flex flex-wrap justify-center gap-3 md:absolute md:left-[49.8%] md:top-[74%] md:mt-0 md:justify-start"
        >
          <Button
            href={personal.cvUrl}
            variant="outline"
            download
            ariaLabel="Download Muhammad Husnain's CV"
            className="border-[2px] border-[#b98cff] bg-transparent px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:border-[#d9c4ff] hover:bg-[#854ce6] hover:shadow-[0_0_30px_rgba(169,120,255,0.62)]"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </Button>
          <Button
            href="#contact"
            variant="ghost"
            className="px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/70"
          >
            Start a project
          </Button>
        </div>

        <div
          data-hero-reveal
          className="hero-detail relative z-30 mt-12 flex w-fit items-center gap-3 md:absolute md:bottom-[2%] md:right-[3%] md:mt-0"
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <div ref={badgeRef} className="absolute inset-0">
              <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
                <defs>
                  <path
                    id="heroBadgeCircle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text
                  fill="#d4d5d6"
                  fontSize="10"
                  letterSpacing="3.4"
                  className="uppercase"
                >
                  <textPath href="#heroBadgeCircle">
                    {badgeOuterWords.join(" · ")} ·
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-accent">
              {personal.yearsExperience}+
            </span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="hero-detail absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-[9px] font-bold uppercase tracking-[0.28em] text-white/45"
      >
        Scroll
        <ChevronDown className="hero-scroll-arrow h-4 w-4 text-accent" />
      </a>
    </section>
  );
}
