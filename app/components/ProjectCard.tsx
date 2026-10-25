import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  selectedSkill: string;
}

export default function ProjectCard({
  project,
  selectedSkill,
}: ProjectCardProps) {
  const notes = [
    ["The challenge", project.challenge],
    ["My approach", project.approach],
    ["The result", project.result],
  ];

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171915] transition-colors hover:border-[#d9f36a]/40">
      <div
        className={`track-art ${project.artwork} relative flex aspect-[1.6/1] items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 track-grid opacity-40" />
        <div className="relative flex aspect-square w-[43%] items-center justify-center rounded-full border border-white/20 bg-black/15">
          <div className="absolute inset-[12%] rounded-full border border-white/20" />
          <div className="absolute inset-[28%] rounded-full border border-white/20" />
          <span className="relative text-5xl font-semibold tracking-[-0.1em] text-[#f6f2e8] sm:text-6xl">
            {project.number}
          </span>
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-white/25 bg-black/15 px-3 py-1.5 text-[9px] font-semibold tracking-[0.2em] text-white/80 backdrop-blur">
          {project.type}
        </span>
        <span
          aria-hidden="true"
          className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full border border-white/30 bg-black/15 text-lg text-white transition-transform group-hover:rotate-45"
        >
          +
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
          {project.note}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
          {project.title}
        </h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-white/55">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-3 py-1.5 text-[10px] ${
                selectedSkill === skill
                  ? "border-[#d9f36a]/50 text-[#d9f36a]"
                  : "border-white/10 text-white/60"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={project.projectLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-result-link mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d9f36a]/40 px-4 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
        >
          {project.projectLink.label}
          <span aria-hidden="true">↗</span>
        </a>

        <details className="track-details mt-5 border-t border-white/10 pt-4">
          <summary className="min-h-10 cursor-pointer list-none text-xs font-medium text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9f36a]">
            <span className="details-closed">Open track notes +</span>
            <span className="details-open">Close track notes −</span>
          </summary>
          <dl className="mt-4 grid gap-4 text-sm leading-6">
            {notes.map(([label, detail]) => (
              <div key={label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {label}
                </dt>
                <dd className="mt-1 text-white/65">{detail}</dd>
              </div>
            ))}
          </dl>
        </details>
      </div>
    </article>
  );
}
