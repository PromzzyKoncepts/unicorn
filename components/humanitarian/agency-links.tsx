import { cofiAgencies } from "./cofi-agencies";

export function AgencyLinks() {
  return (
    <>
      {cofiAgencies.map(({ name, website }, index) => (
        <span key={name}>
          {index > 0 ? " · " : ""}
          <a className="underline underline-offset-2" href={website}>{name}</a>
        </span>
      ))}
    </>
  );
}
