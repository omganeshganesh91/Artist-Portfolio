"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const themes = [
  { id: "studio", name: "Studio", color: "#d9f36a" },
  { id: "warm", name: "Warm vinyl", color: "#ffb86b" },
  { id: "daylight", name: "Daylight", color: "#267d71" },
] as const;

type Theme = (typeof themes)[number]["id"];
const THEME_CHANGE_EVENT = "portfolio-theme-change";

function isTheme(value: string | null): value is Theme {
  return themes.some((theme) => theme.id === value);
}

function getThemeSnapshot(): Theme {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  return isTheme(savedTheme) ? savedTheme : "studio";
}

function getServerThemeSnapshot(): Theme {
  return "studio";
}

function subscribeToTheme(onThemeChange: () => void) {
  window.addEventListener("storage", onThemeChange);
  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);

  return () => {
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
  };
}

export default function ThemeSettings() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function chooseTheme(nextTheme: Theme) {
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {isOpen && (
        <section
          aria-label="Choose a color theme"
          className="mb-3 w-64 rounded-2xl border border-white/10 bg-[#171915] p-4 shadow-2xl"
        >
          <div className="mb-3">
            <p className="text-xs font-semibold text-white/90">Studio settings</p>
            <p className="mt-1 text-[10px] text-white/50">
              Choose the color mood for your visit.
            </p>
          </div>
          <div role="group" aria-label="Color theme" className="grid gap-2">
            {themes.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={theme === option.id}
                onClick={() => chooseTheme(option.id)}
                className={`flex min-h-11 items-center gap-3 rounded-xl border px-3 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a] ${
                  theme === option.id
                    ? "border-[#d9f36a]/60 bg-white/5 text-white"
                    : "border-white/10 text-white/65 hover:border-white/30"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full ring-2 ring-white/15"
                  style={{ backgroundColor: option.color }}
                />
                {option.name}
                {theme === option.id && (
                  <span className="ml-auto text-[#d9f36a]" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close studio settings" : "Open studio settings"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="ml-auto grid size-12 place-items-center rounded-full border border-white/15 bg-[#171915] text-white shadow-xl transition hover:-translate-y-0.5 hover:border-[#d9f36a]/60 hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`size-5 transition-transform ${isOpen ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"
          />
        </svg>
      </button>
    </div>
  );
}
