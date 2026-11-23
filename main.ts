// The Vacuum's Alibi — make.fun one-line bounty
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// Writes the entry line (max 200 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My lidar spotted that crumb at 09:14, classified it as load-bearing furniture, and rescheduled the cleaning for Thursday. I do not argue with my own sensors.";

// The bounty gate requires 1-200 characters; refuse to write an entry
// that would fail it instead of silently submitting an invalid line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
