import type { CSSProperties } from "react";
import { BannerSection21, ColorSection, ContentBlock52, HeaderScrollTrigger10, NavigationOverlay15, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation, TextGuideSection, TransitionLayer } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation />
        <div data-framer-root={""} className={"framer-ZIED5 framer-bXbRS framer-SQbye framer-2q1sx framer-HDWez framer-haazq1"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger10 />
          <BannerSection21 />
          <TextGuideSection />
          <ColorSection />
          <ContentBlock52 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay15 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
