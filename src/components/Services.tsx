'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Cloud Architecture',
    description: 'Design and implement scalable, cost-effective cloud infrastructure on AWS, Azure, or hybrid environments.',
    features: [
      'Multi-region deployment strategies',
      'Cost optimization & FinOps',
      'Disaster recovery planning',
      'Cloud migration roadmaps'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    featured: false
  },
  {
    number: '02',
    title: 'Kubernetes & Containers',
    description: 'Build production-ready Kubernetes platforms with GitOps workflows, service mesh, and auto-scaling.',
    features: [
      'EKS, GKE, AKS deployment',
      'Helm charts & operators',
      'Service mesh (Istio, Linkerd)',
      'Multi-cluster management'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    featured: true
  },
  {
    number: '03',
    title: 'CI/CD Pipelines',
    description: 'Automate your entire software delivery lifecycle with secure, compliant, and fast pipelines.',
    features: [
      'Pipeline-as-code setup',
      'Blue/green & canary deployments',
      'Security scanning integration',
      'Artifact management'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    featured: false
  },
  {
    number: '04',
    title: 'Security & Compliance',
    description: 'Implement DevSecOps practices with automated security scanning and compliance frameworks.',
    features: [
      'SOC 2, ISO 27001 readiness',
      'Vulnerability management',
      'Secrets management',
      'Security automation'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    featured: false
  }
]

export default function Services() {
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
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What I Deliver</span>
          <h2>DevOps Services & Solutions</h2>
          <p>End-to-end platform engineering and automation expertise</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`service-card ${service.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {service.featured && (
                <div className="featured-badge">Most Requested</div>
              )}
              <div className="service-icon">{service.icon}</div>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                Get Started
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
