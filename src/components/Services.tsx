'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

const services = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description:
      'Scalable, cost-aware infrastructure on AWS, Azure, or hybrid — designed to grow without surprises on the bill.',
    features: [
      'Multi-region deployment strategies',
      'Cost optimization & FinOps',
      'Disaster recovery planning',
      'Cloud migration roadmaps',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    featured: false,
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes & Containers',
    description:
      'Production-grade Kubernetes with GitOps, service mesh, and autoscaling that survives real traffic.',
    features: [
      'EKS, GKE, AKS deployment',
      'Helm charts & operators',
      'Service mesh (Istio, Linkerd)',
      'Multi-cluster management',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    featured: true,
  },
  {
    id: 'ci-cd',
    title: 'CI/CD Pipelines',
    description:
      'Automate the whole delivery path — secure, compliant, and fast enough that shipping stops being scary.',
    features: [
      'Pipeline-as-code setup',
      'Blue/green & canary deployments',
      'Security scanning integration',
      'Artifact management',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    featured: false,
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'DevSecOps woven into the pipeline — automated scanning and audit-ready evidence, not a last-minute scramble.',
    features: [
      'SOC 2, ISO 27001 readiness',
      'Vulnerability management',
      'Secrets management',
      'Security automation',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    featured: false,
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">services · svc</span>
          <h2>Services I run for you</h2>
          <p>End-to-end platform engineering — from the first commit to the 3&nbsp;a.m. page.</p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <article
              key={svc.id}
              className={`svc-card ${svc.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="svc-head">
                <div className="svc-icon">{svc.icon}</div>
                {svc.featured ? (
                  <span className="status-chip is-ok">
                    <span className="dot" />
                    most requested
                  </span>
                ) : (
                  <span className="svc-id">svc/{svc.id}</span>
                )}
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.description}</p>
              <ul className="svc-features">
                {svc.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="svc-link">
                Get started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
