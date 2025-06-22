---
layout: page
title: "News"
description: "Latest DevOps news, updates, and industry insights"
permalink: /news/
---

<div class="news-page">
    <div class="section-header">
        <h1>Latest DevOps News</h1>
        <p>Stay updated with the latest trends, best practices, and developments in the DevOps ecosystem</p>
    </div>

    <div class="container">
        <div class="news-grid">
            {% for post in site.posts %}
            <article class="news-card">
                <div class="news-image">
                    📄
                </div>
                <div class="news-content">
                    <div class="news-meta">
                        <span>{{ post.date | date: "%B %d, %Y" }}</span>
                        <span>•</span>
                        <span>{{ post.author | default: "Lê Phương Hiếu" }}</span>
                    </div>
                    <h2 class="news-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h2>
                    <p class="news-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                    <a href="{{ post.url | relative_url }}" class="read-more">
                        Read more →
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="text-center py-8">
            <h3>No news articles yet</h3>
            <p>Check back soon for the latest DevOps news and insights!</p>
        </div>
        {% endif %}
    </div>

    <div class="container">
        <div class="section-header">
            <h2>Featured Topics</h2>
        </div>
        
        <div class="grid grid-3">
            <div class="card">
                <h3>🚀 DevOps Trends 2024</h3>
                <p>Discover the latest trends shaping the DevOps landscape this year, from AI-powered automation to enhanced security practices.</p>
                <a href="#" class="btn btn-outline">Learn More</a>
            </div>
            
            <div class="card">
                <h3>🔒 Security Best Practices</h3>
                <p>Stay ahead of security threats with our comprehensive guides on DevSecOps, container security, and compliance.</p>
                <a href="#" class="btn btn-outline">Read Guide</a>
            </div>
            
            <div class="card">
                <h3>☁️ Cloud Native Updates</h3>
                <p>Keep up with the rapidly evolving cloud native ecosystem, including Kubernetes updates and new CNCF projects.</p>
                <a href="#" class="btn btn-outline">Explore</a>
            </div>
        </div>
    </div>
</div> 