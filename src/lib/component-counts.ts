import { readdir } from "node:fs/promises";
import path from "node:path";

const COMPONENT_EXTENSIONS = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
]);

const IGNORED_FILES = new Set([
  "index.tsx",
  "index.ts",
  "index.jsx",
  "index.js",
]);

export async function countComponents(
  category: string,
): Promise<number> {
  const directory = path.join(
    process.cwd(),
    "src",
    "components",
    "ui",
    category,
  );

  try {
    const entries = await readdir(directory, {
      withFileTypes: true,
    });

    return entries.filter((entry) => {

      if (!entry.isFile()) {
        return false;
      }

      if (entry.name.startsWith("_")) {
        return false;
      }

      if (IGNORED_FILES.has(entry.name)) {
        return false;
      }

      const extension = path.extname(entry.name);

      return COMPONENT_EXTENSIONS.has(extension);
    }).length;
  } catch (error: unknown) {

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return 0;
    }

    console.error(
      `Failed to count components in "${category}":`,
      error,
    );

    return 0;
  }
}