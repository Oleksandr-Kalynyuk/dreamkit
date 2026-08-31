import { ComponentType } from "react";
import  AnimatedButtons from "@/components/ui/buttons/index";
import CursorsShowcase from "@/components/ui/cursor/index";
import CardsShowcase from "@/components/ui/cards/index";
import Backgrounds from "@/components/ui/backgrounds/index";
import Loaders from "@/components/ui/loaders/index";
import { HeroSection } from "@/components/ui/hero/split-hero";

export interface ComponentMeta {
  slug: string;
  title: string;
  description: string;
  Component?: ComponentType; 
}

export const componentsRegistry: Record<string, ComponentMeta> = {
  featured: {
    slug: "featured",
    title: "Featured Components",
    description: "Hand-picked, high-impact components engineered to elevate your app instantly.",
  },
  hero: {
    slug: "hero",
    title: "Hero Sections",
    description: "Attention-grabbing landing page heroes equipped with smooth motion and ambient glows.",
    Component: HeroSection,
  },
  cursor: {
  slug: "cursor",
  title: "Custom Cursors",
  description: "Interactive cursor effects and fluid trail animations for hyper-engaging UIs.",
  Component: CursorsShowcase,
  },
  buttons: {
    slug: "buttons",
    title: "Animated Buttons",
    description: "Production-ready buttons featuring subtle glows, hover effects, and animated borders.",
    Component: AnimatedButtons,
  },
  cards: {
    slug: "cards",
    title: "3D & Glass Cards",
    description: "Sleek 3D tilt interaction, frosted glassmorphism, and dynamic content wrappers.",
    Component: CardsShowcase
  },
  backgrounds: {
    slug: "backgrounds",
    title: "Background Effects",
    description: "Subtle grid lines, animated particle fields, and dynamic background canvases.",
    Component: Backgrounds
  },
  loaders: {
    slug: "loaders",
    title: "Loaders & Spinners",
    description: "Minimalist feedback indicators and fluid loading state animations.",
    Component: Loaders
  },
};