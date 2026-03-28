'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    id: '01',
    title: 'CKD Progression Prediction',
    subtitle: 'Masters Thesis — Current',
    tags: ['LSTM', 'XGBoost', 'SHAP', 'PyTorch', 'Clinical AI'],
    description:
      'Predicting Chronic Kidney Disease progression using 10-year longitudinal patient records. Employs LSTM for temporal sequence modelling, XGBoost for baseline comparisons, and SHAP values for clinical interpretability — making the model transparent enough for medical decision support.',
    status: 'active',
    link: null,
  },
  {
    id: '02',
    title: 'Nepali Citizenship OCR System',
    subtitle: 'Major Project — B.E. Final Year',
    tags: ['YOLOv5', 'OCR', 'Computer Vision', 'Python', 'Deep Learning'],
    description:
      'An AI pipeline to extract structured text data from Nepali citizenship documents using YOLOv5 for field detection and OCR for text extraction. Addresses the challenge of low-resource language document processing. Research preprint published on arXiv.',
    status: 'published',
    link: 'https://arxiv.org/pdf/2410.05721',
  },
  {
    id: '03',
    title: 'NSW Road Crash Analytics Dashboard',
    subtitle: 'Data Analytics — Power BI',
    tags: ['Power BI', 'Data Analytics', 'NSW Government Data', 'Visualisation'],
    description:
      'A 3-page interactive Power BI dashboard built on real NSW Government crash datasets. Provides granular insights into crash patterns by time, location, severity, and contributing factors — demonstrating end-to-end analytics capability from raw data to executive-level reporting.',
    status: 'complete',
    link: null,
  },
  {
    id: '04',
    title: 'College Management System',
    subtitle: 'Minor Project — B.E. 3rd Year',
    tags: ['Full Stack', 'Django', 'Database Design', 'Team Project'],
    description:
      'A fully functional college management platform built with a team. Subsystems include attendance management, exam and result management, student records, routine scheduling, and notice boards — covering the complete academic lifecycle of an institution.',
    status: 'complete',
    link: null,
  },
]

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  active: { label: 'Active', color: '#4ade80', bg: 'rgba(74,222,128,0.1)' },
  published: { label: 'Published', color: 'var(--amber-warm)', bg: 'rgba(232,162,67,0.1)' },
  complete: { label: 'Completed', color: 'var(--slate-muted)', bg: 'rgba(132,148,176,0.1)' },
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
          >
            Projects
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(232,162,67,0.2)' }} />
        </div>

        <h2
          className="reveal text-4xl md:text-5xl font-display font-bold mb-4"
          style={{ color: 'var(--white)' }}
        >
          What I&apos;ve{' '}
          <span style={{ color: 'var(--amber-warm)'}}>Built</span>
        </h2>
        <p
          className="reveal text-base mb-16 max-w-xl"
          style={{ color: 'var(--slate-muted)' }}
        >
          A chronicle of projects that define my technical growth from 
          software development to data science and AI research.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured project — spans full width */}
          <div
            className="reveal lg:col-span-2 rounded-2xl p-7 md:p-10 relative overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(232,162,67,0.1)',
              border: '1px solid rgba(232,162,67,0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(ellipse at top left, rgba(232,162,67,0.05) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-5xl font-display font-bold"
                    style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
                  >
                    {projects[0].id}
                  </span>
                  <div
                    className="px-2.5 py-1 rounded text-xs"
                    style={{
                      background: statusConfig[projects[0].status].bg,
                      color: statusConfig[projects[0].status].color,
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    ● {statusConfig[projects[0].status].label}
                  </div>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-display font-bold mb-1"
                  style={{ color: 'var(--white)' }}
                >
                  {projects[0].title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--amber-warm)' }}>
                  {projects[0].subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--slate-soft)' }}
                >
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs"
                      style={{
                        background: 'rgba(232,162,67,0.08)',
                        color: 'var(--slate-soft)',
                        border: '1px solid rgba(232,162,67,0.15)',
                        fontFamily: 'var(--font-jetbrains)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Remaining projects */}
          {projects.slice(1).map((proj) => (
            <div
              key={proj.id}
              className="reveal rounded-2xl p-6 group relative overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(232,162,67,0.1)',
                border: '1px solid rgba(232,162,67,0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(232,162,67,0.25)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(232,162,67,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-3xl font-display font-bold"
                  style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
                >
                  {proj.id}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="px-2.5 py-1 rounded text-xs"
                    style={{
                      background: statusConfig[proj.status].bg,
                      color: statusConfig[proj.status].color,
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    {statusConfig[proj.status].label}
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 rounded transition-colors"
                      style={{
                        background: 'rgba(232,162,67,0.12)',
                        color: 'var(--amber-warm)',
                        border: '1px solid rgba(232,162,67,0.25)',
                      }}
                    >
                      View Preprint ↗
                    </a>
                  )}
                </div>
              </div>
              <h3
                className="text-lg font-display font-bold mb-1"
                style={{ color: 'var(--white)' }}
              >
                {proj.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: 'var(--amber-warm)' }}>
                {proj.subtitle}
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--slate-muted)' }}
              >
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      background: 'rgba(232,162,67,0.06)',
                      color: 'var(--slate-muted)',
                      border: '1px solid rgba(232,162,67,0.1)',
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}