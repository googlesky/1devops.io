---
layout: page
title: "Tools"
description: "Professional DevOps tools and utilities for modern development teams"
permalink: /tools/
---

<div class="tools-grid">
    <div class="card">
        <div class="tool-header">
            <h3>🔄 Jenkins Pipeline Builder</h3>
            <span class="badge badge-primary">CI/CD</span>
        </div>
        <p>Visual pipeline builder for Jenkins with drag-and-drop interface. Simplify your CI/CD pipeline creation.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>

    <div class="card">
        <div class="tool-header">
            <h3>📊 DevOps Dashboard</h3>
            <span class="badge badge-secondary">Monitoring</span>
        </div>
        <p>Comprehensive monitoring dashboard for DevOps teams. Track metrics, logs, and alerts in real-time.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>

    <div class="card">
        <div class="tool-header">
            <h3>🔒 Security Scanner</h3>
            <span class="badge badge-danger">Security</span>
        </div>
        <p>Advanced container security scanner that detects vulnerabilities and compliance issues.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>

    <div class="card">
        <div class="tool-header">
            <h3>🏗️ Terraform Generator</h3>
            <span class="badge badge-warning">Infrastructure</span>
        </div>
        <p>Generate reusable Terraform modules with best practices. Accelerate your IaC development.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>

    <div class="card">
        <div class="tool-header">
            <h3>📦 Kubernetes Validator</h3>
            <span class="badge badge-primary">Containers</span>
        </div>
        <p>Validate and optimize your Kubernetes configurations. Ensure best practices and catch errors.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>

    <div class="card">
        <div class="tool-header">
            <h3>🚀 Deployment Automation</h3>
            <span class="badge badge-primary">CI/CD</span>
        </div>
        <p>Automated deployment pipeline for multi-environment setups with blue-green and canary strategies.</p>
        <div class="tool-actions">
            <a href="#" class="btn btn-primary">Try Now</a>
            <a href="#" class="btn btn-secondary">Documentation</a>
        </div>
    </div>
</div>

## Popular Tool Categories

<div class="grid grid-3">
    <div class="card">
        <h3>🔄 CI/CD Pipeline Tools</h3>
        <p>Streamline your continuous integration and deployment processes with our comprehensive pipeline tools.</p>
        <ul>
            <li>Pipeline Builder</li>
            <li>Deployment Automation</li>
            <li>Test Integration</li>
            <li>Release Management</li>
        </ul>
    </div>
    
    <div class="card">
        <h3>📊 Monitoring & Observability</h3>
        <p>Gain deep insights into your infrastructure and applications with advanced monitoring solutions.</p>
        <ul>
            <li>Real-time Dashboards</li>
            <li>Performance Analytics</li>
            <li>Log Aggregation</li>
            <li>Alert Management</li>
        </ul>
    </div>
    
    <div class="card">
        <h3>🔒 Security & Compliance</h3>
        <p>Ensure your DevOps pipeline is secure and compliant with industry standards and best practices.</p>
        <ul>
            <li>Vulnerability Scanning</li>
            <li>Secret Management</li>
            <li>Compliance Checking</li>
            <li>Access Control</li>
        </ul>
    </div>
</div>

<style>
.tools-categories {
    margin-bottom: var(--space-xl);
}

.category-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.tab-button {
    padding: var(--space-sm) var(--space-lg);
    border: 2px solid var(--gray-300);
    background: var(--white);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
}

.tab-button.active,
.tab-button:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
}

.tool-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: var(--space-xl);
    transition: all 0.2s;
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

.tool-info h3 {
    margin-bottom: var(--space-sm);
    color: var(--gray-900);
}

.tool-content p {
    margin-bottom: var(--space-lg);
    color: var(--gray-600);
}

.tool-features {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-lg);
}

.feature-tag {
    background: var(--gray-100);
    color: var(--gray-700);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 12px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.tool-actions {
    display: flex;
    gap: var(--space-sm);
}

@media (max-width: 768px) {
    .tools-grid {
        grid-template-columns: 1fr;
    }
    
    .tool-actions {
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