"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";
import {
  FluidGlowCursor,
  fluidGlowCursorCode,
} from "./fluid-glow-cursor";
import {
  InteractiveRingCursor,
  interactiveRingCursorCode,
} from "./interactive-ring-cursor";

export default function CursorsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Fluid Glow Cursor"
        code={fluidGlowCursorCode}
      >
        <FluidGlowCursor />
      </ComponentViewer>

      <ComponentViewer
        title="Interactive Ring Cursor"
        code={interactiveRingCursorCode}
      >
        <InteractiveRingCursor />
      </ComponentViewer>
    </div>
  );
}