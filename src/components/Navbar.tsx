'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(213, 213, 213, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,162,67,0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-wide"
          style={{ color: 'var(--amber-warm)' }}
        >
          SP
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-body tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--slate-soft)', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--amber-warm)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--slate-soft)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: 'var(--amber-warm)',
                transform:
                  open && i === 0
                    ? 'rotate(45deg) translate(4px, 4px)'
                    : open && i === 1
                    ? 'scaleX(0)'
                    : open && i === 2
                    ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(7,11,20,0.98)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest"
              style={{ color: 'var(--slate-soft)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}