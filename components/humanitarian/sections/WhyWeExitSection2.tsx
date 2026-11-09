import { ImpactStatistics } from "./ImpactStatistics";
import type { CSSProperties } from "react";
import "./why-we-serve.css";

export function WhyWeExitSection2() {
  return (
    <section className={"framer-p0odr1"} data-framer-name={"Why We Exit Section"}>
      <div className={"framer-1duu02u"} data-framer-name={"Container"}>
        <div className={"framer-1pq31p2"} data-framer-name={"Content Wrapper"}>
          <article className="framer-12fdne1 why-we-serve" aria-labelledby="why-we-serve-title">
            <img
              className="why-we-serve-photo"
              src="https://framerusercontent.com/images/fx5N2XLGZrmyDbC1j5z6axCvM.png?scale-down-to=1024"
              alt="Volunteers sorting donated food and supplies"
              width={1224}
              height={1516}
              loading="lazy"
              decoding="async"
            />
            <div className="why-we-serve-copy">
              <p className="why-we-serve-label">Our purpose</p>
              <h2 id="why-we-serve-title">Why We Serve</h2>
              <p>Access to clean water, education, and a reliable income shapes what families can do each day. A long walk for water can keep a child out of school. When income is limited, basic supplies and school costs become harder to afford.</p>
              <p>These needs are connected. That is why we bring practical relief and longer-term community support together.</p>
            </div>
          </article>
          <div
            className={"framer-1y1aakn"}
            data-framer-name={"Stats Block"}
            data-entrance={""}
            style={{ "--entrance-transform": "translateX(60px)" } as CSSProperties}
          >
            <div className={"framer-13s3fkg"} data-framer-name={"Title Block"}>
              <div className={"framer-1pbo0nt"} data-framer-name={"Badge"} style={{ "transform": "none" } as CSSProperties}>
                <p className={"framer-text framer-styles-preset-16bu461"} data-styles-preset={"uLy1T6TXE"} dir={"auto"}>{"Why We Serve"}</p>
              </div>
              <div className={"framer-15arexk"} data-framer-name={"Title"} style={{ "transform": "none" } as CSSProperties}>
                <h2 className={"framer-text framer-styles-preset-16wn81v"} data-styles-preset={"Js1sgSsvo"} dir={"auto"}>{"Hope Begins With Access."}</h2>
              </div>
            </div>
            <div className={"framer-1pr59ak"} data-framer-name={"Widgets Block"}>
              <ImpactStatistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
