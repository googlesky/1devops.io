'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="site-logo">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="1DevOps - Professional DevOps Solutions"
                width={40}
                height={40}
                className="logo-image"
              />
              <span className="logo-text">1DevOps</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="main-nav" role="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#expertise" className="nav-link">Expertise</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <div className="action-group primary-group">
              <a
                href="https://calendly.com/mrn0b0dy1sm3/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span className="btn-icon">📅</span>
                Book a Call
              </a>
            </div>
            <div className="action-group secondary-group">
              <a
                href="https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span className="btn-icon">📄</span>
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} role="navigation">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link href="/" className="mobile-nav-link" onClick={handleNavClick}>Home</Link>
            </li>
            <li className="mobile-nav-item">
              <a href="#services" className="mobile-nav-link" onClick={handleNavClick}>Services</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#portfolio" className="mobile-nav-link" onClick={handleNavClick}>Portfolio</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#expertise" className="mobile-nav-link" onClick={handleNavClick}>Expertise</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>Contact</a>
            </li>

            {/* Mobile Action Items */}
            <li className="mobile-nav-item mobile-action-item">
              <a
                href="https://calendly.com/mrn0b0dy1sm3/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link primary-action"
              >
                <span className="btn-icon">📅</span>
                Book a Call
              </a>
            </li>
            <li className="mobile-nav-item mobile-action-item">
              <a
                href="https://docs.google.com/document/d/1zYpp5xk6uuedXtMtUc8iPQ_Bw7hMbVET/edit?usp=sharing&ouid=110743570976962098583&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link secondary-action"
              >
                <span className="btn-icon">📄</span>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
