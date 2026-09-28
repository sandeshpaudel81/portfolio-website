import { publications } from "@/src/data";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">03 · Publications</p>
          <h2 className="section-title">Research output</h2>
          <p className="section-intro">
            Publications and preprints will be maintained here as the research
            portfolio develops.
          </p>
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

                {publication.link && (
                  <a
                    className="text-link"
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read preprint <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="scholar-note">
          <span>More publications</span>
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