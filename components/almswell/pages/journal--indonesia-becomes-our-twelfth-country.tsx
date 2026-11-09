import type { CSSProperties } from "react";
import { BannerSection6, ContentBlock62, FAQSection4, HeaderScrollTrigger5, NavigationOverlay6, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation, TransitionLayer, UpdateCardSection6, UpdateCardSection7 } from "../sections";

export default function AlmswellPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation />
        <div data-framer-root={""} className={"framer-s2hy9 framer-92BKH framer-2q1sx framer-bXbRS framer-IaPLd framer-SQbye framer-Gdv3s framer-HDWez framer-cfl35 framer-i1VV1 framer-RmOyk framer-1fkofnv"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger5 />
          <BannerSection6 />
          <UpdateCardSection7 />
          <UpdateCardSection6 />
          <FAQSection4 />
          <ContentBlock62 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay6 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
