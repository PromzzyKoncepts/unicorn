import type { CSSProperties } from "react";
import { BannerSection2, ContentBlock7, DonateCardSection, FAQSection2, FeatureCardSection, FeatureCardSection2, HeaderScrollTrigger4, NavigationOverlay4, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation4, TransitionLayer } from "../sections";

export default function AlmswellPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation4 />
        <div data-framer-root={""} className={"framer-oJxFm framer-bXbRS framer-SQbye framer-2q1sx framer-k68fso"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger4 />
          <BannerSection2 />
          <DonateCardSection />
          <FeatureCardSection />
          <FeatureCardSection2 />
          <FAQSection2 />
          <ContentBlock7 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay4 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
