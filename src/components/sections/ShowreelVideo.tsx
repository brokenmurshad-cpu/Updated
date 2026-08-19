"use client";

import { useEffect, useRef } from "react";

export default function ShowreelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { rootMargin: "20% 0px", threshold: 0.08 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Portfolio project showreel"
      className="relative isolate h-[100svh] min-h-[32rem] w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/portfolio-showreel-poster.webp"
        disablePictureInPicture
        aria-label="A looping showreel of selected web design projects"
      >
        <source src="/video/portfolio-showreel.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
