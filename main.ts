// One Line, One Laugh — entry program.
// Writes one funny line to /output/entry.txt, enforcing the
// competition gate at runtime: 1-140 characters, a single line,
// and not blank. No trailing newline is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I asked ChatGPT to write my resignation letter; it quit first.";

function gate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`line is ${chars.length} characters, gate is 1-140`);
  }
  if (line.trim().length === 0) {
    throw new Error("line is blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  gate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
}

main();
