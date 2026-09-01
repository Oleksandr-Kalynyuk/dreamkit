import MainHero from "@/components/shared/mainhero";
import { LiveShowcase } from "@/components/shared/live-showcase";
import Newsletter from "@/components/shared/newsletter";
import { FAQ }  from "@/components/shared/faq";
import { Footer }   from "@/components/shared/footer";

export default function HomePage() {
  return (
    <>
      <MainHero />
      <LiveShowcase />
      <Newsletter />
      <FAQ />
      <Footer />
    </>
  );
}