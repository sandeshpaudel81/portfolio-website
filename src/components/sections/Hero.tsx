'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.2 + 0.06,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,110,30,${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(180,110,30,${0.04 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,117,26,0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo + stats */}
        <div className="flex flex-col items-center gap-5 flex-shrink-0">
          <div
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden"
            style={{ border: '3px solid var(--amber-border)', boxShadow: '0 8px 32px rgba(201,117,26,0.15), 0 2px 8px rgba(0,0,0,0.08)' }}
          >
            {/*
              TO ADD YOUR PHOTO:
              1. Put your photo at /public/photo.jpg
              2. Replace this entire div content with:
                 <Image src="/photo.jpg" fill alt="Sandesh Paudel" className="object-cover" />
              3. Add: import Image from 'next/image' at the top
            */}
            {/* <div className="w-full h-full flex flex-col items-center justify-center gap-1.5" style={{ background: 'var(--surface-2)' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="var(--amber-warm)" strokeWidth="1.5"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--amber-warm)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)' }}>photo.jpg</span>
            </div> */}
            <Image src="/photo.jpeg" fill alt="Sandesh Paudel" className="object-cover" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[{ val: '5+', label: 'yrs coding' }, { val: '1', label: 'preprint' }, { val: 'MDS', label: 'candidate' }].map((s) => (
              <div key={s.label} className="px-3 py-1.5 rounded-lg text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="font-display font-bold" style={{ fontSize: '0.95rem', color: 'var(--amber-warm)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-5"
            style={{ background: 'var(--amber-pale)', border: '1px solid var(--amber-border)', color: 'var(--amber-warm)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}
          >
            <span>📍</span><span>Sydney, Australia</span>
          </div>

          <h1
            className="font-display font-bold mb-2.5 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)', color: 'var(--text-head)', animation: 'fadeUp 0.7s ease forwards' }}
          >
            Sandesh <em className="not-italic" style={{ color: 'var(--amber-warm)' }}>Paudel</em>
          </h1>

          <p
            className="font-display italic mb-2.5"
            style={{ fontSize: '1rem', color: 'var(--text-muted)', animation: 'fadeUp 0.7s 0.12s ease both' }}
          >
            Data Scientist &amp; Machine Learning Researcher
          </p>

          <p
            className="mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ fontSize: '0.875rem', color: 'var(--text-body)', animation: 'fadeUp 0.7s 0.24s ease both' }}
          >
            Master of Data Science candidate at Charles Darwin University, Sydney.
            Building clinical AI systems and interpretable deep learning models —
            working toward a PhD in health informatics and applied ML.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start" style={{ animation: 'fadeUp 0.7s 0.36s ease both' }}>
            <a href="#projects" className="px-5 py-2 rounded-lg font-medium transition-all duration-200"
              style={{ background: 'var(--amber-warm)', color: '#fff', fontSize: '0.82rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-light)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--amber-warm)')}>
              View Projects
            </a>
            <a href="#research" className="px-5 py-2 rounded-lg font-medium transition-all duration-200"
              style={{ background: 'var(--teal-pale)', color: 'var(--teal)', border: '1px solid rgba(42,125,111,0.25)', fontSize: '0.82rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#d2ebe6')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--teal-pale)')}>
              Research
            </a>
            <a href="#contact" className="px-5 py-2 rounded-lg font-medium transition-all duration-200"
              style={{ background: 'var(--surface)', color: 'var(--text-body)', border: '1px solid var(--border)', fontSize: '0.82rem' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-alt)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--surface)')}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div className="w-px h-9" style={{ background: 'linear-gradient(to bottom, var(--amber-warm), transparent)' }} />
      </div>
    </section>
  )
}