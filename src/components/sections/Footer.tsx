import { profile, skills } from "@/src/data";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact-block">
          <p className="eyebrow">04 · Contact</p>
          <h2>Collaborate</h2>
          <p>
            I am interested in research opportunities and conversations around
            AI, data science, health informatics and medical AI.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.links.scholar} target="_blank" rel="noreferrer">Scholar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}