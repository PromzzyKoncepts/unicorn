import type { CSSProperties } from "react";
import { BannerSection, BrandsSection, ContentBlock10, FeatureSection, HeaderScrollTrigger2, NavigationOverlay2, OurStorySection, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation2, TeamSection, TransitionLayer, WhatWeHoldToSection, WhereWeWorkSection, WhyWeExitSection } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation2 />
        <div data-framer-root={""} className={"framer-jYP8A framer-SQbye framer-bXbRS framer-2q1sx framer-UkoXH framer-PZLxN framer-i1VV1 framer-1x2jbp7"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger2 />
          <BannerSection />
          <OurStorySection />
          <WhyWeExitSection />
          <FeatureSection />
          <WhatWeHoldToSection />
          <TeamSection />
          <WhereWeWorkSection />
          <BrandsSection />
          <ContentBlock10 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay2 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
