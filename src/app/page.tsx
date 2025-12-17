import {
  Header,
  Hero,
  TechStack,
  Services,
  Portfolio,
  Process,
  Testimonials,
  CTA,
  Footer
} from '@/components'

export default function Home() {
  return (
    <>
      <a className="skip-to-content" href="#main-content">Skip to main content</a>
      <Header />
      <main className="main-content" role="main" id="main-content">
        <div className="homepage">
          <Hero />
          <TechStack />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
