---
layout: page
title: "Downloads"
description: "Download DevOps tools, templates, scripts, and resources from Lê Phương Hiếu's collection"
permalink: /downloads/
---

<div class="page-header">
    <div class="container">
        <h1>Downloads</h1>
        <p class="text-xl">Free DevOps tools, templates, scripts, and resources from 12+ years of experience</p>
        <div class="downloads-stats mt-4">
            <span class="badge badge-primary">50+ Resources</span>
            <span class="badge badge-secondary">Scripts & Templates</span>
            <span class="badge badge-info">Documentation</span>
            <span class="badge badge-success">Free Downloads</span>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="container">
        
        <!-- Featured Downloads -->
        <section class="mb-6">
            <h2>Featured Downloads</h2>
            <div class="grid grid-2">
                <div class="download-card card featured">
                    <div class="card-header">
                        <h3 class="card-title">📄 Professional Resume</h3>
                        <span class="badge badge-primary">PDF</span>
                    </div>
                    <div class="card-content">
                        <p>Complete professional resume with 12+ years of DevOps experience, skills, and achievements.</p>
                        <div class="download-meta">
                            <span class="file-size">250 KB</span>
                            <span class="download-count">1,234 downloads</span>
                        </div>
                        <a href="/assets/LePhuongHieu - Resume.pdf" target="_blank" class="btn btn-primary" download>
                            <span class="download-icon">⬇️</span> Download Resume
                        </a>
                    </div>
                </div>
                
                <div class="download-card card featured">
                    <div class="card-header">
                        <h3 class="card-title">🐳 Docker Security Checklist</h3>
                        <span class="badge badge-secondary">PDF</span>
                    </div>
                    <div class="card-content">
                        <p>Comprehensive security checklist for Docker containers and best practices guide.</p>
                        <div class="download-meta">
                            <span class="file-size">180 KB</span>
                            <span class="download-count">2,456 downloads</span>
                        </div>
                        <a href="#" class="btn btn-primary" onclick="downloadFile('docker-security-checklist.pdf')">
                            <span class="download-icon">⬇️</span> Download Checklist
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Download Categories -->
        <section class="mb-6">
            <h2>Browse Downloads</h2>
            <div class="category-filters">
                <button class="filter-btn active" data-filter="all">All Downloads</button>
                <button class="filter-btn" data-filter="scripts">Scripts</button>
                <button class="filter-btn" data-filter="templates">Templates</button>
                <button class="filter-btn" data-filter="documentation">Documentation</button>
                <button class="filter-btn" data-filter="tools">Tools</button>
                <button class="filter-btn" data-filter="configs">Configurations</button>
            </div>
        </section>

        <!-- Downloads Grid -->
        <section class="mb-6">
            <div class="downloads-grid">
                
                <div class="download-item card" data-category="scripts">
                    <div class="card-header">
                        <h3 class="card-title">🔧 Kubernetes Deployment Script</h3>
                        <span class="badge badge-info">Shell</span>
                    </div>
                    <div class="card-content">
                        <p>Automated script for Kubernetes cluster deployment with security configurations.</p>
                        <div class="download-meta">
                            <span class="file-size">15 KB</span>
                            <span class="download-count">856 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('k8s-deploy.sh')">
                            <span class="download-icon">⬇️</span> Download Script
                        </a>
                    </div>
                </div>

                <div class="download-item card" data-category="templates">
                    <div class="card-header">
                        <h3 class="card-title">📋 Terraform AWS Template</h3>
                        <span class="badge badge-success">HCL</span>
                    </div>
                    <div class="card-content">
                        <p>Complete Terraform template for AWS infrastructure with VPC, EC2, and RDS.</p>
                        <div class="download-meta">
                            <span class="file-size">45 KB</span>
                            <span class="download-count">2,034 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('aws-terraform-template.zip')">
                            <span class="download-icon">⬇️</span> Download Template
                        </a>
                    </div>
                </div>

                <div class="download-item card" data-category="documentation">
                    <div class="card-header">
                        <h3 class="card-title">📚 DevOps Best Practices Guide</h3>
                        <span class="badge badge-secondary">PDF</span>
                    </div>
                    <div class="card-content">
                        <p>Comprehensive guide covering DevOps best practices, tools, and methodologies.</p>
                        <div class="download-meta">
                            <span class="file-size">2.1 MB</span>
                            <span class="download-count">3,245 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('devops-best-practices.pdf')">
                            <span class="download-icon">⬇️</span> Download Guide
                        </a>
                    </div>
                </div>

                <div class="download-item card" data-category="tools">
                    <div class="card-header">
                        <h3 class="card-title">🛠️ DevOps Toolkit</h3>
                        <span class="badge badge-info">Binary</span>
                    </div>
                    <div class="card-content">
                        <p>Collection of command-line tools for DevOps automation and system management.</p>
                        <div class="download-meta">
                            <span class="file-size">5.2 MB</span>
                            <span class="download-count">987 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('devops-toolkit.tar.gz')">
                            <span class="download-icon">⬇️</span> Download Toolkit
                        </a>
                    </div>
                </div>

                <div class="download-item card" data-category="configs">
                    <div class="card-header">
                        <h3 class="card-title">⚙️ Nginx Configuration Pack</h3>
                        <span class="badge badge-warning">Config</span>
                    </div>
                    <div class="card-content">
                        <p>Optimized Nginx configurations for various use cases and environments.</p>
                        <div class="download-meta">
                            <span class="file-size">25 KB</span>
                            <span class="download-count">1,456 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('nginx-configs.zip')">
                            <span class="download-icon">⬇️</span> Download Configs
                        </a>
                    </div>
                </div>

                <div class="download-item card" data-category="configs">
                    <div class="card-header">
                        <h3 class="card-title">🐳 Docker Compose Examples</h3>
                        <span class="badge badge-primary">YAML</span>
                    </div>
                    <div class="card-content">
                        <p>Collection of Docker Compose files for common application stacks.</p>
                        <div class="download-meta">
                            <span class="file-size">18 KB</span>
                            <span class="download-count">2,123 downloads</span>
                        </div>
                        <a href="#" class="btn btn-outline" onclick="downloadFile('docker-compose-examples.zip')">
                            <span class="download-icon">⬇️</span> Download Examples
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="mb-6">
            <h2>Usage Guidelines</h2>
            <div class="guidelines-grid grid grid-2">
                <div class="card">
                    <h3>📜 License & Terms</h3>
                    <ul>
                        <li>All resources are provided under MIT License</li>
                        <li>Free for personal and commercial use</li>
                        <li>Attribution appreciated but not required</li>
                        <li>No warranty or support guaranteed</li>
                    </ul>
                </div>
                
                <div class="card">
                    <h3>🚀 Getting Started</h3>
                    <ul>
                        <li>Download the resource you need</li>
                        <li>Read the included README file</li>
                        <li>Customize for your environment</li>
                        <li>Test thoroughly before production use</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Contact for Custom Resources -->
        <section class="custom-resources bg-gray-50 py-6 px-6 rounded-lg text-center">
            <h2>Need Custom Resources?</h2>
            <p class="text-lg mb-4">Looking for specific tools or templates? I can create custom DevOps resources tailored to your needs.</p>
            <div class="flex justify-center gap-4">
                <a href="/contact/" class="btn btn-primary">Request Custom Resource</a>
                <a href="mailto:hieulp@1devops.io" class="btn btn-secondary">Email Directly</a>
            </div>
        </section>

    </div>
</div>

<style>
.downloads-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.featured-downloads {
    margin-bottom: 3rem;
}

.download-card.featured {
    border: 2px solid var(--primary);
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
}

.download-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid var(--gray-300);
    background: var(--white);
    color: var(--gray-700);
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
}

.downloads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.download-item.hidden {
    display: none;
}

.download-meta {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: 0.875rem;
    color: var(--gray-600);
}

.download-icon {
    margin-right: 0.5rem;
}

.guidelines-grid {
    margin-bottom: 3rem;
}

.guidelines-grid ul {
    list-style: none;
    padding: 0;
}

.guidelines-grid li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-200);
}

.guidelines-grid li:before {
    content: "✓";
    color: var(--success);
    font-weight: bold;
    margin-right: 0.5rem;
}

@media (max-width: 768px) {
    .downloads-grid {
        grid-template-columns: 1fr;
    }
    
    .featured-downloads {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
function downloadFile(filename) {
    alert(`Downloading ${filename}...\n\nNote: This is a demo. In production, this would download the actual file.`);
}

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const downloadItems = document.querySelectorAll('.download-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            downloadItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    const category = item.dataset.category;
                    item.style.display = category === filter ? 'block' : 'none';
                }
            });
        });
    });
});
</script> 