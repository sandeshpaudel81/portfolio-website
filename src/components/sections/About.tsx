'use client'
import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)' }}
          >
            WHO AM I?
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(232,162,67,0.2)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6 leading-snug"
              style={{ color: 'var(--white)' }}
            >
              From the Hills of{' '}
              <span style={{ color: 'var(--amber-warm)' }}>Nepal</span>{' '}
              to {' '}
              <span style={{ color: 'var(--amber-warm)' }}>Australia</span>
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--slate-soft)' }}
            >
              <p>
                I am Sandesh Paudel — a computer engineer turned data scientist, originally
                from Nepal. My journey in technology began with curiosity about how websites are built, 
                which grew into a deep passion for machine learning and data-driven research.
              </p>
              <p>
                After completing my Bachelor of Computer Engineering at{' '}
                <strong style={{ color: 'var(--amber-light)' }}>Tribhuvan University</strong>,
                I relocated to Sydney, Australia to pursue a{' '}
                <strong style={{ color: 'var(--amber-light)' }}>
                  Master of Data Science at Charles Darwin University
                </strong>
                . Now my research focuses on AI — specifically data driven models for healthcare applications, 
                with a thesis on predicting Chronic Kidney Disease progression using longitudinal patient data
                and interpretable deep learning.
              </p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🎓',
                title: 'Academic Excellence',
                desc: 'B.E. Computer Engineering (TU) + M.Data Science (CDU)',
              },
              {
                icon: '🔬',
                title: 'Active Researcher',
                desc: 'CKD prediction thesis + published preprint on Nepali OCR',
              },
              {
                icon: '🌏',
                title: 'Global Perspective',
                desc: 'Bridging South Asian context with Australian academic standards',
              },
              {
                icon: '🏔️',
                title: 'Roots & Drive',
                desc: 'Beni, Myagdi — small town origins powering big research ambitions',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-5 transition-all duration-300"
                style={{
                  background: 'rgba(232,162,67,0.1)',
                  border: '1px solid rgba(232,162,67,0.1)',
                }}
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3
                  className="text-sm font-semibold mb-2 uppercase tracking-wide"
                  style={{ color: 'var(--amber-warm)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--slate-muted)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}