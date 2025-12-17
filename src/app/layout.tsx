import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Senior DevOps Engineer & Cloud Architect - 1DevOps - Professional DevOps Solutions',
  description: '13+ years transforming infrastructure at scale. Expert in Kubernetes, AWS, Terraform, and building resilient cloud-native platforms.',
  authors: [{ name: 'Le Phuong Hieu' }],
  keywords: ['DevOps', 'Cloud Architect', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Infrastructure'],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://1devops.io/',
    title: 'Senior DevOps Engineer & Cloud Architect',
    description: '13+ years transforming infrastructure at scale. Expert in Kubernetes, AWS, Terraform, and building resilient cloud-native platforms.',
    siteName: '1DevOps - Professional DevOps Solutions',
    images: [
      {
        url: 'https://1devops.io/assets/images/social-card.png',
        width: 1200,
        height: 630,
        alt: '1DevOps - Professional DevOps Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior DevOps Engineer & Cloud Architect',
    description: '13+ years transforming infrastructure at scale. Expert in Kubernetes, AWS, Terraform, and building resilient cloud-native platforms.',
    images: ['https://1devops.io/assets/images/social-card.png'],
  },
  icons: {
    icon: [
      { url: '/assets/images/logo.svg', type: 'image/svg+xml' },
      { url: '/assets/images/favicon.png', type: 'image/png' },
    ],
    apple: '/assets/images/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://1devops.io'),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '1DevOps - Professional DevOps Solutions',
              url: 'https://1devops.io',
              logo: 'https://1devops.io/assets/images/logo.png',
              sameAs: ['https://www.linkedin.com/in/googlesky/'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hieulp@1devops.io',
                areaServed: 'Global',
                availableLanguage: ['en', 'vi'],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
