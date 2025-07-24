---
layout: page
title: "DevOps Blog"
description: "Latest insights, tutorials, and best practices in DevOps, cloud infrastructure, and automation from Le Phuong Hieu."
permalink: /blog/
---

<div class="blog-page">
    <div class="blog-header">
        <div class="container">
            <h1>DevOps Blog</h1>
            <p class="lead">Insights, tutorials, and best practices from 12+ years of DevOps experience</p>
            <p>Sharing practical knowledge about Kubernetes, cloud infrastructure, automation, and the evolving world of DevOps.</p>
        </div>
    </div>

    <section class="blog-content">
        <div class="container">
            {% if site.posts.size > 0 %}
                <div class="posts-grid">
                    {% for post in site.posts %}
                    <article class="post-card">
                        <div class="post-meta">
                            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                            {% if post.categories.size > 0 %}
                                <span class="post-category">{{ post.categories | first | capitalize }}</span>
                            {% endif %}
                        </div>
                        <h2 class="post-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h2>
                        <p class="post-excerpt">
                            {{ post.excerpt | strip_html | truncatewords: 30 }}
                        </p>
                        <div class="post-tags">
                            {% for tag in post.tags limit: 3 %}
                                <span class="tag">{{ tag }}</span>
                            {% endfor %}
                        </div>
                        <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
                    </article>
                    {% endfor %}
                </div>

                <!-- Pagination -->
                {% if paginator.total_pages > 1 %}
                <div class="pagination">
                    <div class="pagination-info">
                        Page {{ paginator.page }} of {{ paginator.total_pages }}
                    </div>
                    <div class="pagination-links">
                        {% if paginator.previous_page %}
                            <a href="{{ paginator.previous_page_path | relative_url }}" class="btn btn-secondary">Previous</a>
                        {% endif %}
                        {% if paginator.next_page %}
                            <a href="{{ paginator.next_page_path | relative_url }}" class="btn btn-secondary">Next</a>
                        {% endif %}
                    </div>
                </div>
                {% endif %}
            {% else %}
                <div class="no-posts">
                    <div class="no-posts-icon">📝</div>
                    <h2>Coming Soon</h2>
                    <p>I'm working on creating valuable content about DevOps, Kubernetes, and cloud infrastructure. Check back soon for the latest insights and tutorials!</p>
                    <p>In the meantime, feel free to:</p>
                    <div class="no-posts-actions">
                        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Get in Touch</a>
                        <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary">Learn About Me</a>
                    </div>
                </div>
            {% endif %}
        </div>
    </section>

    <section class="blog-categories">
        <div class="container">
            <h2>Topics I Write About</h2>
            <div class="categories-grid">
                <div class="category-card">
                    <div class="category-icon">🐳</div>
                    <h3>Containerization</h3>
                    <p>Docker, Kubernetes, container orchestration, and best practices for containerized applications.</p>
                </div>

                <div class="category-card">
                    <div class="category-icon">☁️</div>
                    <h3>Cloud Infrastructure</h3>
                    <p>AWS, Azure, multi-cloud strategies, and cloud-native architecture patterns.</p>
                </div>

                <div class="category-card">
                    <div class="category-icon">🔄</div>
                    <h3>CI/CD & Automation</h3>
                    <p>Continuous integration, deployment pipelines, and infrastructure automation.</p>
                </div>

                <div class="category-card">
                    <div class="category-icon">🛡️</div>
                    <h3>Security & Monitoring</h3>
                    <p>DevSecOps practices, vulnerability management, and infrastructure monitoring.</p>
                </div>

                <div class="category-card">
                    <div class="category-icon">🔧</div>
                    <h3>Tools & Technologies</h3>
                    <p>Reviews and tutorials for the latest DevOps tools and technologies.</p>
                </div>

                <div class="category-card">
                    <div class="category-icon">📚</div>
                    <h3>Best Practices</h3>
                    <p>Lessons learned, architectural decisions, and industry best practices.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter-signup">
        <div class="container">
            <div class="newsletter-card">
                <h2>Stay Updated</h2>
                <p>Get the latest DevOps insights and tutorials delivered to your inbox. No spam, just valuable content.</p>
                <form class="newsletter-form" action="https://formspree.io/f/your-newsletter-id" method="POST">
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Enter your email address" required class="form-input">
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </div>
                    <p class="newsletter-note">Unsubscribe at any time. Your email is never shared.</p>
                </form>
            </div>
        </div>
    </section>
</div>

<style>
.blog-page {
    background-color: var(--gray-50);
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.blog-header {
    background-color: var(--white);
    padding: 4rem 0;
    text-align: center;
    margin-bottom: 3rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.blog-header h1 {
    font-size: 3.5rem;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.blog-header p.lead {
    font-size: 1.25rem;
    color: var(--gray-700);
    margin-bottom: 1rem;
}

.blog-header p {
    font-size: 1.125rem;
    color: var(--gray-600);
    margin-bottom: 2rem;
}

.blog-content {
    margin-bottom: 3rem;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.post-card {
    background-color: var(--white);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
}

.post-meta time {
    font-size: 0.875rem;
    color: var(--gray-600);
}

.post-category {
    background-color: var(--primary-light);
    color: var(--primary);
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.post-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
    margin: 0.5rem 1.5rem 0.75rem;
    line-height: 1.3;
}

.post-title a {
    color: var(--gray-900);
    text-decoration: none;
}

.post-title a:hover {
    color: var(--primary);
    text-decoration: underline;
}

.post-excerpt {
    font-size: 1rem;
    color: var(--gray-700);
    padding: 0 1.5rem 1.5rem;
    line-height: 1.6;
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid var(--gray-200);
}

.tag {
    background-color: var(--gray-200);
    color: var(--gray-800);
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.read-more {
    display: inline-block;
    margin: 0 1.5rem 1.5rem;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease;
}

.read-more:hover {
    background-color: var(--primary-dark);
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--gray-200);
}

.pagination-info {
    font-size: 1rem;
    color: var(--gray-600);
}

.pagination-links {
    display: flex;
    gap: 1rem;
}

.btn-secondary {
    background-color: var(--gray-200);
    color: var(--gray-800);
    border: 1px solid var(--gray-300);
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.btn-secondary:hover {
    background-color: var(--gray-300);
    border-color: var(--gray-400);
}

.no-posts {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.no-posts-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.no-posts h2 {
    font-size: 2rem;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.no-posts p {
    font-size: 1.125rem;
    color: var(--gray-600);
    margin-bottom: 2rem;
}

.no-posts-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.blog-categories {
    background-color: var(--white);
    padding: 4rem 0;
    margin-bottom: 3rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.blog-categories h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--gray-900);
    margin-bottom: 2rem;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
}

.category-card {
    text-align: center;
    padding: 2rem;
    background-color: var(--gray-50);
    border-radius: 0.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.category-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
}

.category-card h3 {
    font-size: 1.5rem;
    color: var(--gray-900);
    margin-bottom: 0.75rem;
}

.category-card p {
    font-size: 1rem;
    color: var(--gray-600);
    line-height: 1.6;
}

.newsletter-signup {
    background-color: var(--primary);
    padding: 4rem 0;
    margin-top: 3rem;
}

.newsletter-card {
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 3rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.newsletter-card h2 {
    font-size: 2rem;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.newsletter-card p {
    font-size: 1.125rem;
    color: var(--gray-600);
    margin-bottom: 2rem;
}

.newsletter-form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.form-group {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
    max-width: 400px;
}

.form-input {
    flex-grow: 1;
    border: none;
    padding: 0.75rem 0.5rem;
    font-size: 1rem;
    color: var(--gray-900);
}

.form-input:focus {
    outline: none;
}

.btn-primary {
    background-color: var(--white);
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.btn-primary:hover {
    background-color: var(--primary);
    color: var(--white);
    border-color: var(--primary);
}

.newsletter-note {
    font-size: 0.875rem;
    color: var(--gray-600);
    margin-top: 1.5rem;
}

@media (max-width: 768px) {
    .blog-header h1 {
        font-size: 2.5rem;
    }

    .blog-header p.lead {
        font-size: 1rem;
    }

    .blog-header p {
        font-size: 1rem;
    }

    .posts-grid {
        grid-template-columns: 1fr;
    }

    .pagination {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .pagination-links {
        width: 100%;
        justify-content: center;
    }

    .no-posts-actions {
        flex-direction: column;
        gap: 1rem;
    }

    .blog-categories h2 {
        font-size: 2rem;
    }

    .categories-grid {
        grid-template-columns: 1fr;
    }

    .newsletter-form {
        flex-direction: column;
        align-items: center;
    }

    .form-group {
        width: 90%;
        max-width: none;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
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