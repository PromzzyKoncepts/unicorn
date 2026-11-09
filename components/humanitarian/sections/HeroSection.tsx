import type { CSSProperties } from "react";

export function HeroSection() {
  return (
    <section className={"framer-17bdsq4"} data-framer-name={"Hero Section"}>
      <div
        className={"framer-1yu2ksj"}
        data-framer-name={"Background Image Wrapper"}
        data-entrance={""}
        style={{ "--entrance-transform": "scale(1.1)" } as CSSProperties}
      >
        <div className={"framer-1405z5p"} data-framer-name={"Oervlay"} />
        <div className={"framer-1bmf9wi"} data-framer-name={"Image"}>
          <div
            data-framer-background-image-wrapper={"true"}
            className={"absolute top-0 right-0 bottom-0 left-0"}
            style={{ "borderRadius": "inherit", "cornerShape": "inherit" } as CSSProperties}
          >
            <img
              decoding={"async"}
              width={"5760"}
              height={"1845"}
              sizes={"(min-width: 1440px) 100vw, (min-width: 1200px) and (max-width: 1439.98px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"}
              srcSet={"https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?scale-down-to=512&width=5760&height=1845 512w,https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?scale-down-to=1024&width=5760&height=1845 1024w,https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?scale-down-to=2048&width=5760&height=1845 2048w,https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?scale-down-to=4096&width=5760&height=1845 4096w,https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?width=5760&height=1845 5760w"}
              src={"https://framerusercontent.com/images/mzsyOF7yJcdXL64g3UdbhyVl1E.png?width=5760&height=1845"}
              alt={"Image"}
              className={"block w-full h-full object-center object-cover"}
              style={{ "borderRadius": "inherit", "cornerShape": "inherit" } as CSSProperties}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
