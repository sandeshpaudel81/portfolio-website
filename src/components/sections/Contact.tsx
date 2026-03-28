'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'rgba(13,20,36,0.5)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal flex items-center gap-4 mb-16 justify-center">
          <div className="flex-1 h-px max-w-24" style={{ background: 'rgba(232,162,67,0.2)' }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
          >
            Contact
          </span>
          <div className="flex-1 h-px max-w-24" style={{ background: 'rgba(232,162,67,0.2)' }} />
        </div>

        <h2
          className="reveal text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
          style={{ color: 'var(--white)' }}
        >
          Let&apos;s{' '}
          <em style={{ color: 'var(--amber-warm)', fontStyle: 'italic' }}>Connect</em>
        </h2>

        <p
          className="reveal text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--slate-soft)' }}
        >
          I am actively exploring PhD opportunities in machine learning, clinical AI, and data
          science. If you are a researcher, academic supervisor, or industry partner — I would love
          to hear from you.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:sandeshpaudel@example.com"
            className="px-8 py-3.5 rounded text-sm font-medium transition-all duration-200"
            style={{ background: 'var(--amber-warm)', color: 'var(--ink-950)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'var(--amber-light)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = 'var(--amber-warm)')
            }
          >
            Send an Email
          </a>
          <a
            href="https://linkedin.com/in/sandeshpaudel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded text-sm font-medium transition-all duration-200"
            style={{
              border: '1px solid rgba(232,162,67,0.35)',
              color: 'var(--amber-warm)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(232,162,67,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sandeshpaudel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded text-sm font-medium transition-all duration-200"
            style={{
              border: '1px solid rgba(180,194,218,0.2)',
              color: 'var(--slate-soft)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(180,194,218,0.06)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
            }}
          >
            GitHub
          </a>
        </div>

        {/* PhD interest callout */}
        <div
          className="reveal rounded-2xl p-6 md:p-8 text-left"
          style={{
            background: 'rgba(19,29,53,0.7)',
            border: '1px solid rgba(232,162,67,0.2)',
          }}
        >
          <h3
            className="text-lg font-display font-bold mb-3"
            style={{ color: 'var(--amber-warm)' }}
          >
            🎯 PhD Research Interests
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--slate-soft)' }}>
            I am particularly interested in PhD programmes that explore:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Clinical AI & Health Informatics',
              'Interpretable / Explainable ML',
              'Longitudinal Data Modelling',
              'NLP for Low-Resource Languages',
              'Deep Learning for Time-Series',
              'AI for Developing Regions',
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-2">
                <span style={{ color: 'var(--amber-dim)' }}>›</span>
                <span className="text-sm" style={{ color: 'var(--slate-soft)' }}>
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}