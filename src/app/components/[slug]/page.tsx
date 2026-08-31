import { notFound } from "next/navigation";
import { componentsRegistry } from "@/lib/registry";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const componentData = componentsRegistry[slug];

  if (!componentData) {
    notFound();
  }

  const { title, description, Component } = componentData;

  return (
    <div className="w-full max-w-6xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
        <p className="mt-2 text-zinc-400 text-sm">{description}</p>
      </div>

      {Component ? (
        // No wrapping ComponentViewer here on purpose — every component
        // in src/components/ui/** owns its own ComponentViewer(s) internally,
        // the same way AnimatedButtons does. This page just renders it.
        <Component />
      ) : (
        <div className="p-12 border border-zinc-800 rounded-2xl bg-zinc-950/50 text-center text-zinc-600 font-mono text-sm">
          [{slug}] — coming soon
        </div>
      )}
    </div>
  );
}