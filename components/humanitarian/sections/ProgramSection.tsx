import Image from "next/image";
import Link from "next/link";
import {
  agencyPath,
  agencyPhoto,
  cofi,
  humanitarianOrganisations,
} from "../cofi-agencies";
import "./agency-grid.css";

export function ProgramSection() {
  return (
    <section className="agency-grid-section" id="agencies" aria-labelledby="agencies-title">
      <header className="agency-grid-intro">
        <p className="agency-grid-eyebrow">Humanitarian Affairs</p>
        <h2 id="agencies-title">Meet the <span>Agencies</span></h2>
        <p>Explore COFI and its seven member agencies, and discover how each organisation serves communities.</p>
      </header>

      <div className="agency-grid-grid">
        {humanitarianOrganisations.map((agency) => {
          const featured = agency.slug === cofi.slug;
          return (
            <Link
              className={featured ? "agency-grid-card agency-grid-featured" : "agency-grid-card"}
              href={agencyPath(agency.slug)}
              key={agency.slug}
            >
              <div className="agency-grid-photo">
                <Image
                  alt=""
                  fill
                  sizes="(min-width: 1100px) 400px, (min-width: 640px) 50vw, 100vw"
                  src={agencyPhoto(agency.slug)}
                />
                <span className="agency-grid-logo">
                  <Image alt="" width={56} height={34} src={agency.logo} />
                </span>
              </div>
              <div className="agency-grid-copy">
                <p className="agency-grid-eyebrow">{featured ? "Featured foundation" : agency.focus}</p>
                <h3>{featured ? "COFI" : agency.name}</h3>
                {featured && <p className="agency-grid-fullName">{agency.name.replace(" (COFI)", "")}</p>}
                <p className="agency-grid-description">{agency.description}</p>
                <span className="agency-grid-action">
                  {featured ? "Explore COFI" : "Explore agency"} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>

     
    </section>
  );
}
