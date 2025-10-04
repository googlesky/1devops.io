---
layout: page
title: "Contact 1DevOps"
description: "Get in touch with Le Phuong Hieu for DevOps consulting, infrastructure setup, and cloud solutions. Free initial consultation available."
permalink: /contact/
---

<div class="contact-page">
    <div class="contact-hero">
        <div class="container">
            <div class="contact-header">
            <h2>Let's Work Together</h2>
                <p class="lead">Ready to transform your DevOps process? I'm here to help you build scalable, secure, and efficient infrastructure solutions.</p>
                <p>Whether you need strategic guidance, hands-on implementation, or ongoing support, let's discuss how we can achieve your goals together.</p>
            </div>
        </div>
    </div>

    <section class="booking-section">
        <div class="container">
            <h2>Book a 30-Minute Discovery Call</h2>
            <p class="lead">Choose a slot that works for you. We’ll review your current challenges, desired outcomes, and identify the fastest next steps.</p>
            <div class="calendly-wrap">
                <div class="calendly-inline-widget" data-url="{{ site.calendly.url }}" style="min-width:320px;height:720px;"></div>
            </div>
            <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
    </section>

    <section class="contact-content">
        <div class="container">
            <div class="grid grid-2">
                <!-- Contact Information -->
                <div class="contact-info">
                    <h2>Get In Touch</h2>
                    <p>I'm always excited to discuss new projects and opportunities. Here's how you can reach me:</p>
                    
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-icon">📧</div>
                            <div class="contact-details">
                                <h3>Email</h3>
                                <p><a href="mailto:hieu@1devops.io">hieu@1devops.io</a></p>
                                <span class="contact-note">Best for detailed inquiries</span>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon">📞</div>
                            <div class="contact-details">
                                <h3>Phone</h3>
                                <p><a href="tel:+84975669775">+84 975 669 775</a></p>
                                <span class="contact-note">Available for urgent matters</span>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon">📍</div>
                            <div class="contact-details">
                                <h3>Location</h3>
                                <p>Ho Chi Minh City, Vietnam</p>
                                <span class="contact-note">Remote work worldwide</span>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon">💼</div>
                            <div class="contact-details">
                                <h3>LinkedIn</h3>
                                <p><a href="https://linkedin.com/in/lephuonghieu" target="_blank" rel="noopener">linkedin.com/in/lephuonghieu</a></p>
                                <span class="contact-note">Professional networking</span>
                            </div>
                        </div>
                    </div>

                    <div class="availability-info">
                        <h3>🕐 Availability</h3>
                        <p>Currently accepting new consulting projects and long-term engagements. I typically respond to inquiries within 24 hours.</p>
                        
                        <div class="response-times">
                            <div class="response-item">
                                <span class="response-type">Email:</span>
                                <span class="response-time">Within 24 hours</span>
                            </div>
                            <div class="response-item">
                                <span class="response-type">Phone:</span>
                                <span class="response-time">Same day (GMT+7)</span>
                            </div>
                            <div class="response-item">
                                <span class="response-type">Consultation:</span>
                                <span class="response-time">Within 1 week</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-section">
                    <h2>Send a Message</h2>
                    <p>Use this form to get started. I'll respond with next steps and potential consultation times.</p>
                    
                    <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name" name="name" required class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="company">Company/Organization</label>
                            <input type="text" id="company" name="company" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="project-type">Project Type *</label>
                            <select id="project-type" name="project-type" required class="form-select">
                                <option value="">Select a service...</option>
                                <option value="devops-consulting">DevOps Consulting</option>
                                <option value="infrastructure-setup">Infrastructure Setup</option>
                                <option value="cicd-implementation">CI/CD Implementation</option>
                                <option value="security-audit">Security Audit</option>
                                <option value="cloud-migration">Cloud Migration</option>
                                <option value="kubernetes-setup">Kubernetes Setup</option>
                                <option value="ongoing-support">Ongoing Support</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="timeline">Project Timeline</label>
                            <select id="timeline" name="timeline" class="form-select">
                                <option value="">Select timeline...</option>
                                <option value="urgent">Urgent (Within 1 month)</option>
                                <option value="soon">Soon (1-3 months)</option>
                                <option value="planning">Planning (3-6 months)</option>
                                <option value="future">Future consideration</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="budget">Estimated Budget Range</label>
                            <select id="budget" name="budget" class="form-select">
                                <option value="">Select budget range...</option>
                                <option value="under-5k">Under $5,000</option>
                                <option value="5k-15k">$5,000 - $15,000</option>
                                <option value="15k-50k">$15,000 - $50,000</option>
                                <option value="50k-plus">$50,000+</option>
                                <option value="discuss">Prefer to discuss</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Project Details *</label>
                            <textarea id="message" name="message" rows="6" required class="form-textarea" placeholder="Please describe your project, current challenges, and what you're hoping to achieve. The more details you provide, the better I can understand your needs and provide relevant guidance."></textarea>
                        </div>

                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="newsletter" class="form-checkbox">
                                <span class="checkbox-text">Subscribe to occasional DevOps tips and updates</span>
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg">
                            <span class="btn-icon">📨</span>
                            Send Message
                        </button>

                        <p class="form-note">Your information is kept confidential and never shared with third parties.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="consultation-info">
        <div class="container">
            <div class="consultation-card">
                <h2>🎯 Free Initial Consultation</h2>
                <p>Every engagement starts with a complimentary consultation where we'll discuss:</p>
                
                <div class="consultation-topics">
                    <div class="topic-grid">
                        <div class="topic-item">
                            <div class="topic-icon">🔍</div>
                            <h3>Current State Assessment</h3>
                            <p>Understanding your existing infrastructure, processes, and pain points</p>
                        </div>

                        <div class="topic-item">
                            <div class="topic-icon">🎯</div>
                            <h3>Goal Definition</h3>
                            <p>Clarifying your objectives and success criteria</p>
                        </div>

                        <div class="topic-item">
                            <div class="topic-icon">🗺️</div>
                            <h3>Solution Roadmap</h3>
                            <p>High-level approach and implementation strategy</p>
                        </div>

                        <div class="topic-item">
                            <div class="topic-icon">📊</div>
                            <h3>Project Scope</h3>
                            <p>Timeline, resources, and investment requirements</p>
                        </div>
                    </div>
                </div>
                
                <div class="consultation-cta">
                    <p><strong>Duration:</strong> 30-60 minutes • <strong>Format:</strong> Video call or phone • <strong>Cost:</strong> Completely free</p>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-grid">
                <div class="faq-item">
                    <h3>How quickly can you start a project?</h3>
                    <p>For most projects, I can start within 1-2 weeks after our initial consultation and agreement. Urgent situations can often be accommodated sooner.</p>
                </div>

                <div class="faq-item">
                    <h3>Do you work with teams remotely?</h3>
                    <p>Yes, I've been working remotely with international teams for years. I'm experienced with all major collaboration tools and can adapt to your team's workflow.</p>
                </div>

                <div class="faq-item">
                    <h3>What if my project requirements change?</h3>
                    <p>I understand that requirements evolve. I work with flexible agreements that can accommodate scope changes while maintaining clear communication about impacts.</p>
                </div>

                <div class="faq-item">
                    <h3>Do you provide ongoing support?</h3>
                    <p>Absolutely. I offer various support packages from periodic check-ins to comprehensive managed services, depending on your needs.</p>
                </div>

                <div class="faq-item">
                    <h3>What industries do you work with?</h3>
                    <p>I've worked across various industries including fintech, e-commerce, healthcare, education, and SaaS companies. DevOps principles apply universally.</p>
                </div>

                <div class="faq-item">
                    <h3>How do you handle confidentiality?</h3>
                    <p>All client information is kept strictly confidential. I'm happy to sign NDAs and work within your security requirements.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
.contact-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.highlight-item {
    margin-bottom: 0.5rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-item h3 {
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.contact-item p {
    margin-bottom: 0.25rem;
}

.contact-item a {
    color: var(--primary);
    text-decoration: none;
}

.contact-item a:hover {
    text-decoration: underline;
}

.faq-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faq-section .card h4 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
    .contact-highlights {
        justify-content: center;
    }
    
    .page-header .grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
</style> 
