'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: 'Transformed our deployment process from days to minutes. The Kubernetes platform they built handles 10x our previous traffic with half the cloud costs.',
    author: 'CTO, Series C Fintech',
    company: 'Payment Processing Platform'
  },
  {
    quote: 'Their combination of deep Kubernetes expertise and stakeholder empathy meant we finally shipped globally without firefighting.',
    author: 'Head of Platform, Global SaaS',
    company: 'B2B Enterprise Software'
  }
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          }
        })
      },
      { threshold: 0.05 }
    )

    const elements = sectionRef.current?.querySelectorAll('[data-aos]')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Client Feedback</span>
          <h2>What People Say</h2>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-content">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
