import type { CSSProperties } from "react";
import { BannerSection13, ContentBlock5, FAQSection5, FormalReportingSection, HeaderScrollTrigger6, NavigationOverlay7, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation6, TransitionLayer, UpdateCardSection16 } from "../sections";

export default function MinistryPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation6 />
        <div data-framer-root={""} className={"framer-jsKLm framer-92BKH framer-SQbye framer-bXbRS framer-2q1sx framer-1dmbv6a"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger6 />
          <BannerSection13 />
          <UpdateCardSection16 />
          <FormalReportingSection />
          <ContentBlock5 />
          <FAQSection5 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay7 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
