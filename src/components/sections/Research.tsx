import { education, researchInterests, skills } from "@/src/data";

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">01 · Research</p>
          <h2 className="section-title">Research interests</h2>
          <p className="section-intro">
            My work sits at the intersection of artificial intelligence,
            data science and health informatics, with an interest in building
            useful and interpretable systems from complex real-world data.
          </p>
        </div>

        <div className="research-layout">
          <div className="interest-list">
            {researchInterests.map((interest, index) => (
              <div className="interest" key={interest}>
                <span>0{index + 1}</span>
                <strong>{interest}</strong>
              </div>
            ))}
          </div>

          <div className="education-panel">
            <p className="eyebrow">Education</p>
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </div>
              </article>
            ))}

            <div className="skill-mini">
              <p className="eyebrow">Technical toolkit</p>
              <div className="tag-list">
                {skills.slice(0, 8).map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}