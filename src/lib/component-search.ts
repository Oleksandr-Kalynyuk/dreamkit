import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";

const COMPONENT_EXTENSIONS = new Set([
  ".tsx",
  ".jsx",
  ".ts",
  ".js",
]);

const IGNORED_FILES = new Set([
  "index.tsx",
  "index.jsx",
  "index.ts",
  "index.js",
]);

const IGNORED_CATEGORIES = new Set([
  "types",
  "utils",
  "data",
]);

export type SearchComponent = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  href: string;
  fileName: string;
};

function slugToTitle(slug: string) {
  return slug
    .replace(/\.(tsx|jsx|ts|js)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function titleToSlug(fileName: string) {
  return fileName
    .replace(/\.(tsx|jsx|ts|js)$/i, "")
    .toLowerCase();
}

function categoryToTitle(category: string) {
  const specialNames: Record<string, string> = {
    faq: "FAQ",
    hero: "Hero",
    cursor: "Cursor",
    navbar: "Navbar",
    ui: "UI",
  };

  if (specialNames[category]) {
    return specialNames[category];
  }

  return category
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export async function getSearchComponents(): Promise<SearchComponent[]> {
  const uiDirectory = path.join(
    process.cwd(),
    "src",
    "components",
    "ui",
  );

  let categories;

  try {
    categories = await readdir(uiDirectory, {
      withFileTypes: true,
    });
  } catch (error) {
    console.error("Failed to read UI components directory:", error);
    return [];
  }

  const results: SearchComponent[] = [];

  for (const categoryEntry of categories) {
    if (!categoryEntry.isDirectory()) {
      continue;
    }

    const categorySlug = categoryEntry.name;

    if (
      categorySlug.startsWith("_") ||
      IGNORED_CATEGORIES.has(categorySlug)
    ) {
      continue;
    }

    const categoryDirectory = path.join(
      uiDirectory,
      categorySlug,
    );

    let files;

    try {
      files = await readdir(categoryDirectory, {
        withFileTypes: true,
      });
    } catch (error) {
      console.error(
        `Failed to read category "${categorySlug}":`,
        error,
      );

      continue;
    }

    for (const file of files) {
      if (!file.isFile()) {
        continue;
      }

      if (file.name.startsWith("_")) {
        continue;
      }

      if (IGNORED_FILES.has(file.name)) {
        continue;
      }

      const extension = path.extname(file.name);

      if (!COMPONENT_EXTENSIONS.has(extension)) {
        continue;
      }

      const slug = titleToSlug(file.name);

      results.push({
        slug,
        title: slugToTitle(file.name),
        category: categoryToTitle(categorySlug),
        categorySlug,
        fileName: file.name,
        href: `/components/${categorySlug}#${slug}`,
      });
    }
  }

  return results.sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}