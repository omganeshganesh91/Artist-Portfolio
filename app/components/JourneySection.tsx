import type { EducationEntry, TimelineEntry } from "../data/portfolio";

interface JourneySectionProps {
  experience: TimelineEntry[];
  education: EducationEntry[];
}

interface TimelineCardProps {
  period: string;
  title: string;
  place: string;
  detail: string;
  accent: "coral" | "blue";
}

function TimelineCard({
  period,
  title,
  place,
  detail,
  accent,
}: TimelineCardProps) {
  const accentClass = accent === "coral" ? "text-[#f1876b]" : "text-[#a9c9f3]";
  const detailPoints = detail
    .split(/\r?\n/)
    .map((point) => point.trim())
    .filter(Boolean)
    .map((point) => point.replace(/^(?:✨|💠|🔹|•|[-*])\s*/, ""));

  return (
    <li className="rounded-2xl border border-white/10 bg-[#171915] p-5 sm:p-6">
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${accentClass}`}
      >
        {period}
      </p>
      <h4 className="mt-2 text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/55">{place}</p>
      {detailPoints.length > 1 ? (
        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">
          {detailPoints.map((point, index) => (
            <li
              key={`${index}-${point.slice(0, 24)}`}
              className="grid grid-cols-[0.5rem_minmax(0,1fr)] items-start gap-3"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65rem] size-1.5 rounded-full bg-[#d9f36a]"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-6 text-white/45">{detail}</p>
      )}
    </li>
  );
}

export default function JourneySection({
  experience,
  education,
}: JourneySectionProps) {
  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-16 2xl:py-20"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f1876b]">
          Recording sessions
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
          The journey<span className="text-[#f1876b]">.</span>
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/50">
          Work, learning, and the people who helped shape your sound.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 className="mb-5 flex items-center gap-3 text-lg font-medium">
            <span className="grid size-9 place-items-center rounded-full bg-[#f1876b]/15 text-[#f1876b]">
              ↗
            </span>
            Experience
          </h3>
          <ol className="space-y-3">
            {experience.map((entry) => (
              <TimelineCard
                key={entry.title}
                period={entry.period}
                title={entry.title}
                place={entry.company}
                detail={entry.detail}
                accent="coral"
              />
            ))}
          </ol>
        </div>

        <div id="education" className="scroll-mt-6">
          <h3 className="mb-5 flex items-center gap-3 text-lg font-medium">
            <span className="grid size-9 place-items-center rounded-full bg-[#a9c9f3]/15 text-[#a9c9f3]">
              ✳
            </span>
            Education &amp; learning
          </h3>
          <ol className="space-y-3">
            {education.map((entry) => (
              <TimelineCard
                key={entry.type}
                period={entry.type}
                title={entry.name}
                place={entry.place}
                detail={entry.detail}
                accent="blue"
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
