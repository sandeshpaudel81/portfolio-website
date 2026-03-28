'use client'
import { useEffect, useRef } from 'react'

export default function Research() {
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
      id="research"
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
            Research
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(232,162,67,0.2)' }} />
        </div>

        <h2
          className="reveal text-4xl md:text-5xl font-display font-bold mb-16"
          style={{ color: 'var(--white)' }}
        >
          Research &amp;{' '}
          <span style={{ color: 'var(--amber-warm)' }}>Publications</span>
        </h2>

        {/* Published paper */}
        <div
          className="reveal rounded-2xl p-7 md:p-10 mb-8 relative overflow-hidden"
          style={{
            background: 'rgba(216, 216, 216, 0.6)',
            border: '1px solid rgba(232,162,67,0.25)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: 'var(--amber-warm)', transform: 'translate(30%, -30%)' }}
          />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="px-3 py-1 rounded-full text-xs uppercase tracking-widest"
                style={{
                  background: 'rgba(232,162,67,0.12)',
                  color: 'var(--amber-warm)',
                  border: '1px solid rgba(232,162,67,0.3)',
                  fontFamily: 'var(--font-jetbrains)',
                }}
              >
                Preprint · arXiv
              </span>
              <span
                className="text-xs"
                style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
              >
                2024
              </span>
            </div>

            <h3
              className="text-xl md:text-2xl font-display font-bold mb-3"
              style={{ color: 'var(--white)' }}
            >
              Automated Text Extraction from Nepali Citizenship Documents Using YOLOv5 and OCR
            </h3>

            <p
              className="text-sm leading-relaxed mb-6 max-w-3xl"
              style={{ color: 'var(--slate-soft)' }}
            >
              A novel document intelligence pipeline for extracting structured data from Nepali
              citizenship certificates — a low-resource language challenge. The system combines
              YOLOv5 object detection to localise document fields with OCR for text extraction,
              enabling automated digitisation of government identity documents. This work addresses
              a critical infrastructure gap in South Asian digital identity systems.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {['YOLOv5', 'OCR', 'Document AI', 'Computer Vision', 'Low-Resource NLP', 'Python'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded text-xs"
                    style={{
                      background: 'rgba(232,162,67,0.08)',
                      color: 'var(--slate-soft)',
                      border: '1px solid rgba(232,162,67,0.15)',
                      fontFamily: 'var(--font-jetbrains)',
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="https://arxiv.org/pdf/2410.05721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all duration-200"
              style={{
                background: 'var(--amber-warm)',
                color: 'var(--ink-950)',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--amber-light)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--amber-warm)')
              }
            >
              <span>Read Preprint on arXiv</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Current thesis */}
        <div
          className="reveal rounded-2xl p-7 md:p-10 relative overflow-hidden"
          style={{
            background: 'rgba(216, 216, 216, 0.6)',
            border: '1px solid rgba(74,222,128,0.15)',
          }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs uppercase tracking-widest"
              style={{
                background: 'rgba(74,222,128,0.1)',
                color: '#1f6439',
                border: '1px solid rgba(74,222,128,0.3)',
                fontFamily: 'var(--font-jetbrains)',
              }}
            >
              ● Active Thesis
            </span>
            <span
              className="text-xs"
              style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
            >
              Charles Darwin University · 2025–Present
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl font-display font-bold mb-3"
            style={{ color: 'var(--white)' }}
          >
            Chronic Kidney Disease Progression Prediction Using Longitudinal Patient Data
          </h3>

          <p
            className="text-sm leading-relaxed mb-6 max-w-3xl"
            style={{ color: 'var(--slate-soft)' }}
          >
            This thesis investigates the use of LSTM networks to model 10-year longitudinal patient
            records for early CKD progression detection. By integrating XGBoost as an interpretable
            baseline and applying SHAP (SHapley Additive exPlanations) for feature attribution, the
            research aims to produce a clinically actionable and transparent prediction system —
            bridging the gap between black-box deep learning and medical trustworthiness.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Model Architecture', val: 'LSTM + XGBoost' },
              { label: 'Interpretability', val: 'SHAP Values' },
              { label: 'Data Type', val: '10-Year Longitudinal' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ background: 'rgba(232,162,67,0.08)' }}
              >
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
                >
                  {item.label}
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: 'var(--amber-warm)' }}
                >
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}