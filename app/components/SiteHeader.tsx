export default function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3" aria-label="Home">
          <span className="grid size-10 place-items-center rounded-full bg-[#d9f36a] text-sm font-black tracking-tight text-[#11120f]">
            OG
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            Om Ganesh S
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 overflow-x-auto text-xs text-white/60 sm:gap-5 sm:text-sm"
        >
          <a className="transition-colors hover:text-[#d9f36a]" href="#work">
            Work
          </a>
          <a
            className="hidden transition-colors hover:text-[#d9f36a] sm:inline"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="transition-colors hover:text-[#d9f36a]"
            href="#journey"
          >
            Journey
          </a>
          <a
            className="rounded-full border border-white/20 px-3 py-2 text-white transition-colors hover:border-[#d9f36a] hover:text-[#d9f36a] sm:px-4"
            href="#contact"
          >
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
