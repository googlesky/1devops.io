export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-background">
        <div className="cta-particles"></div>
      </div>
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Infrastructure?</h2>
          <p>Let&apos;s discuss how I can help your team ship faster, scale reliably, and sleep better at night.</p>
          <div className="cta-actions">
            <a
              href="https://calendly.com/mrn0b0dy1sm3/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-glow"
            >
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Free Consultation
            </a>
            <a href="mailto:hieulp@1devops.io" className="btn btn-outline btn-lg">
              <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>
          <p className="cta-note">No commitment required. Response within 24 hours.</p>
        </div>
      </div>
    </section>
  )
}
