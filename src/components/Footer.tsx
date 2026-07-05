'use client'

import { useState, FormEvent } from 'react'

const CALENDLY = 'https://calendly.com/mrn0b0dy1sm3/new-meeting'
const RESUME =
  'https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubscribed(true)
    setEmail('')
    setIsSubmitting(false)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-row">
              <svg viewBox="0 0 32 32" className="brand-mark" aria-hidden="true">
                <line x1="8" y1="10" x2="16" y2="6" />
                <line x1="16" y1="6" x2="24" y2="12" />
                <line x1="8" y1="10" x2="12" y2="22" />
                <line x1="12" y1="22" x2="24" y2="12" />
                <line x1="12" y1="22" x2="22" y2="24" />
                <circle cx="16" cy="6" r="2.6" />
                <circle cx="8" cy="10" r="2" />
                <circle cx="24" cy="12" r="2" />
                <circle cx="12" cy="22" r="2" />
                <circle cx="22" cy="24" r="1.6" />
              </svg>
              <span>1DevOps</span>
            </div>
            <p className="footer-tagline">
              Senior DevOps engineering and cloud architecture — turning fragile infrastructure into
              systems that stay quietly, reliably up.
            </p>
            <div className="footer-contact">
              <div className="foot-line">
                <span className="fk">email</span>
                <a href="mailto:hieulp@1devops.io">hieulp@1devops.io</a>
              </div>
              <div className="foot-line">
                <span className="fk">phone</span>
                <a href="tel:+84975669775">+84 975 669 775</a>
              </div>
              <div className="foot-line">
                <span className="fk">loc</span>
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Cloud Architecture</a></li>
              <li><a href="#services">Kubernetes & Containers</a></li>
              <li><a href="#services">CI/CD Pipelines</a></li>
              <li><a href="#services">Security & Compliance</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#expertise">The stack</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">What teams say</a></li>
            </ul>
          </div>

          <div className="footer-news">
            <h4>Connect</h4>
            <ul>
              <li><a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a call ↗</a></li>
              <li><a href="https://www.linkedin.com/in/googlesky/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
              <li><a href="https://github.com/googlesky" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
              <li><a href={RESUME} target="_blank" rel="noopener noreferrer">Résumé ↗</a></li>
            </ul>
            <div className="footer-news-form" style={{ marginTop: 'var(--s6)' }}>
              <p>Occasional notes on infra, reliability, and scale.</p>
              <form className="news-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="news-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  aria-label="Email address"
                />
                <button type="submit" className="news-btn" disabled={isSubmitting}>
                  {isSubmitting ? '…' : subscribed ? 'Done' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="foot-copy">
            © 2026 1DevOps · <span className="fc-mono">built with Next.js by Le Phuong Hieu</span>
          </p>
          <span className="foot-status">
            <span className="tl-dot" />
            now booking Q1 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
