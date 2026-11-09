import type { CSSProperties } from "react";
import { ContentBlock3, HeaderScrollTrigger, NavigationOverlay, PageOverlay, SecondaryNavigation, Section, SiteBrand, SiteNavigation, TransitionLayer } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation />
        <div data-framer-root={""} className={"framer-t1Vwx framer-cfl35 framer-bXbRS framer-1oo4c3x"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger />
          <Section />
          <ContentBlock3 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
