"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";
import { GlowCard, glowCardCode } from "./glow-card";
import { MetricStatCard, metricStatCardCode } from "./metric-card";
import {
  GlowMetricCard,
  glowMetricCardCode,
} from "./glow-metric-card";

export default function CardsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer title="Interactive Glow Card" code={glowCardCode}>
        <GlowCard />
      </ComponentViewer>

      <ComponentViewer title="Bento Metric Card" code={metricStatCardCode}>
        <MetricStatCard />
      </ComponentViewer>

      <ComponentViewer
        title="Glow Metric Card"
        code={glowMetricCardCode}
      >
        <GlowMetricCard />
      </ComponentViewer>
    </div>
  );
}