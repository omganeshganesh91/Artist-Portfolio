type Instrument = "guitar" | "piano" | "drums" | "violin";

interface ArrangementPart {
  instrument: Instrument;
  name: string;
  section: string;
  href: string;
  color: string;
  note: string;
}

const arrangement: ArrangementPart[] = [
  {
    instrument: "guitar",
    name: "Guitar",
    section: "Projects",
    href: "#work",
    color: "text-[#d9f36a]",
    note: "The things I build",
  },
  {
    instrument: "piano",
    name: "Piano",
    section: "Skills",
    href: "#skills",
    color: "text-[#a9c9f3]",
    note: "The keys I play",
  },
  {
    instrument: "drums",
    name: "Drums",
    section: "Experience",
    href: "#journey",
    color: "text-[#f1876b]",
    note: "The rhythm of my work",
  },
  {
    instrument: "violin",
    name: "Violin",
    section: "Education",
    href: "#education",
    color: "text-[#d9b7f2]",
    note: "How I learned my craft",
  },
];

function InstrumentDrawing({ instrument }: { instrument: Instrument }) {
  if (instrument === "guitar") {
    return (
      <svg viewBox="0 0 96 64" aria-hidden="true" className="h-12 w-20">
        <path
          d="M40 27 57 10l8 8-17 17m-8-8c-8-7-19-3-20 5-1 5 3 7 1 11-2 5 2 12 9 12 4 0 6-3 11-2 8 1 12-7 6-14l-5-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <circle cx="33" cy="42" r="4" fill="currentColor" opacity=".8" />
        <path d="m44 31 6 6M58 11l8 8m-12-3 8 8" stroke="currentColor" strokeWidth="1.5" />
        <path d="m27 38 32-22m-29 28 32-22" stroke="currentColor" strokeWidth="1" opacity=".7" />
      </svg>
    );
  }

  if (instrument === "piano") {
    return (
      <svg viewBox="0 0 96 64" aria-hidden="true" className="h-12 w-20">
        <rect
          x="10"
          y="15"
          width="76"
          height="36"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        {[25, 40, 55, 70].map((x) => (
          <path key={x} d={`M${x} 16v34`} stroke="currentColor" strokeWidth="1.5" opacity=".7" />
        ))}
        {[22, 37, 67, 82].map((x) => (
          <rect key={x} x={x} y="15" width="7" height="20" rx="1" fill="currentColor" />
        ))}
        <path d="M16 56h64" stroke="currentColor" strokeWidth="2" opacity=".45" />
      </svg>
    );
  }

  if (instrument === "drums") {
    return (
      <svg viewBox="0 0 96 64" aria-hidden="true" className="h-12 w-20">
        <path d="m22 11 25 15m27-15L51 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="27" cy="14" rx="12" ry="3" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(31 27 14)" />
        <ellipse cx="69" cy="14" rx="12" ry="3" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-31 69 14)" />
        <ellipse cx="49" cy="34" rx="17" ry="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 34v15c0 5 34 5 34 0V34M43 50l-4 7m16-7 4 7" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="21" cy="43" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 43v9m18-9v9" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 64" aria-hidden="true" className="h-12 w-20">
      <path
        d="M45 10c-5-4-11 0-9 6l5 13-8 8c-4 4-3 11 2 13-1 7 5 11 10 7l5-5 5 5c5 4 11 0 10-7 5-2 6-9 2-13l-8-8 5-13c2-6-4-10-9-6l-5 6-5-6Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path d="m47 14 3 37m-8-22 8 4m-8 6 8 3m8-13-8 4m8 6-8 3" stroke="currentColor" strokeWidth="1.3" opacity=".75" />
      <circle cx="50" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function ComposerArrangement() {
  return (
    <section
      aria-labelledby="arrangement-title"
      className="border-y border-white/10 bg-[#171915]"
    >
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-7">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              A personal arrangement
            </p>
            <h2
              id="arrangement-title"
              className="mt-1 text-base font-medium tracking-tight text-white/90 sm:text-lg"
            >
              Every part of a career has its own instrument.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d9f36a]/70">
            OG · SIDE A
          </span>
        </div>

        <nav
          aria-label="Explore the portfolio arrangement"
          className="grid grid-cols-2 gap-2 lg:grid-cols-4"
        >
          {arrangement.map((part, index) => (
            <a
              key={part.instrument}
              href={part.href}
              className="group relative flex min-h-28 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[#10110f] p-3 transition-colors hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a] sm:min-h-32 sm:gap-4 sm:p-4"
            >
              <span
                className={`shrink-0 transition-transform duration-200 group-hover:-rotate-3 ${part.color}`}
              >
                <InstrumentDrawing instrument={part.instrument} />
              </span>
              <span className="relative z-10 min-w-0">
                <span className="block text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                  PART 0{index + 1} · {part.name}
                </span>
                <span className="mt-1 block text-sm font-semibold text-white/90 sm:text-base">
                  {part.section}
                </span>
                <span className="mt-1 block text-[10px] leading-4 text-white/45 sm:text-xs">
                  {part.note}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-2 text-sm text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-white/70"
              >
                ↗
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
