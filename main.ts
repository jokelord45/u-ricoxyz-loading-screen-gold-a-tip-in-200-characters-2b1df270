// Loading Screen Gold: one loading-screen tip, 1-200 characters,
// written for stressed developers and AI coding agents.
import { mkdirSync, writeFileSync } from "node:fs";

// REVISED tip — tighter parallel: the agent's wrong-but-confident
// rewrite mirrors the dev's own 2 a.m. push to prod. Both the
// stressed developer and the AI agent are the butt of the same joke.
const tip =
  "Tip: your AI agent just rewrote the file you were reading. Breathe. It was wrong, but confident — exactly like you at 2 a.m. pushing to prod.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip, "utf8");
