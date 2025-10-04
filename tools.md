---
layout: page
title: "DevOps Tools & Resources"
description: "Professional DevOps tools, scripts, and resources for modern development teams. Open source utilities for Kubernetes, CI/CD, and infrastructure automation."
permalink: /tools/
---

<div class="tools-page">
    <div class="tools-header">
        <div class="container">
            <h2>DevOps Tools & Resources</h2>
            <p class="lead">Professional tools and utilities built from 12+ years of DevOps experience</p>
            <p>Open source scripts, templates, and automation tools to streamline your DevOps workflow. All tools are battle-tested in production environments.</p>
        </div>
    </div>

    <section class="tools-grid-section">
        <div class="container">
            {% assign tools = site.tools | sort: 'order' %}
            {% if tools.size > 0 %}
                <div class="tools-grid">
                    {% for tool in tools %}
                    <div class="tool-card">
                        <div class="tool-header">
                            {% if tool.icon %}
                            <div class="tool-icon">{{ tool.icon }}</div>
                            {% endif %}
                            <div class="tool-info">
                                <h3 class="tool-title">{{ tool.title }}</h3>
                                {% if tool.category %}
                                <span class="tool-category">{{ tool.category }}</span>
                                {% endif %}
                            </div>
                        </div>
                        
                        <div class="tool-description">
                            <p>{{ tool.description | default: tool.excerpt | strip_html | truncatewords: 25 }}</p>
                        </div>

                        <div class="tool-meta">
                            {% if tool.tech_stack %}
                            <div class="tech-stack">
                                {% for tech in tool.tech_stack limit: 3 %}
                                <span class="tech-badge">{{ tech }}</span>
                                {% endfor %}
                            </div>
                            {% endif %}

                            {% if tool.features %}
                            <ul class="tool-features">
                                {% for feature in tool.features limit: 3 %}
                                <li>{{ feature }}</li>
                                {% endfor %}
                            </ul>
                            {% endif %}
                        </div>

                        <div class="tool-actions">
                            <a href="{{ tool.url | relative_url }}" class="btn btn-primary">Learn More</a>
                            {% if tool.github_url %}
                            <a href="{{ tool.github_url }}" target="_blank" rel="noopener" class="btn btn-secondary">
                                <span class="btn-icon">🐙</span>
                                GitHub
                            </a>
                            {% elsif tool.notes %}
                            <span class="tool-note">{{ tool.notes }}</span>
                            <a href="{{ '/contact/#tools-waitlist' | relative_url }}" class="btn btn-secondary">Join waitlist</a>
                            {% endif %}
                            {% if tool.demo_url %}
                            <a href="{{ tool.demo_url }}" target="_blank" rel="noopener" class="btn btn-outline">
                                <span class="btn-icon">🚀</span>
                                Demo
                            </a>
                            {% endif %}
                        </div>
                    </div>
                    {% endfor %}
                </div>

                <div class="tools-lead">
                    <h2>Get notified when new tools ship</h2>
                    <p>We release practical automations every month—ranging from cost analytics to platform guardrails. Drop your email to receive early access and implementation tips.</p>
                    <form class="tools-lead-form" action="https://formspree.io/f/your-form-id" method="POST">
                        <label for="tools-email" class="visually-hidden">Email address</label>
                        <input type="email" id="tools-email" name="email" placeholder="you@company.com" required>
                        <button type="submit" class="btn btn-primary">Notify me</button>
                    </form>
                    <p class="tools-lead-note">Prefer GitHub? <a href="https://github.com/1devops" target="_blank" rel="noopener">Follow the 1DevOps organization</a> for source updates.</p>
                </div>
            {% else %}
                <div class="no-tools">
                    <div class="no-tools-icon">🛠️</div>
                    <h2>Tools Coming Soon</h2>
                    <p>Sign up to be first in line when the next automation drops.</p>
                    <form class="tools-lead-form" action="https://formspree.io/f/your-form-id" method="POST">
                        <label for="tools-email-fallback" class="visually-hidden">Email address</label>
                        <input type="email" id="tools-email-fallback" name="email" placeholder="you@company.com" required>
                        <button type="submit" class="btn btn-primary">Notify me</button>
                    </form>
                </div>
            {% endif %}
        </div>
    </section>

    <section class="tool-categories">
        <div class="container">
            <h2>Tool Categories</h2>
            <div class="categories-grid">
                <div class="category-card">
                    <div class="category-icon">🐳</div>
                    <h3>Container Orchestration</h3>
                    <p>Kubernetes management, Docker optimization, and container security tools</p>
                    <ul class="category-features">
                        <li>Cluster setup automation</li>
                        <li>Deployment scripts</li>
                        <li>Monitoring solutions</li>
                        <li>Security scanning</li>
                    </ul>
                </div>

                <div class="category-card">
                    <div class="category-icon">🔄</div>
                    <h3>CI/CD Automation</h3>
                    <p>Pipeline templates, testing frameworks, and deployment automation</p>
                    <ul class="category-features">
                        <li>Multi-platform pipelines</li>
                        <li>Testing automation</li>
                        <li>Deployment strategies</li>
                        <li>Quality gates</li>
                    </ul>
                </div>

                <div class="category-card">
                    <div class="category-icon">☁️</div>
                    <h3>Cloud Infrastructure</h3>
                    <p>Infrastructure as Code, cloud optimization, and multi-cloud management</p>
                    <ul class="category-features">
                        <li>Terraform modules</li>
                        <li>Cost optimization</li>
                        <li>Resource management</li>
                        <li>Migration tools</li>
                    </ul>
                </div>

                <div class="category-card">
                    <div class="category-icon">📊</div>
                    <h3>Monitoring & Observability</h3>
                    <p>Complete monitoring stacks, alerting systems, and performance analysis</p>
                    <ul class="category-features">
                        <li>Metrics collection</li>
                        <li>Log aggregation</li>
                        <li>Alert management</li>
                        <li>Dashboard templates</li>
                    </ul>
                </div>

                <div class="category-card">
                    <div class="category-icon">🔒</div>
                    <h3>Security & Compliance</h3>
                    <p>Security scanning, compliance checking, and vulnerability management</p>
                    <ul class="category-features">
                        <li>Vulnerability scanning</li>
                        <li>Compliance auditing</li>
                        <li>Security hardening</li>
                        <li>Access management</li>
                    </ul>
                </div>

                <div class="category-card">
                    <div class="category-icon">⚡</div>
                    <h3>Performance Optimization</h3>
                    <p>System tuning, performance analysis, and resource optimization tools</p>
                    <ul class="category-features">
                        <li>Performance profiling</li>
                        <li>Resource optimization</li>
                        <li>Capacity planning</li>
                        <li>Bottleneck analysis</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="tools-philosophy">
        <div class="container">
            <div class="philosophy-content">
                <h2>Tool Development Philosophy</h2>
                <div class="philosophy-grid">
                    <div class="philosophy-item">
                        <div class="philosophy-icon">🎯</div>
                        <h3>Production-Ready</h3>
                        <p>Every tool is tested in real production environments before release. No experimental code or untested configurations.</p>
                    </div>

                    <div class="philosophy-item">
                        <div class="philosophy-icon">📚</div>
                        <h3>Well-Documented</h3>
                        <p>Comprehensive documentation with examples, best practices, and troubleshooting guides for every tool.</p>
                    </div>

                    <div class="philosophy-item">
                        <div class="philosophy-icon">🔧</div>
                        <h3>Highly Configurable</h3>
                        <p>Flexible configuration options to adapt to different environments and use cases without modification.</p>
                    </div>

                    <div class="philosophy-item">
                        <div class="philosophy-icon">🚀</div>
                        <h3>Performance Focused</h3>
                        <p>Optimized for efficiency and minimal resource usage while maintaining functionality and reliability.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="custom-tools-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Need Custom Tools?</h2>
                <p>Looking for specific automation tools or custom solutions for your infrastructure? I can develop tailored tools that fit your exact requirements.</p>
                
                <div class="custom-services">
                    <div class="service-item">
                        <h3>🛠️ Custom Automation Scripts</h3>
                        <p>Bespoke automation solutions for your specific workflow and infrastructure needs.</p>
                    </div>
                    
                    <div class="service-item">
                        <h3>🔧 Tool Integration</h3>
                        <p>Connect and integrate existing tools into seamless, automated workflows.</p>
                    </div>
                    
                    <div class="service-item">
                        <h3>📊 Custom Dashboards</h3>
                        <p>Tailored monitoring and reporting dashboards for your specific metrics and KPIs.</p>
                    </div>
                </div>
                
                <div class="cta-actions">
                    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">
                        <span class="btn-icon">💬</span>
                        Discuss Your Needs
                    </a>
                    <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary btn-lg">
                        <span class="btn-icon">👤</span>
                        See My Experience
                    </a>
                </div>
                
                <p class="cta-note">Free consultation • Custom quotes • Ongoing support available</p>
            </div>
        </div>
    </section>
</div>

<style>
.tools-page {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-2xl);
    background-color: var(--gray-50);
}

.tools-header {
    text-align: center;
    padding: var(--space-2xl) 0;
    background-color: var(--primary);
    color: var(--white);
    margin-bottom: var(--space-2xl);
}

.tools-header h1 {
    font-size: var(--font-size-xxl);
    margin-bottom: var(--space-sm);
}

.tools-header p.lead {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-md);
}

.tools-header p {
    font-size: var(--font-size-md);
    color: var(--white);
    opacity: 0.9;
}

.tools-grid-section {
    padding: var(--space-2xl) 0;
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-xl);
}

.tool-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: var(--space-xl);
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
}

.tool-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.tool-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
}

.tool-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-50);
    border-radius: 12px;
}

.tool-info {
    flex-grow: 1;
}

.tool-info h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.tool-category {
    display: inline-block;
    background: var(--primary-light);
    color: var(--primary);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 12px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.tool-description {
    margin-bottom: var(--space-lg);
    color: var(--gray-600);
}

.tool-meta {
    margin-bottom: var(--space-lg);
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
}

.tech-badge {
    background: var(--gray-100);
    color: var(--gray-700);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 12px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.tool-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-lg) 0;
}

.tool-features li {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-xs);
}

.tool-actions {
    display: flex;
    gap: var(--space-sm);
    margin-top: auto; /* Push actions to the bottom */
}

.btn {
    padding: var(--space-sm) var(--space-lg);
    border-radius: 12px;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
}

.btn-primary {
    background-color: var(--primary);
    color: var(--white);
    border: 2px solid var(--primary);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
}

.btn-secondary {
    background-color: var(--white);
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background-color: var(--primary-light);
    border-color: var(--primary);
}

.btn-outline {
    background-color: var(--white);
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-outline:hover {
    background-color: var(--primary-light);
    border-color: var(--primary);
}

.btn-icon {
    font-size: var(--font-size-md);
}

.no-tools {
    text-align: center;
    padding: var(--space-2xl) 0;
    background-color: var(--white);
    border-radius: 12px;
    border: 1px solid var(--gray-200);
}

.no-tools-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
}

.upcoming-tools {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-lg);
}

.upcoming-tool {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: var(--space-md);
    text-align: center;
}

.upcoming-tool h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.upcoming-tool p {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
}

.tools-cta {
    margin-top: var(--space-2xl);
    text-align: center;
}

.tools-cta p {
    font-size: var(--font-size-md);
    margin-bottom: var(--space-md);
}

.category-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: var(--space-xl);
    text-align: center;
    transition: all 0.2s;
}

.category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
}

.category-card h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.category-card p {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-md);
}

.category-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.category-features li {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-xs);
}

.tools-philosophy {
    padding: var(--space-2xl) 0;
    background-color: var(--gray-50);
}

.philosophy-content {
    text-align: center;
}

.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    margin-top: var(--space-lg);
}

.philosophy-item {
    text-align: center;
}

.philosophy-icon {
    font-size: 3rem;
    margin-bottom: var(--space-sm);
}

.philosophy-item h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.philosophy-item p {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
}

.custom-tools-cta {
    padding: var(--space-2xl) 0;
    background-color: var(--primary);
    color: var(--white);
}

.cta-content {
    text-align: center;
}

.cta-content h2 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-md);
}

.cta-content p {
    font-size: var(--font-size-md);
    margin-bottom: var(--space-lg);
}

.custom-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-lg);
}

.service-item {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: var(--space-md);
    text-align: center;
}

.service-item h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.service-item p {
    color: var(--gray-600);
    font-size: var(--font-size-sm);
}

.cta-actions {
    display: flex;
    gap: var(--space-sm);
    justify-content: center;
    margin-top: var(--space-lg);
}

.btn-lg {
    padding: var(--space-md) var(--space-xl);
}

.cta-note {
    font-size: var(--font-size-sm);
    color: var(--white);
    opacity: 0.8;
    margin-top: var(--space-lg);
}

@media (max-width: 768px) {
    .tools-grid {
        grid-template-columns: 1fr;
    }
    
    .tool-actions {
        flex-direction: column;
    }

    .category-grid {
        grid-template-columns: 1fr;
    }

    .cta-actions {
        flex-direction: column;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const toolCards = document.querySelectorAll('.tool-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter tools
            toolCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || category === cardCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
</script> 
