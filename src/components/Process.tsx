'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'Deep dive into your current infrastructure, pain points, and business objectives. Identify quick wins and long-term improvements.'
  },
  {
    number: '02',
    title: 'Architecture & Planning',
    description: 'Design target architecture with clear milestones, risk mitigation strategies, and measurable success criteria.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Iterative delivery with continuous integration, testing, and documentation. Regular demos and feedback loops.'
  },
  {
    number: '04',
    title: 'Knowledge Transfer',
    description: 'Comprehensive training, runbooks, and ongoing support to ensure your team can maintain and evolve the platform.'
  }
]

export default function Process() {
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
    <section className="process-section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">How I Work</span>
          <h2>Engagement Process</h2>
          <p>A structured approach to delivering transformative results</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="process-step"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
