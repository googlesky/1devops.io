import LivingTopology from './LivingTopology'

const CALENDLY = 'https://calendly.com/mrn0b0dy1sm3/new-meeting'

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <LivingTopology className="topology-canvas cta-topology" density={0.6} interactive={false} />
      <div className="cta-scrim" aria-hidden="true" />

      <div className="container">
        <div className="cta-panel">
          <span className="status-chip is-ok">
            <span className="dot" />
            healthcheck · ready to connect
          </span>
          <h2>Ship faster. Sleep better.</h2>
          <p>
            Tell me what&apos;s slowing your team down — I&apos;ll show you how I&apos;d fix it.
            No commitment, and a reply within 24 hours.
          </p>
          <div className="cta-actions">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a call
            </a>
            <a href="mailto:hieulp@1devops.io" className="btn btn-ghost btn-lg">
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an email
            </a>
          </div>
          <p className="cta-note">now booking Q1 2026 · ho chi minh city / remote worldwide</p>
        </div>
      </div>
    </section>
  )
}
