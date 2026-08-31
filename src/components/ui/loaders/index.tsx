"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";
import {
  OrbitSpinnerLoader,
  orbitSpinnerLoaderCode,
} from "./orbit-spinner-loader";
import {
  PulseBarLoader,
  pulseBarLoaderCode,
} from "./pulse-bar-loader";

export default function LoadersShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Glowing Orbit Spinner"
        code={orbitSpinnerLoaderCode}
      >
        <OrbitSpinnerLoader />
      </ComponentViewer>

      <ComponentViewer
        title="Staggered Pulse Wave"
        code={pulseBarLoaderCode}
      >
        <PulseBarLoader />
      </ComponentViewer>
    </div>
  );
}