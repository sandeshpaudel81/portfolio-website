import Section from "@/src/components/Section";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I’m Sandesh Paudel
        </h1>
        <p className="text-lg max-w-2xl text-gray-600">
          Data Science graduate student with experience in full-stack
          development, analytics, and building real-world projects.
        </p>
      </section>

      <Section id="about" title="About Me">
        <p className="max-w-3xl text-gray-700">
          {/* We’ll refine content later */}
          I am a Master of Data Science student at Charles Darwin University
          with hands-on experience in data analytics, software development,
          and cloud-based solutions.
        </p>
      </Section>

      <Section id="education" title="Education">
        <p>Education timeline goes here.</p>
      </Section>

      <Section id="experience" title="Experience">
        <p>Professional experience goes here.</p>
      </Section>

      <Section id="projects" title="Projects">
        <p>Project cards will go here.</p>
      </Section>

      <Section id="publications" title="Publications">
        <p>Research, reports, or articles.</p>
      </Section>

      <Section id="skills" title="Skills">
        <p>Technical and professional skills.</p>
      </Section>

      <Section id="contact" title="Contact">
        <p>Email, LinkedIn, GitHub, contact form.</p>
      </Section>
    </>
  );
}
