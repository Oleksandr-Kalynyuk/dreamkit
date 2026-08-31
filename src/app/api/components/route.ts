import { NextResponse } from "next/server";

import { getSearchComponents } from "@/lib/component-search";

export const runtime = "nodejs";

export async function GET() {
  try {
    const components = await getSearchComponents();

    return NextResponse.json(components, {
      headers: {
        "Cache-Control":
          "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Component search API failed:", error);

    return NextResponse.json(
      {
        error: "Failed to load components.",
        components: [],
      },
      {
        status: 500,
      },
    );
  }
}