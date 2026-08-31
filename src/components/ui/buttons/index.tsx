"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";

import {
  ShimmerBorderButton,
  shimmerBorderButtonCode,
} from "./shimmer-border-button";

import {
  GlowPulseButton,
  glowPulseButtonCode,
} from "./glow-pulse-button";

import {
  InteractiveSlideButton,
  interactiveSlideButtonCode,
} from "./interactive-slide-button";

export default function ButtonsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Shimmer Border Button"
        code={shimmerBorderButtonCode}
      >
        <ShimmerBorderButton />
      </ComponentViewer>

      <ComponentViewer
        title="Glow Pulse Button"
        code={glowPulseButtonCode}
      >
        <GlowPulseButton />
      </ComponentViewer>

      <ComponentViewer
        title="Interactive Slide Button"
        code={interactiveSlideButtonCode}
      >
        <InteractiveSlideButton />
      </ComponentViewer>
    </div>
  );
}