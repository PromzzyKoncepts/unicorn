import type { CSSProperties } from "react";
import { BannerSection15, ContentBlock8, HeaderScrollTrigger8, HowWeWorkSection2, NavigationOverlay9, OurApproachSection, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation3, THeProblemSection, TransitionLayer, UpdatesSection2, WhatItCostsSection } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation3 />
        <div data-framer-root={""} className={"framer-wdM5U framer-SQbye framer-bXbRS framer-2q1sx framer-cfl35 framer-i1VV1 framer-PZLxN framer-12n9oii"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger8 />
          <BannerSection15 />
          <THeProblemSection />
          <OurApproachSection />
          <WhatItCostsSection />
          <HowWeWorkSection2 />
          <UpdatesSection2 />
          <ContentBlock8 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay9 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
