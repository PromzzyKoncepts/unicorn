import "./impact-statistics.css";

const statistics = [
  { value: "4", suffix: "B+", title: "Lives touched across seven continents", description: "More than four billion lives touched through humanitarian outreach, from emergency relief and healthcare to education and support for families." },
  { value: "2", suffix: "M", title: "Communities transformed", description: "Two million communities reached by efforts that address immediate needs and help build lasting access to essential services and opportunities." },
  { value: "120", suffix: "", title: "Countries reached", description: "Humanitarian work has extended to 120 countries, bringing volunteers and local partners together to respond to community needs." },
  { value: "10", suffix: "M", title: "Acts of kindness", description: "Ten million acts of kindness, from sharing food and supplies to giving time, skills and care." },
  { value: "7", suffix: "", title: "Continents reached across the globe", description: "A global reach spanning all seven continents." },
];

export function ImpactStatistics() {
  return (
    <div className="impact-statistics">
      {statistics.map(({ value, suffix, title, description }) => (
        <div className="impact-statistics-row" key={title}>
          <svg className="impact-statistics-divider" viewBox="0 0 614 7" preserveAspectRatio="none" aria-hidden="true">
            <use href="#svg-987249452_184" />
          </svg>
          <div className="impact-statistics-content">
            <p className="impact-statistics-value" aria-hidden="true">
              {value}{suffix}
            </p>
            <div className="impact-statistics-copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

