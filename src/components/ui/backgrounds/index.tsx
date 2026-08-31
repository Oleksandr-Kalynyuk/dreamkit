"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";
import {
  DotPatternBackground,
  dotPatternBackgroundCode,
} from "./dot-pattern-background";
import {
  AnimatedGridBackground,
  animatedGridBackgroundCode,
} from "./animated-grid-background";

export default function BackgroundsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Interactive Radial Dot Pattern"
        code={dotPatternBackgroundCode}
      >
        <DotPatternBackground />
      </ComponentViewer>

      <ComponentViewer
        title="Ambient Glowing Grid Background"
        code={animatedGridBackgroundCode}
      >
        <AnimatedGridBackground />
      </ComponentViewer>
    </div>
  );
}