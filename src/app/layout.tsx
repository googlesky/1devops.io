import type { Metadata, Viewport } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://1devops.io'
const siteName = '1DevOps'
const siteTitle = 'Le Phuong Hieu - Senior DevOps Engineer & Cloud Architect'
const siteDescription = 'Senior DevOps Engineer with 13+ years of experience transforming infrastructure at scale. Expert in Kubernetes, AWS, GCP, Azure, Terraform, and building resilient cloud-native platforms. Helping businesses achieve 99.99% uptime and 10x faster deployments.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050508' },
    { media: '(prefers-color-scheme: light)', color: '#050508' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Basic metadata
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'Le Phuong Hieu', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'DevOps Engineer',
    'Cloud Architect',
    'Kubernetes Expert',
    'AWS Solutions Architect',
    'GCP Engineer',
    'Azure DevOps',
    'Terraform',
    'Infrastructure as Code',
    'CI/CD Pipeline',
    'Docker',
    'Site Reliability Engineering',
    'SRE',
    'Platform Engineering',
    'Cloud Migration',
    'Microservices',
    'Le Phuong Hieu',
    '1DevOps',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Le Phuong Hieu',
  publisher: siteName,

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical and alternates
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'vi-VN': `${siteUrl}/vi`,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'vi_VN',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/assets/images/social-card.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Professional DevOps Solutions`,
        type: 'image/png',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/assets/images/social-card.png`],
    creator: '@googlesky',
    site: '@1devops_io',
  },

  // Icons
  icons: {
    icon: [
      { url: '/assets/images/favicon.ico', sizes: 'any' },
      { url: '/assets/images/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/images/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/assets/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/images/favicon.ico',
  },

  // Manifest
  manifest: '/site.webmanifest',

  // Verification (add your verification codes here)
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },

  // Category
  category: 'technology',

  // Other
  other: {
    'msapplication-TileColor': '#050508',
    'format-detection': 'telephone=no',
  },
}

// Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite Schema
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // Person Schema (for personal branding)
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Le Phuong Hieu',
      alternateName: ['Hieu Le', 'googlesky'],
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#personImage`,
        url: `${siteUrl}/assets/images/profile-art.png`,
        caption: 'Le Phuong Hieu - Senior DevOps Engineer',
      },
      description: siteDescription,
      jobTitle: 'Senior DevOps Engineer & Cloud Architect',
      worksFor: {
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
      },
      knowsAbout: [
        'DevOps',
        'Cloud Architecture',
        'Kubernetes',
        'AWS',
        'Google Cloud Platform',
        'Microsoft Azure',
        'Terraform',
        'Docker',
        'CI/CD',
        'Site Reliability Engineering',
        'Infrastructure as Code',
        'Microservices Architecture',
      ],
      sameAs: [
        'https://www.linkedin.com/in/googlesky/',
        'https://github.com/googlesky',
        'https://twitter.com/googlesky',
      ],
    },
    // Organization Schema
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      alternateName: '1DevOps - Professional DevOps Solutions',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        url: `${siteUrl}/assets/images/logo.png`,
        width: 512,
        height: 512,
        caption: siteName,
      },
      image: { '@id': `${siteUrl}/#logo` },
      description: siteDescription,
      founder: { '@id': `${siteUrl}/#person` },
      foundingDate: '2020',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hieulp@1devops.io',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Vietnamese'],
      },
      sameAs: [
        'https://www.linkedin.com/in/googlesky/',
        'https://github.com/googlesky',
      ],
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/images/social-card.png`,
      },
      datePublished: '2020-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-US',
    },
    // ProfessionalService Schema
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: `${siteName} - DevOps Consulting`,
      description: 'Professional DevOps consulting, cloud architecture, and infrastructure automation services.',
      url: siteUrl,
      provider: { '@id': `${siteUrl}/#person` },
      areaServed: 'Worldwide',
      serviceType: [
        'DevOps Consulting',
        'Cloud Architecture',
        'Kubernetes Implementation',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Cloud Migration',
        'Site Reliability Engineering',
      ],
      priceRange: '$$$$',
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
