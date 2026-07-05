'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_SECTIONS = ['services', 'portfolio', 'expertise', 'contact'] as const

const NAV = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Work', href: '#portfolio' },
  { id: 'expertise', label: 'Stack', href: '#expertise' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const CALENDLY = 'https://calendly.com/mrn0b0dy1sm3/new-meeting'
const RESUME =
  'https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true'

/** A small node-cluster glyph — the brand as a tiny topology. */
function NodeMark() {
  return (
    <svg viewBox="0 0 32 32" className="brand-mark" aria-hidden="true">
      <line x1="8" y1="10" x2="16" y2="6" />
      <line x1="16" y1="6" x2="24" y2="12" />
      <line x1="8" y1="10" x2="12" y2="22" />
      <line x1="12" y1="22" x2="24" y2="12" />
      <line x1="12" y1="22" x2="22" y2="24" />
      <circle cx="16" cy="6" r="2.6" className="nm-hub" />
      <circle cx="8" cy="10" r="2" />
      <circle cx="24" cy="12" r="2" />
      <circle cx="12" cy="22" r="2" />
      <circle cx="22" cy="24" r="1.6" />
    </svg>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 40)
      if (y < 100) setActiveSection('home')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="1DevOps — home">
          <NodeMark />
          <span className="brand-name">1DevOps</span>
        </Link>

        <nav className="nav" role="navigation" aria-label="Primary">
          <ul className="nav-list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <span className="hstatus" aria-hidden="true">
            <span className="hstatus-dot" />
            operational
          </span>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Book a call
          </a>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm resume-btn">
            Résumé
          </a>
        </div>

        <button
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Mobile">
        <ul>
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="ml-index">{'//'}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={closeMenu}>
              Book a call
            </a>
          </li>
          <li className="mobile-cta">
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={closeMenu}>
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
