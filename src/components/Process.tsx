'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

const steps = [
  {
    number: '01',
    stage: 'discovery',
    title: 'Discovery & Assessment',
    description:
      'A deep look at your current infrastructure, pain points, and goals — surfacing quick wins alongside the long game.',
  },
  {
    number: '02',
    stage: 'design',
    title: 'Architecture & Planning',
    description:
      'A target architecture with clear milestones, risk mitigation, and success criteria you can actually measure.',
  },
  {
    number: '03',
    stage: 'build',
    title: 'Implementation',
    description:
      'Iterative delivery with CI, testing, and docs from day one. Regular demos, tight feedback loops, no big-bang surprises.',
  },
  {
    number: '04',
    stage: 'handover',
    title: 'Knowledge Transfer',
    description:
      'Training, runbooks, and support so your team can own and evolve the platform long after I step back.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section className="flow-section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">engagement pipeline</span>
          <h2>How the work flows</h2>
          <p>A structured path from first conversation to a platform your team owns.</p>
        </div>

        <div className="flow">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flow-step"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flow-node">{step.number}</div>
              <div className="flow-content">
                <span className="flow-stage">stage · {step.stage}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
