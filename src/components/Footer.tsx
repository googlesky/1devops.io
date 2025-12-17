'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubscribed(true)
    setEmail('')
    setIsSubmitting(false)

    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image
                  src="/assets/images/logo.svg"
                  alt="1DevOps - Professional DevOps Solutions"
                  width={40}
                  height={40}
                />
                <span>1DevOps</span>
              </div>
              <p className="footer-description">
                Professional DevOps consulting and solutions with 13+ years of experience.
                Simplifying complex infrastructure for modern development teams.
              </p>
              <div className="footer-contact">
                <p><strong>Email:</strong> <a href="mailto:hieulp@1devops.io">hieulp@1devops.io</a></p>
                <p><strong>Phone:</strong> <a href="tel:+84975669775">+84 975 669 775</a></p>
                <p><strong>Location:</strong> Ho Chi Minh City, Vietnam</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Cloud Architecture</a></li>
                  <li><a href="#services">Kubernetes & Containers</a></li>
                  <li><a href="#services">CI/CD Pipelines</a></li>
                  <li><a href="#services">Security & Compliance</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#expertise">Technical Expertise</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#process">How I Work</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Get in Touch</h4>
                <ul>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="https://calendly.com/mrn0b0dy1sm3/new-meeting" target="_blank" rel="noopener noreferrer">Book a Call</a></li>
                  <li><a href="https://www.linkedin.com/in/googlesky/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="mailto:hieulp@1devops.io" className="social-link" aria-label="Email">
                    <span className="social-icon">📧</span>
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/googlesky/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a href="https://github.com/googlesky" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <span className="social-icon">🐙</span>
                    GitHub
                  </a>
                </div>

                <div className="newsletter-signup">
                  <h5>Stay Updated</h5>
                  <p>Get DevOps insights delivered to your inbox</p>
                  <form className="footer-newsletter-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                      className="newsletter-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      className="newsletter-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '...' : subscribed ? 'Done!' : 'Subscribe'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>&copy; 2025 1DevOps. All rights reserved.</p>
                <p>Built with Next.js by Le Phuong Hieu</p>
              </div>

              <div className="footer-meta">
                <div className="footer-legal">
                  <a href="mailto:hieulp@1devops.io">Privacy Policy</a>
                  <a href="mailto:hieulp@1devops.io">Terms of Service</a>
                </div>

                <div className="footer-availability">
                  <span className="availability-indicator">🟢</span>
                  <span>Now booking Q1 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
