"use client";

import { ArrowUp, Download, Linkedin, MessageCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Marquee from "@/components/ui/Marquee";
import Magnetic from "@/components/ui/Magnetic";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { personal, socials, whatsappUrl } from "@/data/content";

const socialLinks = [
  { href: socials.tiktok, icon: SiTiktok, label: "TikTok" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate min-h-[100svh] overflow-hidden bg-[#1c1e27] text-white">
      {/* Oversized moving background name, matching the reference footer. */}
      <div
        aria-hidden
        className="footer-name-marquee-layer pointer-events-none absolute inset-x-0 top-[4%] z-0 select-none overflow-hidden"
      >
        <Marquee speed={38} pauseOnHover={false} className="w-full">
          <span className="footer-name-watermark block whitespace-nowrap font-sans text-[clamp(8.5rem,19vw,23rem)] font-extrabold uppercase leading-none tracking-[-0.095em] text-white/[0.045]">
            Muhammad Husnain
          </span>
        </Marquee>
      </div>

      <div className="relative z-20 min-h-[100svh] px-5 pb-44 pt-[clamp(8rem,17vh,13rem)] sm:px-12 sm:pb-16 lg:px-[3.1vw]">
        {/* Main left-aligned statement */}
        <div className="mx-auto max-w-[min(62rem,92vw)] text-center lg:mx-0 lg:max-w-[min(62rem,73vw)] lg:text-left">
          <h2 className="text-balance font-display text-[clamp(2.5rem,6.5vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.06em] text-white/95 sm:leading-[0.8] sm:tracking-[-0.078em]">
            Let&apos;s build
            <span
              className="mt-[0.16em] block"
              style={{ color: "var(--color-accent)" }}
            >
              the future.
            </span>
          </h2>

          <div className="flex justify-center lg:justify-start">
            <Magnetic strength={18}>
              <a
                href={personal.cvUrl}
                download
                data-cursor="hover"
                className="mt-[clamp(4.5rem,10vh,8rem)] inline-flex items-center gap-2 rounded-full border-[3px] border-[#0a8f87] bg-[#101018]/55 px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-none transition hover:bg-[#004643] hover:shadow-none sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.32em]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>

        {/* The reference keeps social links and email in the right-side corner. */}
        <div className="mx-auto mt-20 flex max-w-sm flex-col items-center gap-7 text-center sm:items-center lg:absolute lg:right-[3.1vw] lg:top-[50%] lg:mt-0 lg:items-end lg:text-right">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.17em] text-[#0a8f87]">
              Socials
            </p>
            <div className="flex items-center justify-center gap-6 lg:justify-end">
              {socialLinks.map((item) => (
                <Magnetic key={item.label} strength={18}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    data-cursor="hover"
                    className="block text-[#0a8f87] transition hover:scale-110 hover:text-white"
                  >
                    <item.icon className="h-7 w-7 stroke-[2.4]" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.17em] text-[#0a8f87]">
              Contact
            </p>
            <a
              href={`mailto:${socials.email}`}
              data-cursor="hover"
              className="break-all font-sans text-[clamp(1rem,1.65vw,2rem)] font-bold tracking-[-0.035em] text-white/90 transition hover:text-[#31b8ae] sm:break-normal sm:tracking-[-0.045em]"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <p className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-sm font-semibold text-[#0a8f87] sm:bottom-16 sm:left-12 sm:translate-x-0 sm:text-left lg:left-[3.1vw]">
          &copy; {year} {personal.fullName}
        </p>

        <p className="absolute bottom-10 left-1/2 w-max -translate-x-1/2 text-center text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0a8f87] sm:bottom-16 sm:left-auto sm:right-12 sm:translate-x-0 sm:text-right sm:text-xs sm:tracking-[0.25em] lg:right-[3.1vw]">
          Build <span className="mx-5">•</span> Ship <span className="mx-5">•</span>
        </p>
      </div>

      <ThemeToggle />

      <a
        href="#hero"
        aria-label="Back to top"
        data-cursor="hover"
        className="back-to-top fixed bottom-28 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#004643] text-white shadow-[0_12px_32px_rgba(0,70,67,0.4)] transition hover:-translate-y-1 hover:bg-[#0a8f87] md:bottom-28 md:right-8"
      >
        <ArrowUp className="h-7 w-7 stroke-[3]" />
      </a>
    </footer>
  );
}
