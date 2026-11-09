import type { CSSProperties } from "react";
import { BrandsSection2, ContentBlock13, ContentSection, ContentSection2, FAQSection3, HeroSection, HowWeWorkSection, IMPACTSection, NavigationOverlay5, PageOverlay, ProgramSection, SecondaryNavigation, SiteBrand, SiteNavigation5, TestimonialSection, TransitionLayer, TransparencySection, UpdatesSection, WhyWeExitSection2 } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation5 />
        <div data-framer-root={""} className={"framer-hnwhV framer-SQbye framer-bXbRS framer-PZLxN framer-cfl35 framer-2q1sx framer-i1VV1 framer-UkoXH framer-Gdv3s framer-RmOyk framer-72rtr7"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeroSection />
          <ContentSection />
          <BrandsSection2 />
          <WhyWeExitSection2 />
          <IMPACTSection />
          <ContentSection2 />
          <HowWeWorkSection />
          <ProgramSection />
          <TransparencySection />
          <TestimonialSection />
          <UpdatesSection />
          <FAQSection3 />
          <ContentBlock13 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay5 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
