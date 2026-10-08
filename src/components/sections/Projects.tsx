import { projects } from "@/src/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">02 · Selected work</p>
            <h2 className="section-title">Projects & research</h2>
          </div>
          <p className="section-intro">
            Research projects first, then applied work. Each research project links to its code.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-number">{project.id}</div>

              <div className="project-main">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                {project.result && (
                  <p className="project-description">
                    <strong>Result: </strong>
                    {project.result}
                  </p>
                )}

                {project.links.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", columnGap: 20 }}>
                    {project.links.map((l) => (
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
      </div>
    </section>
  );
}