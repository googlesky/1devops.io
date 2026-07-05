'use client'

import { useEffect, RefObject } from 'react'

/**
 * Reveals `[data-aos]` children of `ref` as they enter the viewport.
 *
 * Robust by design:
 *  - elements already in view at mount reveal immediately (deep-links, no-scroll landings)
 *  - each element is unobserved once revealed (fires once, then stops)
 *  - prefers-reduced-motion reveals everything up-front with no transition gating
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current
    if (!root) return

    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-aos]'))
    if (!els.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('aos-animate'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -5% 0px' }
    )

    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      const inView = r.top < window.innerHeight && r.bottom > 0
      if (inView) el.classList.add('aos-animate')
      else io.observe(el)
    })

    return () => io.disconnect()
  }, [ref])
}
