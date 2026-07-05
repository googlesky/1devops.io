'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

const categories = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    tags: ['AWS', 'Azure', 'GCP', 'Oracle Cloud'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    id: 'orchestration',
    title: 'Containers & Orchestration',
    tags: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    tags: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'cicd',
    title: 'CI/CD & Automation',
    tags: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'observability',
    title: 'Observability',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    tags: ['Vault', 'Falco', 'Trivy', 'SOC 2'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section className="stack-section" id="expertise" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">stack topology</span>
          <h2>The stack I operate</h2>
          <p>Six clusters, battle-tested in production across the cloud-native landscape.</p>
        </div>

        <div className="stack-hub" data-aos="scale-in">
          <div className="stack-hub-mark">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="stack-hub-label">devops-core · 6 clusters online</span>
        </div>

        <div className="stack-grid">
          {categories.map((cat, i) => (
            <article
              key={cat.id}
              className="cluster-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="cluster-head">
                <div className="cluster-icon">{cat.icon}</div>
                <span className="cluster-id">cluster/{cat.id}</span>
              </div>
              <h3 className="cluster-title">{cat.title}</h3>
              <div className="cluster-nodes">
                {cat.tags.map((tag) => (
                  <span key={tag} className="leaf">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
