"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const themeEvent = "portfolio-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme-v2", nextTheme);
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      data-cursor="hover"
      className="theme-toggle fixed bottom-44 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-accent text-white shadow-[0_12px_32px_rgba(0,70,67,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[#0a8f87] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-8"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
}
