'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import LivingTopology from './LivingTopology'

const CALENDLY = 'https://calendly.com/mrn0b0dy1sm3/new-meeting'
const RESUME =
  'https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true'

const vitals = [
  { key: 'experience', target: 13, suffix: '+', unit: 'years operating', decimals: 0 },
  { key: 'uptime.sla', target: 99.99, suffix: '%', unit: 'uptime delivered', decimals: 2 },
  { key: 'projects', target: 10, suffix: '+', unit: 'platforms shipped', decimals: 0 },
  { key: 'teams.led', target: 5, suffix: '+', unit: 'teams mentored', decimals: 0 },
]

function useClock() {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const p = (n: number) => String(n).padStart(2, '0')
      setTime(`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Hero() {
  const [counts, setCounts] = useState<number[]>(vitals.map(() => 0))
  const vitalsRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  const utc = useClock()

  // Count-up when the vitals panel is in view (respects reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCounts(vitals.map((v) => v.target))
      return
    }
    const el = vitalsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          const t0 = performance.now()
          const dur = 1500
          const run = (now: number) => {
            const p = Math.min(1, (now - t0) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setCounts(vitals.map((v) => v.target * eased))
            if (p < 1) requestAnimationFrame(run)
            else setCounts(vitals.map((v) => v.target))
          }
          requestAnimationFrame(run)
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero" id="home">
      <LivingTopology className="topology-canvas" density={1} interactive />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="kicker-path">~/</span>le-phuong-hieu
            <span className="kicker-sep">·</span>senior sre
          </p>

          <span className="status-chip is-ok hero-status">
            <span className="dot" />
            operational — open to new work
          </span>

          <h1 className="hero-title">
            Senior DevOps
            <br />
            <span className="title-accent">Engineer</span>
          </h1>

          <p className="hero-sub">
            I build resilient cloud infrastructure and automate everything in between —{' '}
            <strong>13+ years</strong> keeping systems fast, observable, and awake at 3&nbsp;a.m.
            so your team doesn&apos;t have to.
          </p>

          <div className="vitals" ref={vitalsRef}>
            {vitals.map((v, i) => (
              <div className="vital" key={v.key}>
                <span className="vital-key">{v.key}</span>
                <span className="vital-value">
                  {counts[i].toFixed(v.decimals)}
                  <span className="vital-suffix">{v.suffix}</span>
                </span>
                <span className="vital-unit">{v.unit}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a call
            </a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View résumé
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-node">
            <div className="node-orbit orbit-a">
              <span className="sat" />
            </div>
            <div className="node-orbit orbit-b">
              <span className="sat sat-blue" />
            </div>
            <div className="node-core">
              <Image
                src="/assets/images/profile.jpg"
                alt="Le Phuong Hieu"
                width={340}
                height={340}
                className="node-photo"
                priority
              />
              <span className="node-halo" />
            </div>
            <span className="hero-node-label">node/hieu-le · hub</span>
          </div>
        </div>
      </div>

      <div className="hero-telemetry" aria-hidden="true">
        <div className="container hero-telemetry-inner">
          <span className="tl-item"><span className="tl-k">utc</span> {utc}</span>
          <span className="tl-item"><span className="tl-k">loc</span> ho_chi_minh · vn</span>
          <span className="tl-item"><span className="tl-k">region</span> ap-southeast</span>
          <span className="tl-item tl-ok"><span className="tl-dot" /> all systems operational</span>
        </div>
      </div>
    </section>
  )
}
