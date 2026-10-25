"use client";

import type { SkillGroup } from "../data/portfolio";

interface CareerKeyboardProps {
  skillGroups: SkillGroup[];
  selectedSkill: string;
  onSelectSkill: (skill: string) => void;
}

const notes = ["C", "D", "E", "F", "G", "A", "B"];

export default function CareerKeyboard({
  skillGroups,
  selectedSkill,
  onSelectSkill,
}: CareerKeyboardProps) {
  return (
    <div
      id="skills"
      className="mb-7 rounded-3xl border border-white/10 bg-[#171915] p-4 sm:mb-8 sm:p-6"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9f36a]">
            The career keyboard
          </p>
          <p className="mt-1 text-sm text-white/65">
            Press a skill key to solo its project tracks.
          </p>
        </div>
        <button
          type="button"
          aria-pressed={selectedSkill === "All tracks"}
          onClick={() => onSelectSkill("All tracks")}
          className="min-h-10 rounded-full border border-white/15 px-4 text-xs font-medium text-white/65 transition-colors hover:border-[#d9f36a] hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
        >
          Show all tracks
        </button>
      </div>

      <div className="grid gap-4">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {group.category}
              </h3>
              <span className="font-mono text-[9px] text-white/30">
                BANK 0{groupIndex + 1}
              </span>
            </div>
            <div
              role="group"
              aria-label={`${group.category} skill keys`}
              className="grid grid-cols-3 gap-1.5 rounded-2xl border border-[#a7a497] bg-[#d6d3c8] p-2 shadow-[0_8px_18px_#00000030] sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[repeat(9,minmax(0,1fr))]"
            >
              {group.skills.map((skill, index) => {
                const isSelected = selectedSkill === skill;

                return (
                  <button
                    key={skill}
                    type="button"
                    aria-label={`Solo ${skill} projects`}
                    aria-pressed={isSelected}
                    onClick={() => onSelectSkill(skill)}
                    className={`relative flex min-h-[4.5rem] min-w-0 flex-col items-center justify-center gap-1 rounded-b-md border border-[#b9b6aa] px-1.5 py-2 text-center transition-colors focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f1876b] ${
                      isSelected
                        ? "bg-[#d9f36a] text-[#171915]"
                        : "bg-[#f4f2ec] text-[#30312b] hover:bg-[#e8edcb]"
                    }`}
                  >
                    <span className="mb-1 font-mono text-[8px] text-[#73746a] sm:text-[9px]">
                      {notes[index % notes.length]}
                      {4 + Math.floor(index / notes.length)}
                    </span>
                    <span className="max-w-full break-words text-[9px] leading-tight font-semibold sm:text-[10px]">
                      {skill}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 min-h-5 text-xs text-white/40" aria-live="polite">
        {selectedSkill === "All tracks"
          ? "All project tracks are in the mix."
          : `${selectedSkill} is soloed — matching project tracks are highlighted.`}
      </p>
    </div>
  );
}
