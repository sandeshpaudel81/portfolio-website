import { publications } from "@/src/data";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">03 · Publications</p>
          <h2 className="section-title">Research output</h2>
          <p className="section-intro">Preprints and reports.</p>
        </div>

        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={`${publication.title}-${index}`}>
              <span className="publication-year">{publication.year}</span>

              <div className="publication-body">
                <span className="publication-type">{publication.type}</span>
                <h3>{publication.title}</h3>
                <p>{publication.authors}</p>
                <p className="publication-venue">{publication.venue}</p>

                {publication.links.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", columnGap: 20 }}>
                    {publication.links.map((l) => (
                      <a className="text-link" key={l.url} href={l.url} target="_blank" rel="noreferrer">
                        {l.label} <span>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="scholar-note">
          <span>Profile</span>
          <a
            href="https://scholar.google.com/citations?hl=en&user=xyNBkewAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            View Google Scholar profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}