'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    period: 'Feb 2025 — Present',
    degree: 'Master of Data Science',
    institution: 'Charles Darwin University',
    location: 'Sydney, Australia',
    status: 'current',
    highlights: [
      'Currently in 3rd semester',
      'Core: Data Science, Machine Learning, Deep Learning, Research Methods',
      'Thesis: CKD prediction using 10-year longitudinal patient data',
      'NLP, LLM architectures, PyTorch frameworks',
      'Power BI analytics — NSW Crash Data 3-page dashboard',
    ],
  },
  {
    period: '2019 — 2024',
    degree: 'Bachelor of Computer Engineering',
    institution: 'Tribhuvan University',
    location: 'Nepal',
    status: 'complete',
    highlights: [
      'Core: DSA, Applied Mathematics, Database Systems, Software Engineering',
      'Specialisations: Machine Learning, AI, Data Mining, Project Management',
      'Minor Project: Full-stack College Management System (3rd year)',
      'Major Project: Nepali Citizenship OCR using YOLOv5 (4th year) — preprint published',
      'Coursera ML & Deep Learning Specialisation with Andrew Ng',
    ],
  },
]

export default function Education() {
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
    <section
      id="education"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'rgba(232,162,67,0.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
          >
            Education
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(232,162,67,0.2)' }} />
        </div>

        <h2
          className="reveal text-4xl md:text-5xl font-display font-bold mb-16"
          style={{ color: 'var(--white)' }}
        >
          Academic{' '}
          <span style={{ color: 'var(--amber-warm)' }}>Journey</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="reveal relative pl-8 pb-8"
              style={{
                borderLeft: '1px solid rgba(232,162,67,0.2)',
              }}
            >
              {/* Dot */}
              <div
                className="absolute -left-2 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{
                  background: edu.status === 'current' ? 'var(--amber-warm)' : 'var(--ink-900)',
                  borderColor: 'var(--amber-warm)',
                }}
              >
                {edu.status === 'current' && (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--ink-950)', animation: 'pulse 2s infinite' }}
                  />
                )}
              </div>

              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: 'rgba(216, 216, 216, 0.6)',
                  border: `1px solid ${edu.status === 'current' ? 'rgba(232,162,67,0.25)' : 'rgba(232,162,67,0.08)'}`,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <span
                      className="text-xs tracking-widest uppercase mb-2 block"
                      style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {edu.period}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-display font-bold"
                      style={{ color: 'var(--white)' }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="mt-1" style={{ color: 'var(--amber-warm)' }}>
                      {edu.institution} &mdash;{' '}
                      <span style={{ color: 'var(--slate-muted)' }}>{edu.location}</span>
                    </p>
                  </div>
                  {edu.status === 'current' && (
                    <span
                      className="px-3 py-1 text-xs rounded-full uppercase tracking-widest"
                      style={{
                        background: 'rgba(232,162,67,0.12)',
                        color: 'var(--amber-warm)',
                        border: '1px solid rgba(232,162,67,0.3)',
                        fontFamily: 'var(--font-jetbrains)',
                      }}
                    >
                      In Progress
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span style={{ color: 'var(--amber-dim)', marginTop: '4px', flexShrink: 0 }}>›</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--slate-soft)' }}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}