'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    type: 'large',
    tag: 'Fintech',
    title: 'Global Payment Platform Migration',
    description: 'Led the migration of a payment processing platform handling $2B+ annually to Kubernetes, achieving zero-downtime deployment and 64% faster release cycles.',
    tech: ['EKS', 'Terraform', 'ArgoCD', 'Istio'],
    metrics: [
      { value: '64%', label: 'Faster Deployments' },
      { value: '99.95%', label: 'Uptime' }
    ]
  },
  {
    type: 'small',
    tag: 'SaaS',
    title: 'Multi-Region Platform',
    description: 'Architected a multi-region active-active deployment for a B2B SaaS platform, reducing latency by 70% for global customers.',
    tech: ['AWS', 'Route53', 'DynamoDB'],
    result: { value: '70%', label: 'Latency Reduction' }
  },
  {
    type: 'small',
    tag: 'Healthcare',
    title: 'HIPAA-Compliant Infrastructure',
    description: 'Built compliant cloud infrastructure for a telehealth startup, enabling SOC 2 Type II certification within 6 months.',
    tech: ['Azure', 'AKS', 'Vault'],
    result: { value: '6 mo', label: 'To SOC 2 Cert' }
  }
]

export default function Portfolio() {
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
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Impact & Results</span>
          <h2>Project Highlights</h2>
          <p>Real-world transformations delivering measurable business outcomes</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`portfolio-card ${project.type}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {project.type === 'large' && project.metrics && (
                <div className="portfolio-image">
                  <div className="portfolio-overlay"></div>
                  <div className="portfolio-metrics">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="metric">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="portfolio-content">
                <span className="portfolio-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {project.result && (
                  <div className="portfolio-result">
                    <span className="result-value">{project.result.value}</span>
                    <span className="result-label">{project.result.label}</span>
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
