---
layout: page
title: "Vulnerabilities"
description: "Security vulnerabilities database and threat intelligence for DevOps environments"
permalink: /vulnerabilities/
---

<div class="vulnerability-filters">
    <div class="filter-group">
        <label for="severity-filter">Filter by Severity:</label>
        <select id="severity-filter" class="form-input">
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
    </div>
</div>

<div class="vulnerabilities-grid">
    <!-- Critical Vulnerabilities -->
    <div class="card vulnerability-card" data-severity="critical">
        <div class="card-header">
            <h3 class="card-title">Container Escape via runc (CVE-2024-0001)</h3>
            <span class="badge badge-danger">Critical</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> January 10, 2024<br>
                <strong>Component:</strong> runc container runtime<br>
                <strong>CVSS Score:</strong> 9.8
            </div>
            <p>A critical vulnerability in runc allows attackers to escape from containers and gain access to the host system through malicious container images.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>

    <!-- High Severity -->
    <div class="card vulnerability-card" data-severity="high">
        <div class="card-header">
            <h3 class="card-title">Kubernetes API Server DoS (CVE-2024-0002)</h3>
            <span class="badge badge-warning">High</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> January 8, 2024<br>
                <strong>Component:</strong> Kubernetes API Server<br>
                <strong>CVSS Score:</strong> 7.5
            </div>
            <p>Denial of Service vulnerability in Kubernetes API server that can be exploited by authenticated users to cause cluster unavailability.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>

    <!-- Medium Severity -->
    <div class="card vulnerability-card" data-severity="medium">
        <div class="card-header">
            <h3 class="card-title">Docker Engine Information Disclosure (CVE-2024-0003)</h3>
            <span class="badge badge-warning">Medium</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> January 5, 2024<br>
                <strong>Component:</strong> Docker Engine<br>
                <strong>CVSS Score:</strong> 5.3
            </div>
            <p>Information disclosure vulnerability in Docker Engine that may expose sensitive container metadata to unauthorized users.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>

    <!-- High Severity -->
    <div class="card vulnerability-card" data-severity="high">
        <div class="card-header">
            <h3 class="card-title">Helm Template Injection (CVE-2024-0004)</h3>
            <span class="badge badge-warning">High</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> December 28, 2023<br>
                <strong>Component:</strong> Helm Package Manager<br>
                <strong>CVSS Score:</strong> 8.1
            </div>
            <p>Template injection vulnerability in Helm that allows malicious chart authors to execute arbitrary code during chart installation.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>

    <!-- Medium Severity -->
    <div class="card vulnerability-card" data-severity="medium">
        <div class="card-header">
            <h3 class="card-title">Jenkins Plugin Path Traversal (CVE-2024-0005)</h3>
            <span class="badge badge-warning">Medium</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> December 20, 2023<br>
                <strong>Component:</strong> Jenkins CI/CD<br>
                <strong>CVSS Score:</strong> 6.4
            </div>
            <p>Path traversal vulnerability in Jenkins plugin allows authenticated users to access files outside of intended directories.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>

    <!-- Low Severity -->
    <div class="card vulnerability-card" data-severity="low">
        <div class="card-header">
            <h3 class="card-title">Terraform Provider Information Leak (CVE-2024-0006)</h3>
            <span class="badge badge-gray">Low</span>
        </div>
        <div class="card-content">
            <div class="card-meta">
                <strong>Discovered:</strong> December 15, 2023<br>
                <strong>Component:</strong> Terraform AWS Provider<br>
                <strong>CVSS Score:</strong> 3.1
            </div>
            <p>Minor information disclosure in Terraform AWS provider that may expose non-sensitive configuration details in logs.</p>
            <div class="vulnerability-actions">
                <a href="#" class="btn btn-primary">View Details</a>
                <a href="#" class="btn btn-secondary">Mitigation Guide</a>
            </div>
        </div>
    </div>
</div>

## Security Resources

<div class="grid grid-3">
    <div class="card">
        <h3>Vulnerability Reporting</h3>
        <p>Found a security issue? Report it through our responsible disclosure program.</p>
        <a href="#" class="btn btn-primary">Report Vulnerability</a>
    </div>
    
    <div class="card">
        <h3>Security Guidelines</h3>
        <p>Best practices and guidelines for securing your DevOps infrastructure.</p>
        <a href="#" class="btn btn-secondary">View Guidelines</a>
    </div>
    
    <div class="card">
        <h3>Security Tools</h3>
        <p>Recommended tools for vulnerability scanning and security monitoring.</p>
        <a href="{{ '/tools/' | relative_url }}" class="btn btn-secondary">Browse Tools</a>
    </div>
</div>

<style>
.vulnerability-filters {
    margin-bottom: var(--space-xl);
    padding: var(--space-lg);
    background: var(--gray-50);
    border-radius: 8px;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.vulnerabilities-grid {
    display: grid;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
}

.vulnerability-card {
    transition: all 0.2s;
}

.vulnerability-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vulnerability-actions {
    display: flex;
    gap: var(--space-sm);
    margin-top: var(--space-md);
}

.card-meta {
    margin-bottom: var(--space-md);
    font-size: var(--font-size-sm);
    line-height: 1.6;
}

@media (min-width: 768px) {
    .vulnerabilities-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const severityFilter = document.getElementById('severity-filter');
    const vulnerabilityCards = document.querySelectorAll('.vulnerability-card');
    
    severityFilter.addEventListener('change', function() {
        const selectedSeverity = this.value;
        
        vulnerabilityCards.forEach(card => {
            const cardSeverity = card.getAttribute('data-severity');
            
            if (selectedSeverity === 'all' || selectedSeverity === cardSeverity) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
</script> 