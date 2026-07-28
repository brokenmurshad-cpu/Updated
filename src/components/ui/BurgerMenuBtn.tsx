"use client";

import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

type BurgerMenuBtnProps = {
  id?: string;
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function BurgerMenuBtn({
  id = "burger",
  className,
  isOpen,
  onClick,
}: BurgerMenuBtnProps) {
  return (
    <Magnetic
      strength={30}
      className={cn(
        "fixed right-5 top-5 z-[7000] md:right-8 md:top-7",
        className,
      )}
    >
      <button
        id={id}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="navbar"
        aria-haspopup="dialog"
        onClick={onClick}
        data-cursor="hover"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#d4d5d6]/90 backdrop-blur-xl",
          "shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-[background-color,transform,box-shadow] duration-300 hover:scale-105 hover:shadow-[0_0_0_7px_rgba(169,120,255,0.15),0_10px_40px_rgba(0,0,0,0.38)]",
          isOpen && "border-[#c5a6ff]/50 bg-[#090917] shadow-[0_0_0_7px_rgba(169,120,255,0.17),0_0_28px_rgba(133,76,230,0.6)]",
        )}
      >
        <span className="relative block h-3.5 w-6">
          <span
            className={cn(
              "absolute left-0 top-0 h-[2px] w-full origin-center rounded-full bg-[#090917] transition-all duration-300",
              isOpen && "bg-white",
              isOpen && "top-1.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 h-[2px] w-full rounded-full bg-[#090917] transition-all duration-300",
              isOpen && "bg-white",
              isOpen && "scale-x-0 opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] w-full origin-center rounded-full bg-[#090917] transition-all duration-300",
              isOpen && "bg-white",
              isOpen && "bottom-1.5 -rotate-45",
            )}
          />
        </span>
      </button>
    </Magnetic>
  );
}
