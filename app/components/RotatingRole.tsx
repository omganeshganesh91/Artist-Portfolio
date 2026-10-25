"use client";

import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Full-stack Developer",
  "Problem Solver",
  "UI/UX Designer",
];

export default function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span
        aria-hidden="true"
        className="role-caret inline-block text-[#d9f36a]"
      >
        {roles[roleIndex]}
      </span>
    </>
  );
}
