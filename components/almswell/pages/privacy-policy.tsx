import type { CSSProperties } from "react";
import { BannerSection14, ContentBlock4, ContentSection3, HeaderScrollTrigger7, NavigationOverlay8, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation3, TransitionLayer } from "../sections";

export default function AlmswellPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation3 />
        <div data-framer-root={""} className={"framer-DjUwA framer-bXbRS framer-SQbye framer-PZLxN framer-2q1sx framer-Gdv3s framer-HDWez framer-cfl35 framer-i1VV1 framer-qtde9l"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger7 />
          <BannerSection14 />
          <ContentSection3 />
          <ContentBlock4 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay8 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
