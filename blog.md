---
layout: page
title: "Blog"
description: "Technical insights, tutorials, and best practices from Lê Phương Hiếu - Senior DevOps/SRE Engineer"
permalink: /blog/
---

<div class="page-header">
    <div class="container">
        <h1>DevOps Blog</h1>
        <p class="text-xl">Technical insights, tutorials, and best practices from 12+ years of DevOps experience</p>
        <div class="blog-stats mt-4">
            <span class="badge badge-primary">{{ site.posts.size }} Articles</span>
            <span class="badge badge-secondary">Technical Tutorials</span>
            <span class="badge badge-info">Best Practices</span>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="container">
        
        <!-- Featured Article -->
        {% assign featured_post = site.posts.first %}
        <section class="mb-6">
            <h2>Featured Article</h2>
            <div class="featured-article card">
                <div class="card-header">
                    <h3 class="card-title">
                        <a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a>
                    </h3>
                    <div class="card-meta">
                        <span class="text-gray-600">{{ featured_post.date | date: "%B %d, %Y" }}</span>
                        <span class="text-gray-600">by {{ featured_post.author | default: site.author.name }}</span>
                        {% if featured_post.categories %}
                        <div class="categories mt-2">
                            {% for category in featured_post.categories %}
                            <span class="badge badge-outline">{{ category }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                    </div>
                </div>
                <div class="card-content">
                    <p class="text-lg">{{ featured_post.excerpt | strip_html | truncatewords: 30 }}</p>
                    <a href="{{ featured_post.url | relative_url }}" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
        </section>

        <!-- Categories Filter -->
        <section class="mb-6">
            <h2>Browse by Category</h2>
            <div class="category-filters">
                <button class="filter-btn active" data-filter="all">All Posts</button>
                {% assign categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq | sort %}
                {% for category in categories %}
                {% unless category == blank %}
                <button class="filter-btn" data-filter="{{ category | downcase | replace: ' ', '-' }}">{{ category }}</button>
                {% endunless %}
                {% endfor %}
            </div>
        </section>

        <!-- Blog Posts Grid -->
        <section class="mb-6">
            <h2>All Articles</h2>
            <div class="blog-grid">
                {% for post in site.posts %}
                <article class="blog-card card" data-categories="{% for cat in post.categories %}{{ cat | downcase | replace: ' ', '-' }} {% endfor %}">
                    <div class="card-header">
                        <h3 class="card-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h3>
                        <div class="card-meta">
                            <span class="text-gray-600">{{ post.date | date: "%B %d, %Y" }}</span>
                            <span class="text-gray-600">{{ post.author | default: site.author.name }}</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                        {% if post.categories %}
                        <div class="categories mb-3">
                            {% for category in post.categories %}
                            <span class="badge badge-secondary">{{ category }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        {% if post.tags %}
                        <div class="tags mb-3">
                            {% for tag in post.tags limit: 3 %}
                            <span class="tag">#{{ tag }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        <a href="{{ post.url | relative_url }}" class="btn btn-outline">Read More</a>
                    </div>
                </article>
                {% endfor %}
            </div>
        </section>

        <!-- Newsletter Subscription -->
        <section class="newsletter-section bg-gray-50 py-6 px-6 rounded-lg text-center">
            <h2>Stay Updated</h2>
            <p class="text-lg mb-4">Get the latest DevOps insights and tutorials delivered to your inbox</p>
            <form class="newsletter-form" style="max-width: 400px; margin: 0 auto;">
                <div class="form-group">
                    <input type="email" placeholder="Enter your email address" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary">Subscribe to Blog</button>
            </form>
            <p class="text-sm text-gray-600 mt-3">No spam, unsubscribe anytime. Privacy policy applies.</p>
        </section>

        <!-- Archive Section -->
        <section class="archive-section">
            <h2>Archive</h2>
            <div class="archive-grid">
                {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
                {% for year in posts_by_year %}
                <div class="archive-year">
                    <h3>{{ year.name }}</h3>
                    <ul class="archive-list">
                        {% for post in year.items %}
                        <li class="archive-item">
                            <span class="archive-date">{{ post.date | date: "%b %d" }}</span>
                            <a href="{{ post.url | relative_url }}" class="archive-link">{{ post.title }}</a>
                        </li>
                        {% endfor %}
                    </ul>
                </div>
                {% endfor %}
            </div>
        </section>

    </div>
</div>

<style>
.blog-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.featured-article {
    border-left: 4px solid var(--primary);
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
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

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.blog-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.blog-card.hidden {
    display: none;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    font-size: 0.875rem;
    color: var(--gray-600);
    font-weight: 500;
}

.newsletter-form {
    display: flex;
    gap: 0.5rem;
    align-items: end;
}

.archive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.archive-year h3 {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.archive-list {
    list-style: none;
    padding: 0;
}

.archive-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-200);
}

.archive-date {
    font-size: 0.875rem;
    color: var(--gray-600);
    min-width: 60px;
    margin-right: 1rem;
}

.archive-link {
    color: var(--gray-900);
    text-decoration: none;
    font-weight: 500;
}

.archive-link:hover {
    color: var(--primary);
    text-decoration: underline;
}

@media (max-width: 768px) {
    .blog-grid {
        grid-template-columns: 1fr;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
    
    .archive-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter blog cards
            blogCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.dataset.categories;
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We\'ll send you updates about new DevOps articles.');
            this.reset();
        });
    }
});
</script> 