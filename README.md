# 1DevOps - Professional DevOps Solutions

A modern Jekyll-based website for 1DevOps, showcasing the expertise of **Lê Phương Hiếu**, a Senior DevOps/SRE Engineer with 12+ years of experience in system administration, cloud infrastructure, and automation.

## 🚀 Features

### ✅ **Fully Implemented - All 8 Phases Complete**

- **Personal Profile**: Comprehensive professional profile based on real resume data from Lê Phương Hiếu
- **Modern Design**: CD Foundation inspired layout with professional blue/teal color scheme
- **Responsive Layout**: Mobile-first design optimized for all devices and screen sizes
- **DevOps Expertise**: Showcasing 12+ years of experience with Kubernetes, cloud platforms, and automation
- **Security Focus**: Dedicated vulnerabilities tracking and security insights with sample CVE entries
- **News & Updates**: Latest DevOps trends, best practices, and technical articles (4 sample articles)
- **Interactive CLI**: Direct access to DevOps command-line tools at hieulp.1devops.io
- **Contact Integration**: Professional contact information with Vietnamese phone number and location
- **Tools Showcase**: Comprehensive DevOps tools catalog with categories and filtering


### 🎯 **Phase Implementation Status**

| Phase | Description | Status | Details |
|-------|-------------|--------|---------|
| **Phase 1** | Copy CD Foundation style with Jekyll v4.4.1 | ✅ Complete | Modern design, responsive layout, professional styling |
| **Phase 2** | Copy 1devops.io style | ✅ Complete | Customized for DevOps services and personal branding |
| **Phase 3** | Update menu & action buttons | ✅ Complete | Menu: Home/News/Vulnerabilities/Tools/Profile/About<br/>Buttons: "CLI Interactive" → hieulp.1devops.io, "Tools" → 1devops.io/tools |
| **Phase 4** | Create Profile page from resume | ✅ Complete | Professional profile with skills, experience, timeline |
| **Phase 5** | Create Contact page with resume info | ✅ Complete | Vietnamese contact details, service offerings, FAQ |
| **Phase 6** | Create News page with sample articles | ✅ Complete | 4 technical articles on DevOps trends, Kubernetes, Docker, Terraform |
| **Phase 7** | Create Vulnerabilities page | ✅ Complete | Security database with CVE entries and CVSS scores |
| **Phase 8** | Create Tools page | ✅ Complete | DevOps tools showcase with categories and descriptions |

### 🌟 **Additional Features Implemented**


- **Enhanced JavaScript**: Modern ES6+ features, mobile menu, form validation, filtering
- **Advanced CSS**: CSS Grid, Flexbox, custom properties, responsive design
- **Timeline Component**: Professional experience timeline with visual markers
- **Skills Showcase**: Categorized technical skills with badges and visual grouping
- **Statistics Cards**: Key achievements and experience metrics
- **Interactive Filtering**: Dynamic content filtering for tools and downloads
- **Professional Typography**: Inter font family for modern, readable text
- **Accessibility Features**: ARIA labels, keyboard navigation, high contrast support

## 📁 Project Structure

```
home-landing-page/
├── _config.yml              # Jekyll configuration with personal info
├── _layouts/                 # Page layouts
│   ├── default.html         # Base layout with header/footer
│   ├── page.html           # Standard page layout
│   └── post.html           # Blog post layout
├── _includes/               # Reusable components
│   ├── header.html         # Site header with navigation
│   └── footer.html         # Site footer with contact info
├── _posts/                  # Blog posts/news articles (4 articles)
│   ├── 2024-01-15-devops-trends-2024.md
│   ├── 2024-01-20-kubernetes-security-best-practices.md
│   ├── 2024-01-25-docker-security-best-practices.md
│   └── 2024-01-30-terraform-infrastructure-as-code.md
├── assets/                  # Static assets
│   ├── css/
│   │   ├── main.scss       # Main stylesheet with CD Foundation design
│   │   └── pages.scss      # Page-specific styles
│   ├── js/
│   │   └── main.js         # Modern JavaScript with ES6+ features
│   ├── images/             # Logo and favicon
│   └── LePhuongHieu - Resume.pdf  # Professional resume PDF
├── pages/                   # Static pages
│   ├── about.md            # Company information
│   ├── blog.md             # Technical blog with filtering and categories
│   ├── contact.md          # Personal contact with Vietnamese details
│   ├── documents.md        # Technical documentation and guides
│   ├── downloads.md        # Free tools, scripts, and templates
│   ├── news.md             # News listing page
│   ├── profile.md          # Professional profile page

│   ├── support.md          # Technical support services and pricing
│   ├── tools.md            # DevOps tools showcase
│   └── vulnerabilities.md  # Security vulnerabilities database
├── index.md                 # Homepage with hero and features
├── Gemfile                  # Ruby dependencies (Jekyll 4.4.1)
├── requirements.md          # Original project requirements
└── README.md               # This documentation
```

## 🛠️ Tech Stack

- **Jekyll**: v4.4.1 - Static site generator
- **Ruby**: 3.4+ with erb and logger gems
- **SCSS**: Advanced CSS preprocessing with variables and mixins
- **JavaScript**: Modern ES6+ with classes and modules
- **Liquid**: Templating language for dynamic content
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag

## 🔧 Personal Information Integrated

### Contact Details (From Resume)
- **Name**: Lê Phương Hiếu
- **Title**: Senior DevOps/SRE Engineer
- **Email**: hieulp@1devops.io
- **Phone**: (+84) 975-669-775
- **Location**: Thu Duc, Ho Chi Minh City, Vietnam
- **Website**: 1devops.io
- **CLI Interactive**: hieulp.1devops.io

### Professional Experience
- **12+ years** in DevOps and system administration
- **15+ years** with Linux (since 2009)
- **Kubernetes** cluster management from scratch
- **Multi-cloud** experience: AWS, Azure, IBM, Oracle Cloud
- **Programming**: Golang (1yr), Python (3yrs), PHP (5yrs), Shell scripting

### Skills & Technologies
- **CI/CD**: Jenkins, GitLab CI, GitHub Actions, Ansible, Terraform, Helm
- **Containers**: Docker, Kubernetes, OpenShift
- **Databases**: TiDB, MySQL, MariaDB, PostgreSQL
- **Operating Systems**: ArchLinux, CentOS/RHEL, Ubuntu, Windows, Unix

## 🚀 Quick Start

### 1. Clone and Setup

```bash
git clone <repository-url>
cd home-landing-page

# Install dependencies
bundle install --path vendor/bundle
```

### 2. Development Server

```bash
# Start Jekyll server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# With live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

### 3. Build for Production

```bash
bundle exec jekyll build
```

## 📝 Content Management

### Adding News Articles

Create new markdown files in `_posts/` with the naming convention:

```
_posts/YYYY-MM-DD-title-slug.md
```

Example post structure:

```yaml
---
layout: post
title: "Your Article Title"
date: 2024-01-15 10:00:00 +0700
author: "Lê Phương Hiếu"
categories: [DevOps, Category]
tags: [tag1, tag2, tag3]
excerpt: "Brief description of the article"
---

Your article content goes here...
```

### Updating Profile Information

Edit `profile.md` to update:
- Professional experience
- Skills and technologies
- Education background
- Contact information

### Managing Tools and Resources

- **Tools**: Edit `tools.md` to add/modify DevOps tools

- **Vulnerabilities**: Edit `vulnerabilities.md` to add security reports
- **Blog**: Edit `blog.md` for technical insights and tutorials
- **Documents**: Edit `documents.md` to manage technical documentation
- **Downloads**: Edit `downloads.md` to add downloadable resources
- **Support**: Edit `support.md` to update support services and pricing

## 🎨 Design System

### Color Palette

```scss
:root {
  --primary: #1e40af;          // Professional blue
  --secondary: #059669;        // DevOps green
  --accent: #dc2626;           // Alert red
  --warning: #d97706;          // Warning orange
  --info: #0284c7;            // Info blue
  --success: #16a34a;         // Success green
  --gray-50: #f9fafb;         // Light backgrounds
  --gray-900: #111827;        // Dark text
}
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Font weights 600-700
- **Body Text**: Font weight 400
- **Code**: Monospace font family

### Components

- **Cards**: Consistent padding and shadows
- **Buttons**: Primary, secondary, and outline variants
- **Badges**: Color-coded for different categories
- **Timeline**: Professional experience visualization
- **Stats**: Achievement metrics display

## 📊 Performance Features

- **Optimized Images**: SVG logos and compressed images
- **Minified Assets**: CSS and JavaScript optimization
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Minimal external dependencies
- **SEO Optimized**: Meta tags and structured data

## 🔒 Security Implementation

- **Vulnerability Database**: CVE tracking with CVSS scores
- **Security Articles**: Best practices and guidelines
- **Contact Security**: Professional contact methods
- **Dependencies**: Regular updates and security patches

## 🌐 Deployment Options

### GitHub Pages
```bash
# Push to GitHub and enable Pages in repository settings
git push origin main
```

### Netlify
- Build command: `bundle exec jekyll build`
- Publish directory: `_site`

### Manual Server
```bash
bundle exec jekyll build
# Upload _site/ directory to web server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- **Email**: hieulp@1devops.io
- **Phone**: (+84) 975-669-775
- **Website**: [1devops.io](https://1devops.io)
- **CLI Interactive**: [hieulp.1devops.io](https://hieulp.1devops.io)

---

Built with ❤️ by **Lê Phương Hiếu** using Jekyll v4.4.1

**Status**: ✅ **All 8 Phases Complete** - Professional DevOps website ready for production use 