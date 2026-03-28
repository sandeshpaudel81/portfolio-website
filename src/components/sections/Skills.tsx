'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'ML & AI', icon: '🤖',
    skills: ['Scikit-learn', 'PyTorch', 'XGBoost', 'LSTM / RNN / GRU', 'Transformers', 'Attention Mechanisms', 'YOLOv5', 'Deep Learning'],
  },
  {
    category: 'Data Science', icon: '📊',
    skills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Data Visualisation', 'SQL', 'SHAP', 'NLP', 'LLM Concepts'],
  },
  {
    category: 'Engineering', icon: '💻',
    skills: ['Django', 'HTML / CSS', 'JavaScript', 'Git', 'REST APIs', 'Software Engineering', 'Project Management'],
  },
]

const certifications = [
  { title: 'Machine Learning Specialisation', issuer: 'Coursera · Andrew Ng', year: '2023' },
  { title: 'Deep Learning Specialisation', issuer: 'Coursera · Andrew Ng', year: '2023' },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-12">
          <span style={{ fontSize: '0.68rem', color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Skills</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>

        <h2 className="reveal font-display font-bold mb-12" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--text-head)' }}>
          Technical <em style={{ color: 'var(--amber-warm)', fontStyle: 'italic' }}>Skills</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal rounded-xl p-5" style={{ background: 'rgba(232,162,67,0.1)', border: '1px solid var(--amber-border)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                <h3 style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--amber-warm)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg"
                    style={{ fontSize: '0.76rem', color: 'var(--text-body)', background: 'rgba(255,255,255,0.65)', border: '1px solid var(--amber-border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="reveal">
          <h3 className="font-display font-semibold mb-4" style={{ fontSize: '1rem', color: 'var(--text-head)' }}>Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(232,162,67,0.1)', border: '1px solid var(--amber-border)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,162,67,0.25)', color: 'var(--amber-warm)', fontSize: '0.75rem' }}>✓</div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-head)' }}>{cert.title}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>{cert.issuer} · {cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}