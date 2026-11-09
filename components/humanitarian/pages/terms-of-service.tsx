import type { CSSProperties } from "react";
import { BannerSection22, ContentBlock4, ContentSection4, HeaderScrollTrigger7, NavigationOverlay16, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation3, TransitionLayer } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation3 />
        <div data-framer-root={""} className={"framer-DjUwA framer-bXbRS framer-SQbye framer-PZLxN framer-2q1sx framer-Gdv3s framer-HDWez framer-cfl35 framer-i1VV1 framer-qtde9l"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger7 />
          <BannerSection22 />
          <ContentSection4 />
          <ContentBlock4 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay16 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
