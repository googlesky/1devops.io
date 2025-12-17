'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FloatingIcons from './FloatingIcons'

const commands = [
  'kubectl get pods -A | grep Running',
  'terraform plan -out=tfplan',
  'helm upgrade --install app ./charts',
  'aws eks update-kubeconfig --name prod',
  'docker build -t app:latest .',
  'ansible-playbook deploy.yml'
]

const stats = [
  { count: 13, suffix: '+', label: 'Years Experience' },
  { count: 10, suffix: '+', label: 'Projects Delivered' },
  { count: 99, suffix: '.9%', label: 'Uptime Achieved' },
  { count: 5, suffix: '+', label: 'Teams Mentored' }
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [counters, setCounters] = useState(stats.map(() => 0))
  const statsRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // Terminal typing effect
  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const type = () => {
      const currentCommand = commands[commandIndex]

      if (!isDeleting) {
        setTypedText(currentCommand.substring(0, charIndex + 1))
        charIndex++

        if (charIndex === currentCommand.length) {
          isDeleting = true
          timeoutId = setTimeout(type, 2000)
          return
        }
      } else {
        setTypedText(currentCommand.substring(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          commandIndex = (commandIndex + 1) % commands.length
        }
      }

      const speed = isDeleting ? 30 : 80
      timeoutId = setTimeout(type, speed)
    }

    type()

    return () => clearTimeout(timeoutId)
  }, [])

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            stats.forEach((stat, index) => {
              let count = 0
              const increment = stat.count / 50

              const updateCount = () => {
                count += increment
                if (count < stat.count) {
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = Math.floor(count)
                    return newCounters
                  })
                  requestAnimationFrame(updateCount)
                } else {
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = stat.count
                    return newCounters
                  })
                }
              }

              updateCount()
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 3D Card mouse tracking
  useEffect(() => {
    const wrapper = wrapperRef.current
    const card = cardRef.current
    if (!wrapper || !card) return

    const maxRotation = 15

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const rotateY = (mouseX / (rect.width / 2)) * maxRotation
      const rotateX = -(mouseY / (rect.height / 2)) * maxRotation

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    wrapper.addEventListener('mousemove', handleMouseMove)
    wrapper.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove)
      wrapper.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="hero hero-devops">
      <div className="hero-particles" id="particles"></div>
      <div className="hero-gradient" aria-hidden="true"></div>

      <FloatingIcons />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-dot"></span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="hero-title animate-fade-in-up">
            <span className="title-line">Senior DevOps</span>
            <span className="title-line gradient-text">Engineer</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-1">
            Building resilient cloud infrastructure and automating everything in between.
            <strong> 13+ years</strong> transforming how teams ship software.
          </p>

          {/* Terminal Animation */}
          <div className="terminal-container animate-fade-in-up delay-2">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn red"></span>
                  <span className="terminal-btn yellow"></span>
                  <span className="terminal-btn green"></span>
                </div>
                <span className="terminal-title">devops@cloud:~</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">{typedText}</span>
                  <span className="terminal-cursor">|</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-actions animate-fade-in-up delay-3">
            <a
              href="https://calendly.com/mrn0b0dy1sm3/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-glow"
            >
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Call
            </a>
            <a
              href="https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-right delay-2">
          <div className="card-3d-wrapper" ref={wrapperRef}>
            <div className="card-3d" ref={cardRef}>
              <Image
                src="/assets/images/profile-art.png"
                alt="Le Phuong Hieu - Senior DevOps Engineer"
                width={420}
                height={525}
                className="profile-art"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">
                  <span className="counter">{counters[index]}</span>
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
