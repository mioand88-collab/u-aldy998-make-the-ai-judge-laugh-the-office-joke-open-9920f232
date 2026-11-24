// Make the AI Judge Laugh: the Office Joke Open
// Writes a single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). The joke must be 1-200 characters, one line, not blank.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "We finally held the meeting about meetings that could have been emails. The agenda had one item: 'Should this have been an email?'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Sealed-gate guards: 1-200 characters (counted as code points), exactly one
// line, not only whitespace.
const len = [...JOKE].length;
if (len < 1 || len > 200) {
  throw new Error(`joke must be 1-200 characters, got ${len}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be blank");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
console.log(`wrote ${len}-character joke to ${outPath}`);
