'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

const testimonials = [
  {
    label: 'signal · fintech',
    quote:
      'Transformed our deployment process from days to minutes. The Kubernetes platform they built handles 10x our previous traffic at half the cloud cost.',
    author: 'CTO, Series C Fintech',
    company: 'payment-processing platform',
  },
  {
    label: 'signal · saas',
    quote:
      'Deep Kubernetes expertise paired with real stakeholder empathy — we finally shipped globally without firefighting every release.',
    author: 'Head of Platform, Global SaaS',
    company: 'b2b enterprise software',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section className="voices-section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">from the field</span>
          <h2>What teams say</h2>
        </div>

        <div className="voices-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="voice-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="voice-label">{t.label}</span>
              <p className="voice-quote">{t.quote}</p>
              <div className="voice-author">
                <strong>{t.author}</strong>
                <span>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
