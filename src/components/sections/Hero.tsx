'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,162,67,${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(232,162,67,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 60%, rgba(26,40,71,0.8) 0%, var(--ink-950) 70%)',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Decorative vertical line */}
      <div
        className="absolute left-12 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(232,162,67,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text block */}
        <div className="flex-1 text-center lg:text-left">
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs tracking-widest uppercase"
            style={{
              background: 'rgba(232,162,67,0.08)',
              border: '1px solid rgba(232,162,67,0.2)',
              color: 'var(--amber-warm)',
              fontFamily: 'var(--font-jetbrains)',
            }}
          >
            <span>📍</span>
            <span>Sydney, Australia</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight"
            style={{
              color: 'var(--white)',
              animation: 'fadeUp 0.8s ease forwards',
            }}
          >
            Sandesh
            <br />
            <em
              className="not-italic"
              style={{ color: 'var(--amber-warm)' }}
            >
              Paudel
            </em>
          </h1>

          <p
            className="text-lg md:text-xl mb-3 font-display italic"
            style={{
              color: 'var(--slate-soft)',
              animation: 'fadeUp 0.8s 0.15s ease both',
            }}
          >
            Data Scientist &amp; Machine Learning Researcher
          </p>

          <p
            className="text-sm mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            style={{
              color: 'var(--slate-muted)',
              fontFamily: 'var(--font-dm-sans)',
              animation: 'fadeUp 0.8s 0.3s ease both',
            }}
          >
            Master of Data Science candidate at Charles Darwin University.
            Building AI systems, exploring deep learning algorithms,
            and working toward impactful research.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            style={{ animation: 'fadeUp 0.8s 0.45s ease both' }}
          >
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium tracking-wide rounded transition-all duration-200"
              style={{
                background: 'var(--amber-warm)',
                color: 'white',
                fontFamily: 'var(--font-dm-sans)',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-light)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-warm)')}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium tracking-wide rounded transition-all duration-200"
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
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats card */}
        <div
          className="flex-shrink-0 w-full lg:w-72 rounded-2xl p-6 grid grid-cols-2 gap-4"
          style={{
            background: 'rgba(232,162,67,0.1)',
            border: '1px solid rgba(232,162,67,0.1)',
            backdropFilter: 'blur(12px)',
            animation: 'fadeIn 1s 0.5s ease both',
          }}
        >
          {[
            { val: '5+', label: 'Years Coding' },
            { val: '2', label: 'Published Designs' },
            { val: '1', label: 'Preprint Paper' },
            { val: 'MDS', label: 'Current Degree' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 text-center"
              style={{ background: 'rgba(213, 213, 213, 0.92)' }}
            >
              <div
                className="text-2xl font-display font-bold mb-1"
                style={{ color: 'var(--amber-warm)' }}
              >
                {s.val}
              </div>
              <div
                className="text-xs uppercase tracking-wider"
                style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--slate-muted)', fontFamily: 'var(--font-jetbrains)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, var(--amber-warm), transparent)',
            animation: 'fadeIn 1.5s 1s ease both',
          }}
        />
      </div>
    </section>
  )
}