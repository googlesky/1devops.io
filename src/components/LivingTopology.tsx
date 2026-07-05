'use client'

import { useEffect, useRef } from 'react'

interface LivingTopologyProps {
  className?: string
  /** Node density multiplier (1 = default). */
  density?: number
  /** React to the pointer (probe lines + energised nodes). */
  interactive?: boolean
}

/**
 * LivingTopology
 * An abstract, generative infrastructure graph: clustered nodes drift and
 * breathe, edges connect by proximity, and light "signals" travel along the
 * edges — hopping node to node like requests/health-checks traversing a
 * distributed system. This is the page's signature, not decorative particles.
 *
 * Perf: single canvas · rAF · pauses off-screen & when the tab is hidden ·
 * DPR-capped · fewer nodes on mobile. prefers-reduced-motion draws one
 * composed static frame instead of animating.
 */

const TEAL = '47,224,192'
const BLUE = '91,140,239'
const CORAL = '255,125,90'

type Node = {
  ax: number // cluster anchor, fraction of width
  ay: number // cluster anchor, fraction of height
  orbit: number
  speed: number
  phase: number
  x: number
  y: number
  r: number
  hub: boolean
  color: string
  bright: number
}

type Signal = {
  a: number
  b: number
  t: number
  speed: number
  color: string
}

type Ring = { x: number; y: number; r: number; max: number; life: number }

export default function LivingTopology({
  className,
  density = 1,
  interactive = true,
}: LivingTopologyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // `?still` renders one composed frame without the rAF loop — used for
    // reduced-motion parity and reliable screenshot/verification.
    const noMotion = reduce || new URLSearchParams(window.location.search).has('still')

    let W = 0
    let H = 0
    let DPR = 1
    let linkDist = 150
    let nodes: Node[] = []
    let signals: Signal[] = []
    let rings: Ring[] = []
    let raf = 0
    let running = false
    let startT = 0
    let lastT = 0

    const mouse = { x: -9999, y: -9999, active: false }

    // ---- Pre-rendered, tinted glow sprites (cheap soft bloom) ----
    const makeGlow = (rgb: string): HTMLCanvasElement => {
      const s = 64
      const c = document.createElement('canvas')
      c.width = c.height = s
      const g = c.getContext('2d')!
      const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
      grad.addColorStop(0, `rgba(${rgb},0.95)`)
      grad.addColorStop(0.28, `rgba(${rgb},0.32)`)
      grad.addColorStop(1, `rgba(${rgb},0)`)
      g.fillStyle = grad
      g.fillRect(0, 0, s, s)
      return c
    }
    const glow: Record<string, HTMLCanvasElement> = {
      [TEAL]: makeGlow(TEAL),
      [BLUE]: makeGlow(BLUE),
      [CORAL]: makeGlow(CORAL),
    }

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y)

    const neighbours = (i: number): number[] => {
      const out: number[] = []
      const n = nodes[i]
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue
        if (Math.hypot(n.x - nodes[j].x, n.y - nodes[j].y) < linkDist) out.push(j)
      }
      return out
    }

    const size = () => {
      const parent = canvas.parentElement
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight }
      W = Math.max(1, Math.floor(rect.width))
      H = Math.max(1, Math.floor(rect.height))
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(W * DPR)
      canvas.height = Math.floor(H * DPR)
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      linkDist = Math.max(112, Math.min(W, H) * 0.2)
    }

    const build = () => {
      const mobile = W < 640
      let count = Math.round((W * H) / 20500 * density)
      count = Math.max(mobile ? 22 : 34, Math.min(mobile ? 44 : 86, count))

      // Cluster anchors on a loose jittered grid → structure, not random scatter
      const cols = mobile ? 2 : 3
      const rows = 2
      const anchors: { x: number; y: number }[] = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          anchors.push({
            x: (c + 0.5) / cols + (Math.random() - 0.5) * 0.12,
            y: (r + 0.5) / rows + (Math.random() - 0.5) * 0.14,
          })
        }
      }

      nodes = []
      for (let i = 0; i < count; i++) {
        const a = anchors[i % anchors.length]
        const hub = Math.random() < 0.12
        const orbit = (mobile ? 20 : 32) + Math.random() * Math.min(W, H) * 0.13
        const color = hub ? TEAL : Math.random() < 0.28 ? BLUE : TEAL
        const x = a.x * W + (Math.random() - 0.5) * 60
        const y = a.y * H + (Math.random() - 0.5) * 60
        nodes.push({
          ax: a.x,
          ay: a.y,
          orbit,
          speed: 0.05 + Math.random() * 0.11,
          phase: Math.random() * Math.PI * 2,
          x,
          y,
          r: hub ? 3 + Math.random() * 1.4 : 1.3 + Math.random() * 1.3,
          hub,
          color,
          bright: 0,
        })
      }

      // Signals that hop along the mesh
      const sCount = Math.max(mobile ? 4 : 7, Math.min(mobile ? 8 : 15, Math.round(count * 0.17)))
      signals = []
      for (let i = 0; i < sCount; i++) {
        const a = (Math.random() * nodes.length) | 0
        const nb = neighbours(a)
        const b = nb.length ? nb[(Math.random() * nb.length) | 0] : (Math.random() * nodes.length) | 0
        const warm = Math.random() < 0.12
        signals.push({
          a,
          b,
          t: Math.random(),
          speed: 60 + Math.random() * 70,
          color: warm ? CORAL : Math.random() < 0.26 ? BLUE : TEAL,
        })
      }
      rings = []
    }

    const drawEdges = () => {
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > linkDist * linkDist) continue
          const d = Math.sqrt(d2)
          const prox = 1 - d / linkDist
          const boost = Math.max(a.bright, b.bright) * 0.4
          const alpha = prox * 0.14 + boost
          if (alpha <= 0.012) continue
          ctx.strokeStyle = `rgba(${TEAL},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    const drawNodes = () => {
      for (const n of nodes) {
        const gsize = (n.hub ? 26 : 14) + n.bright * 16
        ctx.globalAlpha = (n.hub ? 0.5 : 0.32) + n.bright * 0.5
        ctx.drawImage(glow[n.color], n.x - gsize / 2, n.y - gsize / 2, gsize, gsize)
        ctx.globalAlpha = 1
        ctx.fillStyle = `rgba(${n.color},${0.75 + n.bright * 0.25})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + n.bright * 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawSignals = () => {
      for (const s of signals) {
        const A = nodes[s.a]
        const B = nodes[s.b]
        if (!A || !B) continue
        const x = A.x + (B.x - A.x) * s.t
        const y = A.y + (B.y - A.y) * s.t
        const gsize = s.color === CORAL ? 30 : 22
        ctx.globalAlpha = 0.9
        ctx.drawImage(glow[s.color], x - gsize / 2, y - gsize / 2, gsize, gsize)
        ctx.globalAlpha = 1
        ctx.fillStyle = `rgba(${s.color},1)`
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawRings = () => {
      for (const r of rings) {
        ctx.strokeStyle = `rgba(${TEAL},${r.life * 0.4})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const drawProbe = () => {
      if (!interactive || !mouse.active) return
      // Connect the cursor to its nearest few nodes — "inspecting the system"
      const near = nodes
        .map((n, i) => ({ i, d: Math.hypot(n.x - mouse.x, n.y - mouse.y) }))
        .filter((o) => o.d < linkDist * 1.5)
        .sort((a, b) => a.d - b.d)
        .slice(0, 4)
      for (const o of near) {
        const n = nodes[o.i]
        n.bright = Math.min(1, n.bright + 0.6)
        const alpha = (1 - o.d / (linkDist * 1.5)) * 0.5
        ctx.strokeStyle = `rgba(${TEAL},${alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(mouse.x, mouse.y)
        ctx.lineTo(n.x, n.y)
        ctx.stroke()
      }
    }

    const update = (time: number, dt: number) => {
      for (const n of nodes) {
        const hx = n.ax * W + Math.cos(time * n.speed + n.phase) * n.orbit
        const hy = n.ay * H + Math.sin(time * n.speed * 0.85 + n.phase) * n.orbit
        n.x += (hx - n.x) * 0.045
        n.y += (hy - n.y) * 0.045
        n.bright *= 0.92
        if (mouse.active) {
          const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y)
          if (dm < 120) n.bright = Math.min(1, n.bright + (1 - dm / 120) * 0.5)
        }
      }

      for (const s of signals) {
        const A = nodes[s.a]
        const B = nodes[s.b]
        if (!A || !B) {
          s.a = (Math.random() * nodes.length) | 0
          s.b = (Math.random() * nodes.length) | 0
          s.t = 0
          continue
        }
        const d = Math.hypot(A.x - B.x, A.y - B.y) || 1
        s.t += (s.speed * dt) / d
        if (s.t >= 1) {
          s.a = s.b
          const nb = neighbours(s.a)
          s.b = nb.length ? nb[(Math.random() * nb.length) | 0] : (Math.random() * nodes.length) | 0
          s.t = 0
          const warm = Math.random() < 0.1
          s.color = warm ? CORAL : Math.random() < 0.26 ? BLUE : TEAL
          // Occasional heartbeat where a signal arrives
          if (Math.random() < 0.25 && rings.length < 6) {
            rings.push({ x: nodes[s.a].x, y: nodes[s.a].y, r: 2, max: 60 + Math.random() * 40, life: 1 })
          }
        }
      }

      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i]
        r.r += 46 * dt
        r.life -= dt * 0.75
        if (r.life <= 0 || r.r > r.max) rings.splice(i, 1)
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H)
      drawEdges()
      drawProbe()
      drawRings()
      drawNodes()
      drawSignals()
    }

    const frame = (now: number) => {
      if (!running) return
      if (!startT) startT = now
      if (!lastT) lastT = now
      const time = (now - startT) / 1000
      let dt = (now - lastT) / 1000
      lastT = now
      if (dt > 0.05) dt = 0.05
      update(time, dt)
      render()
      raf = requestAnimationFrame(frame)
    }

    const play = () => {
      if (running || noMotion) return
      running = true
      lastT = 0
      raf = requestAnimationFrame(frame)
    }
    const pause = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    // ---- Static composed frame for reduced-motion ----
    const drawStatic = () => {
      // settle nodes toward their homes for a balanced composition
      for (let k = 0; k < 60; k++) {
        for (const n of nodes) {
          const hx = n.ax * W + Math.cos(n.phase) * n.orbit
          const hy = n.ay * H + Math.sin(n.phase) * n.orbit
          n.x += (hx - n.x) * 0.2
          n.y += (hy - n.y) * 0.2
        }
      }
      // light a few hubs so it reads as intentional, not broken
      let lit = 0
      for (const n of nodes) {
        if (n.hub && lit < 5) {
          n.bright = 0.8
          lit++
        }
      }
      render()
      // static signals resting mid-edge
      for (const s of signals) {
        const A = nodes[s.a]
        const B = nodes[s.b]
        if (!A || !B) continue
        const x = (A.x + B.x) / 2
        const y = (A.y + B.y) / 2
        ctx.globalAlpha = 0.85
        ctx.drawImage(glow[s.color], x - 11, y - 11, 22, 22)
        ctx.globalAlpha = 1
      }
    }

    // ---- Pointer ----
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
      mouse.x = mouse.y = -9999
    }

    // ---- Boot ----
    size()
    build()
    if (noMotion) {
      drawStatic()
    } else {
      // IntersectionObserver pauses the loop when the canvas is off-screen
      const io = new IntersectionObserver(
        (entries) => {
          for (const en of entries) {
            if (en.isIntersecting) play()
            else pause()
          }
        },
        { threshold: 0.01 }
      )
      io.observe(canvas)

      const onVis = () => {
        if (document.hidden) pause()
        else if (isIntersecting(canvas)) play()
      }
      document.addEventListener('visibilitychange', onVis)

      if (interactive) {
        canvas.parentElement?.addEventListener('pointermove', onMove)
        canvas.parentElement?.addEventListener('pointerleave', onLeave)
      }

      let resizeRaf = 0
      const onResize = () => {
        cancelAnimationFrame(resizeRaf)
        resizeRaf = requestAnimationFrame(() => {
          size()
          build()
        })
      }
      window.addEventListener('resize', onResize)

      return () => {
        pause()
        io.disconnect()
        document.removeEventListener('visibilitychange', onVis)
        window.removeEventListener('resize', onResize)
        if (interactive) {
          canvas.parentElement?.removeEventListener('pointermove', onMove)
          canvas.parentElement?.removeEventListener('pointerleave', onLeave)
        }
      }
    }

    // reduced-motion: redraw the static composition on resize only
    const onResizeStatic = () => {
      size()
      build()
      drawStatic()
    }
    window.addEventListener('resize', onResizeStatic)
    return () => window.removeEventListener('resize', onResizeStatic)

    function isIntersecting(el: HTMLElement) {
      const r = el.getBoundingClientRect()
      return r.bottom > 0 && r.top < window.innerHeight
    }
  }, [density, interactive])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
