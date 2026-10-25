const profiles = [
  {
    number: "01",
    name: "LeetCode",
    detail: "Algorithms · problem solving",
    label: "THE PUZZLE ROOM",
    href: "https://leetcode.com/u/Omganesh71/",
    mark: "LC",
    accent: "text-[#f3b35c]",
    barColor: "bg-[#f3b35c]",
    border: "border-[#f3b35c]/25",
    glow: "bg-[#f3b35c]/10",
    bars: [35, 60, 42, 76, 54, 88, 48, 68, 39, 72, 52, 82],
  },
  {
    number: "02",
    name: "GeeksforGeeks",
    detail: "Coding · computer science",
    label: "THE PRACTICE STAGE",
    href: "https://www.geeksforgeeks.org/profile/omganesh71",
    mark: "GfG",
    accent: "text-[#72d596]",
    barColor: "bg-[#72d596]",
    border: "border-[#72d596]/25",
    glow: "bg-[#72d596]/10",
    bars: [68, 40, 78, 52, 90, 58, 36, 74, 48, 86, 56, 70],
  },
];

function MusicMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      className="size-8"
    >
      <path
        d="M28 8v23.5a7 7 0 1 1-4-6.32V14l17-3v20.5a7 7 0 1 1-4-6.32V7l-9 1Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18v12m-4-8v4m40-8v12m-4-8v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#171915]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 50%, rgb(217 243 106 / 9%), transparent 28%), radial-gradient(circle at 88% 20%, rgb(169 201 243 / 8%), transparent 30%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-9 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f1876b]">
              <span className="text-[#d9f36a]">
                <MusicMark />
              </span>
              Beyond the portfolio
            </p>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.06em] sm:text-6xl">
              Practice makes
              <br />
              the signal<span className="text-[#d9f36a]">.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              A couple of places where I keep learning, solving, and tuning my
              craft.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-black/20 px-4 py-2.5 sm:self-auto">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d9f36a] opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-[#d9f36a]" />
            </span>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Learning in progress
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-3xl border ${profile.border} bg-[#10110f] p-5 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9f36a] sm:min-h-60 sm:p-7`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-16 -right-14 size-48 rounded-full ${profile.glow} blur-3xl transition-opacity group-hover:opacity-150`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className={`grid size-14 place-items-center rounded-2xl border ${profile.border} ${profile.glow} font-mono text-sm font-bold ${profile.accent}`}
                  >
                    {profile.mark}
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                      {profile.label}
                    </span>
                    <span className="mt-1 block text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {profile.name}
                    </span>
                    <span className="mt-1 block text-xs text-white/45">
                      {profile.detail}
                    </span>
                  </span>
                </div>
                <span className="font-mono text-xs text-white/30">
                  CH {profile.number}
                </span>
              </div>

              <div className="relative mt-8 flex items-end justify-between gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-8 items-center gap-1.5"
                >
                  {profile.bars.map((height, index) => (
                    <span
                      key={`${profile.name}-${index}`}
                      className={`w-1 rounded-full ${profile.barColor} opacity-60 transition-opacity group-hover:opacity-100`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition-colors group-hover:text-[#d9f36a]">
                  Visit profile
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
