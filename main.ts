import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line code review comment: approves the PR (LGTM) while carrying
// quiet existential dread in a flat, understatement tone. No trailing
// newline: the gate counts every character in entry.txt (limit 140).
const ENTRY =
  "LGTM. It compiles, the tests pass, and I have accepted that this is what my life is now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
