"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { getGsap } from "@/lib/gsap";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  accentWords?: string[];
  delay?: number;
  once?: boolean;
};

const normalizeWord = (word: string) =>
  word.toLowerCase().replace(/[^a-z0-9]/g, "");

export default function RevealText({
  text,
  as: Tag = "p",
  className,
  accentWords = [],
  delay = 0,
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();
    const words = el.querySelectorAll("[data-word]");

    const animation = gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0, filter: "blur(10px)" },
      {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.06,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, [delay, once, text]);

  const words = text.split(" ");
  const accentWordSet = new Set(accentWords.map(normalizeWord));

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
          <span
            data-word
            className={cn(
              "inline-block will-change-transform",
              accentWordSet.has(normalizeWord(word)) && "text-accent",
            )}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
