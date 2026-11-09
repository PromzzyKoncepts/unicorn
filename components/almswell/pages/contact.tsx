import type { CSSProperties } from "react";
import { ContactCardSection, ContactSection, ContentBlock6, FAQSection, HeaderScrollTrigger3, NavigationOverlay3, PageOverlay, SecondaryNavigation, SiteBrand, SiteNavigation3, TransitionLayer, WhereWeAreSection } from "../sections";

export default function AlmswellPage() {
  return (
    <div id="main" className="relative">
      <div className="framer-Ne0eW framer-8xjinf">
        <SiteNavigation3 />
        <div data-framer-root={""} className={"framer-5QU5i framer-IaPLd framer-SQbye framer-bXbRS framer-i1VV1 framer-RmOyk framer-q34SD framer-2lqcM framer-2q1sx framer-wgp20r"} style={{ "minHeight": "100vh", "width": "auto", "display": "contents" } as CSSProperties}>
          <HeaderScrollTrigger3 />
          <ContactSection />
          <ContactCardSection />
          <WhereWeAreSection />
          <FAQSection />
          <ContentBlock6 />
        </div>
        <PageOverlay />
        <TransitionLayer />
        <SecondaryNavigation />
        <NavigationOverlay3 />
        <SiteBrand />
      </div>
      <div id="template-overlay" />
    </div>
  );
}
