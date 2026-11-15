"use client";

import { MotionConfig } from "motion/react";

/** Respektiert die Systemeinstellung „Bewegung reduzieren“. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
