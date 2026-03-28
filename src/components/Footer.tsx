'use client'
export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sandeshpaudel',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/sandeshpaudel81',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      ),
    },
    {
      label: 'arXiv',
      href: 'https://arxiv.org/pdf/2410.05721',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V16a1 1 0 00-2 0v.93A8.001 8.001 0 014.07 11H5a1 1 0 000-2h-.93A8.001 8.001 0 0111 4.07V5a1 1 0 002 0v-.93A8.001 8.001 0 0119.93 11H19a1 1 0 000 2h.93A8.001 8.001 0 0113 16.93z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — branding */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold mb-1" style={{ fontSize: '1.1rem', color: 'var(--amber-warm)' }}>
              Sandesh Paudel
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Data Scientist · Sydney, Australia
            </div>
          </div>

          {/* Centre — nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {['About', 'Education', 'Projects', 'Research', 'Skills', 'Contact'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', transition: 'color 0.2s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--amber-warm)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right — socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--amber-border)'
                  el.style.color = 'var(--amber-warm)'
                  el.style.background = 'var(--amber-pale)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--border)'
                  el.style.color = 'var(--text-muted)'
                  el.style.background = 'var(--surface)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-7" style={{ height: '1px', background: 'var(--border)' }} />

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            © {year} Sandesh Paudel. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Originally from Beni, Myagdi, Nepal 🏔️
          </p>
        </div>
      </div>
    </footer>
  )
}