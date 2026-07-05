'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

const projects = [
  {
    id: 'case/fintech-payments',
    type: 'large',
    tag: 'Fintech',
    title: 'Global Payment Platform Migration',
    description:
      'Moved a payment platform processing $2B+ a year onto Kubernetes with zero downtime — and cut release cycles by nearly two-thirds.',
    tech: ['EKS', 'Terraform', 'ArgoCD', 'Istio'],
    metrics: [
      { value: '64%', label: 'faster deployments' },
      { value: '99.95%', label: 'uptime held' },
    ],
  },
  {
    id: 'case/multiregion-saas',
    type: 'small',
    tag: 'SaaS',
    title: 'Multi-Region Platform',
    description:
      'Architected an active-active, multi-region deployment for a B2B SaaS — cutting latency 70% for customers worldwide.',
    tech: ['AWS', 'Route53', 'DynamoDB'],
    result: { value: '70%', label: 'latency reduction' },
  },
  {
    id: 'case/hipaa-health',
    type: 'small',
    tag: 'Healthcare',
    title: 'HIPAA-Compliant Infrastructure',
    description:
      'Built compliant cloud infrastructure for a telehealth startup, clearing SOC 2 Type II in six months.',
    tech: ['Azure', 'AKS', 'Vault'],
    result: { value: '6 mo', label: 'to SOC 2 cert' },
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section className="work-section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">field record</span>
          <h2>Work that shipped</h2>
          <p>Real transformations, measured in outcomes the business could feel.</p>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`work-card ${p.type}`}
              data-aos={p.type === 'large' ? 'fade-up' : 'fade-up'}
              data-aos-delay={i * 80}
            >
              {p.type === 'large' && p.metrics && (
                <div className="work-metrics">
                  {p.metrics.map((m) => (
                    <div className="metric-big" key={m.label}>
                      <span className="mv">{m.value}</span>
                      <span className="ml">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="work-body">
                <div className="work-head">
                  <span className="work-tag">{p.tag}</span>
                  <span className="work-id">{p.id}</span>
                </div>
                <h3 className="work-title">{p.title}</h3>
                <p className="work-desc">{p.description}</p>
                <div className="work-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="leaf">
                      {t}
                    </span>
                  ))}
                </div>
                {p.result && (
                  <div className="work-result">
                    <span className="rv">{p.result.value}</span>
                    <span className="rl">{p.result.label}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
