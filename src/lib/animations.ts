"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateReferenceMenuEnter(
  navbar: string,
  links: string,
  curve: string,
) {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

  gsap.killTweensOf([navbar, links, curve]);
  gsap.set(navbar, {
    display: "flex",
    autoAlpha: 1,
    y: 0,
    clipPath: "circle(0% at calc(100% - 3.25rem) 3.25rem)",
  });
  gsap.set(links, { y: 72, autoAlpha: 0, rotate: 1.5 });
  gsap.set(curve, { y: 48, autoAlpha: 0 });

  tl.fromTo(
    navbar,
    { clipPath: "circle(0% at calc(100% - 3.25rem) 3.25rem)" },
    {
      clipPath: "circle(155% at calc(100% - 3.25rem) 3.25rem)",
      duration: 1,
      ease: "power4.inOut",
    },
  )
    .fromTo(
      curve,
      { y: 48, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.65 },
      0.38,
    )
    .fromTo(
      links,
      { y: 72, autoAlpha: 0, rotate: 1.5 },
      {
        y: 0,
        autoAlpha: 1,
        rotate: 0,
        duration: 0.75,
        stagger: 0.075,
        ease: "power3.out",
      },
      0.28,
    );

  return tl;
}

export function animateReferenceMenuLeave(
  navbar: string,
  links: string,
  curve: string,
) {
  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    onComplete: () => {
      gsap.set(navbar, { display: "none" });
    },
  });

  gsap.killTweensOf([navbar, links, curve]);

  tl.to(links, {
    y: -30,
    autoAlpha: 0,
    rotate: -1,
    duration: 0.3,
    stagger: 0.035,
    ease: "power2.in",
  })
    .to(curve, { y: 48, autoAlpha: 0, duration: 0.4 }, 0)
    .to(
      navbar,
      {
        clipPath: "circle(0% at calc(100% - 3.25rem) 3.25rem)",
        duration: 0.72,
        ease: "power4.inOut",
      },
      0.12,
    );

  return tl;
}

export function navbarScale(burger: string, hero: string) {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to(burger, {
        scale: 1 - progress * 0.08,
        duration: 0.2,
        overwrite: true,
      });
    },
  });
}
