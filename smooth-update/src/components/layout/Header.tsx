"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BurgerMenuBtn from "@/components/ui/BurgerMenuBtn";
import Magnetic from "@/components/ui/Magnetic";
import Link from "@/components/ui/Link";
import {
  animateReferenceMenuEnter,
  animateReferenceMenuLeave,
  navbarScale,
} from "@/lib/animations";
import {
  navbarLinks,
  navLinks,
  personal,
  socialLinks,
} from "@/data/content";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const { contextSafe } = useGSAP({ scope: scopeRef });

  const openMenu = contextSafe(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    setIsNavbarOpen(true);
    animateReferenceMenuEnter(
      "#navbar",
      ".nav-link-item",
      ".rounded__div__up",
    );
    window.requestAnimationFrame(() => menuRef.current?.focus());
  });

  const closeMenu = contextSafe(() => {
    setIsNavbarOpen(false);
    animateReferenceMenuLeave(
      "#navbar",
      ".nav-link-item",
      ".rounded__div__up",
    );
    window.requestAnimationFrame(() => previouslyFocused.current?.focus());
  });

  const toggleMenu = contextSafe(() => {
    if (isNavbarOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  useGSAP(
    () => {
      gsap.set("#navbar", {
        y: 0,
        autoAlpha: 0,
        display: "none",
        clipPath: "circle(0% at calc(100% - 3.25rem) 3.25rem)",
      });
      const timer = window.setTimeout(() => {
        if (document.getElementById("hero")) {
          navbarScale("#burger", "#hero");
        }
      }, 120);
      return () => window.clearTimeout(timer);
    },
    { scope: scopeRef },
  );

  useEffect(() => {
    document.documentElement.style.overflow = isNavbarOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isNavbarOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavbarOpen, toggleMenu]);

  return (
    <div ref={scopeRef}>
      <BurgerMenuBtn
        id="burger"
        isOpen={isNavbarOpen}
        onClick={toggleMenu}
        className="!z-[7000]"
      />

      <header
        id="navbar-header"
        className="fixed inset-x-0 top-0 z-[120] border-b border-white/[0.07] bg-[#090917]/78 backdrop-blur-xl"
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-[4.75rem] w-full max-w-[112rem] items-center gap-7 px-5 pr-[5.5rem] sm:px-8 sm:pr-[6.5rem] lg:px-[3.2vw] lg:pr-[7.2rem]"
        >
          <a
            href="#hero"
            data-cursor="hover"
            className="focus-ring shrink-0 font-display text-sm font-extrabold uppercase tracking-[-0.035em] text-white sm:text-base"
          >
            {personal.fullName}
          </a>

          <div className="hidden items-center gap-2 xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(133,76,230,0.95)]" />
            <p className="max-w-[7.5rem] text-[8px] font-extrabold uppercase leading-[1.2] tracking-[0.12em] text-white/65">
              Available for work &amp; freelance
            </p>
          </div>

          <ul className="ml-auto hidden items-center gap-[clamp(0.8rem,1.5vw,1.8rem)] md:flex">
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                tag="li"
                label={`${item.label}${index < navLinks.length - 1 ? "," : ""}`}
                url={item.url}
                className="text-[11px] font-semibold text-white/75 transition-colors hover:text-white lg:text-xs"
              />
            ))}
          </ul>
        </nav>
      </header>

      <div
        id="navbar"
        ref={menuRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-0 z-[6000] hidden h-[100svh] flex-col overflow-hidden bg-[#a978ff] text-[#090917] outline-none"
      >
        <div className="editorial-grid relative flex min-h-0 flex-1 items-center px-6 py-20 sm:px-12 lg:px-[7vw]">
          <div aria-hidden className="pointer-events-none absolute right-[7%] top-[13%] h-[32vw] w-[32vw] rounded-full border border-[#090917]/10 bg-[#c5a6ff]/30 blur-[2px]" />
          <p className="absolute left-6 top-7 font-display text-sm font-extrabold uppercase sm:left-12 lg:left-[7vw]">
            {personal.fullName}
          </p>

          <nav className="relative z-10 w-full" aria-label="Fullscreen navigation">
            <p className="mb-6 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#090917]/55">
              Navigation / {String(navbarLinks.length).padStart(2, "0")}
            </p>
            <ul className="grid gap-x-16 gap-y-0 lg:grid-cols-2">
              {navbarLinks.map((item, index) => (
                <li
                  key={item.label}
                  className="nav-link-item overflow-hidden border-b border-[#090917]/20"
                >
                  <Magnetic strength={12}>
                    <a
                      href={item.url}
                      onClick={toggleMenu}
                      data-cursor="hover"
                      className="group flex items-center justify-between py-3 font-display text-[clamp(2rem,6.5vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.06em] text-[#090917] transition-colors hover:text-white lg:py-4"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-[#090917]/45 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#090917]/55 sm:left-12 sm:right-12 lg:left-[7vw] lg:right-[7vw]">
            <a
              href={`mailto:${personal.email}`}
              className="transition-colors hover:text-white"
            >
              {personal.email}
            </a>
            <div className="flex flex-wrap gap-5">
              {socialLinks.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded__div__up !relative z-20 -mt-px">
          <div className="round__bg__up bg-[#a978ff]" />
        </div>
      </div>
    </div>
  );
}
