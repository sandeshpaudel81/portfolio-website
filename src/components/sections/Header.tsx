import Image from "next/image";
import {
  education,
  profile,
  researchInterests,
  skills,
} from "@/src/data"

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            <span>SP</span>
            <strong>Sandesh Prasad Paudel</strong>
          </a>

          <nav aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Academic profile · Sydney, Australia</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.headline}</p>
            <p className="hero-bio">{profile.bio}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore research
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
            </div>

            <div className="social-links">
              <a href={profile.links.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-aside">
            <div className="photo-frame">
              <Image
                src={profile.photo}
                alt="Professional photo placeholder for Sandesh Prasad Paudel"
                fill
                priority
                sizes="(max-width: 800px) 70vw, 330px"
              />
            </div>

            <div className="hero-meta">
              <div>
                <span>Current</span>
                <strong>{education[0].degree}</strong>
                <small>{education[0].institution}</small>
              </div>
              <div>
                <span>Research focus</span>
                <strong>{researchInterests.slice(0, 2).join(" · ")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="container quick-grid">
          <div>
            <span>Education</span>
            <strong>{education[0].degree}</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div>
            <span>Technical interests</span>
            <strong>{skills.slice(0, 3).join(" · ")}</strong>
          </div>
        </div>
      </section>
    </>
  );
}