"use client";

import { useState } from "react";
import type { Project, SkillGroup } from "../data/portfolio";
import CareerKeyboard from "./CareerKeyboard";
import ProjectCard from "./ProjectCard";

interface ProjectTracksProps {
  projects: Project[];
  skillGroups: SkillGroup[];
}

export default function ProjectTracks({
  projects,
  skillGroups,
}: ProjectTracksProps) {
  const [selectedSkill, setSelectedSkill] = useState("All tracks");
  const visibleProjects =
    selectedSkill === "All tracks"
      ? projects
      : projects.filter((project) => project.skills.includes(selectedSkill));

  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-16 2xl:py-20"
    >
      <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9f36a]">
            The discography
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
            Selected tracks<span className="text-[#d9f36a]">.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/50">
          Choose a skill on the soundboard to find related tracks. Open a track
          to see its challenge, approach, and result.
        </p>
      </div>

      <CareerKeyboard
        skillGroups={skillGroups}
        selectedSkill={selectedSkill}
        onSelectSkill={setSelectedSkill}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
            selectedSkill={selectedSkill}
          />
        ))}
      </div>

      {/* {visibleProjects.length === 0 && (
        <p className="rounded-2xl border border-white/10 p-6 text-sm text-white/60">
          No tracks use that skill yet. Add the skill to a project in the track
          data to connect them.
        </p>
      )} */}
    </section>
  );
}
