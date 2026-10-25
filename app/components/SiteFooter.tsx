export default function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-5 border-t border-white/10 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <span>OM GANESH S · THE CREATIVE STUDIO</span>
      <nav aria-label="Social links" className="flex items-center gap-2">
        <a
          href="https://github.com/omganeshganesh91"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          className="grid size-10 place-items-center rounded-full border border-white/10 font-mono text-[10px] font-bold transition-colors hover:border-[#d9f36a]/60 hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
        </a>
        <span
          title="Add your LinkedIn profile URL to enable this link"
          aria-label="LinkedIn profile link not set"
          className="grid size-10 place-items-center rounded-full border border-white/10 font-mono text-xs font-bold text-white/30"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
            <path d="M5.1 7.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.4 9.2h3.4v11H3.4v-11Zm5.5 0h3.3v1.5h.05c.46-.87 1.58-1.78 3.25-1.78 3.48 0 4.12 2.29 4.12 5.26v6.02h-3.45v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8v5.44H8.9v-11Z" />
          </svg>
        </span>
        <a
          href="mailto:omganeshganesh723@gmail.com"
          aria-label="Email Om Ganesh"
          title="Email"
          className="grid size-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-[#d9f36a]/60 hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
          >
            <rect
              x="2.25"
              y="4.25"
              width="15.5"
              height="11.5"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m3.25 5.5 6.75 5.25 6.75-5.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
      <a
        className="transition-colors hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
        href="#home"
      >
        Back to the top ↑
      </a>
    </footer>
  );
}
