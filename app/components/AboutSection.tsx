export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24"
    >
      <div>
        <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9f36a]">
          <span aria-hidden="true" className="h-px w-8 bg-[#d9f36a]" />
          Liner notes
        </p>
        <h2 className="max-w-xl text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.065em]">
          A little about the artist
          <span className="text-[#d9f36a]">.</span>
        </h2>
      </div>

      <div className="relative min-w-0 border-l border-white/10 pl-5 sm:pl-7 lg:pl-9">
        <span
          aria-hidden="true"
          className="absolute top-0 left-[-1px] h-12 w-px bg-[#d9f36a]"
        />
        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          I&apos;m Om Ganesh, a software engineer who enjoys turning ideas into
          clear, useful products. My work spans web applications, integrations,
          and content platforms—from shaping the interface to connecting the
          systems behind it.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
          I care about thoughtful details, reliable workflows, and learning
          something new with every build. This studio is where I bring that work
          together.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Web products", "Integrations", "Always learning"].map((note) => (
            <span
              key={note}
              className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/50"
            >
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
