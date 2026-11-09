import type { CSSProperties } from "react";
import { BannerSection20, ContentBlock72, HeaderScrollTrigger9, HowWeWorkSection3, NavigationOverlay14, PageOverlay, ProgramSection2, SecondaryNavigation, SiteBrand, SiteNavigation7, TransitionLayer, WhatItCostsSection2, WhatItCostsSection3 } from "../sections";

export default function AlmswellPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation7 />
        <div data-framer-root={""} className={"framer-RgW5c framer-SQbye framer-bXbRS framer-PZLxN framer-2q1sx framer-18v06se"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger9 />
          <BannerSection20 />
          <ProgramSection2 />
          <HowWeWorkSection3 />
          <WhatItCostsSection2 />
          <WhatItCostsSection3 />
          <ContentBlock72 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay14 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
