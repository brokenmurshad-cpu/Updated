"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  className,
  speed = 35,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]",
        pauseOnHover && "marquee-shell",
        className,
      )}
    >
      <div
        className={cn(
          "marquee-track flex shrink-0 items-center gap-5 pr-5",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>

      {/* Duplicate for seamless infinite loop */}
      <div
        aria-hidden="true"
        inert
        className={cn(
          "marquee-track flex shrink-0 items-center gap-5 pr-5",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
