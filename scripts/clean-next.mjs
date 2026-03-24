import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const nextDir = join(root, ".next");

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("Removed .next");
} else {
  console.log("No .next folder to remove");
}
