import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Splits a heading into line masks so each line can slide up from below. */
export function splitHeading(el) {
  const nodes = Array.from(el.childNodes)
  if (!nodes.length) return []

  el.textContent = ''
  const spans = []
  nodes.forEach((node) => {
    if (node.nodeType === 1 && node.tagName === 'BR') {
      el.appendChild(document.createElement('br'))
      return
    }
    const text = (node.textContent || '').replace(/\s+/g, ' ').trim()
    if (!text) return
    text.split(' ').forEach((word) => {
      if (!word) return
      const span = document.createElement('span')
      span.textContent = word
      span.style.display = 'inline-block'
      el.appendChild(span)
      el.appendChild(document.createTextNode(' '))
      spans.push(span)
    })
  })
  if (!spans.length) return []

  const lines = []
  let currentTop = null
  let current = []
  spans.forEach((span) => {
    const top = Math.round(span.offsetTop)
    if (currentTop === null) currentTop = top
    if (top !== currentTop) {
      lines.push(current)
      current = []
      currentTop = top
    }
    current.push(span.textContent)
  })
  if (current.length) lines.push(current)

  el.textContent = ''
  const lineEls = lines.map((wordsInLine) => {
    const mask = document.createElement('span')
    mask.className = 'split-line-mask'
    const line = document.createElement('span')
    line.className = 'split-line'
    line.textContent = wordsInLine.join(' ')
    mask.appendChild(line)
    el.appendChild(mask)
    return line
  })

  return lineEls
}

export function initPageAnimations(root) {
  if (prefersReduced()) {
    ScrollTrigger.refresh()
    return () => {}
  }

  const ctx = gsap.context(() => {
    // Hero background: gentle settle in, then parallax on scroll
    const heroBg = root.querySelector('.home-hero_image')
    if (heroBg) {
      gsap.fromTo(
        heroBg,
        { scale: 1.18 },
        { scale: 1.08, duration: 2.4, ease: 'power3.out', delay: 0.1 }
      )
      gsap.to(heroBg, {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: root.querySelector('.section_home-hero'),
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // Homepage hero copy (gradient heading is not split into line masks)
    const heroHeading = root.querySelector('.section_home-hero .home-hero_heading')
    if (heroHeading) {
      gsap.from(heroHeading, {
        y: 34,
        opacity: 0,
        duration: 1.15,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from(root.querySelectorAll('.section_home-hero .hero_rule, .section_home-hero .home-hero_content > *'), {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: 'power3.out',
        delay: 0.5,
      })
    }

    // Split headings
    root.querySelectorAll('[data-split]').forEach((el) => {
      const lines = splitHeading(el)
      if (!lines.length) return
      gsap.set(lines, { yPercent: 112 })

      const isHero = !!el.closest('.section_home-hero')
      gsap.to(lines, {
        yPercent: 0,
        duration: 1.15,
        ease: 'power3.out',
        stagger: 0.085,
        delay: isHero ? 0.45 : 0,
        scrollTrigger: isHero
          ? undefined
          : { trigger: el, start: 'top 88%', once: true },
      })
    })

    // Staggered groups
    root.querySelectorAll('[data-reveal-group]').forEach((group) => {
      const items = group.querySelectorAll('[data-reveal]')
      if (!items.length) return
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      })
    })

    // Standalone reveals
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.closest('[data-reveal-group]')) return
      gsap.from(el, {
        y: 26,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      })
    })

    // Image reveals (clip + scale)
    root.querySelectorAll('[data-img-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        }
      )
      const img = el.querySelector('img')
      if (img) {
        gsap.from(img, {
          scale: 1.14,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', once: true },
        })
      }
    })

    // Visit image covers sliding away
    root.querySelectorAll('[data-cover]').forEach((el, i) => {
      gsap.fromTo(
        el,
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: '50% 100%',
          duration: 1.15,
          delay: (i % 4) * 0.09,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    })

    // Why grid construction lines
    const whyGrid = root.querySelector('.why_grid')
    if (whyGrid) {
      const vertical = whyGrid.querySelector('.why_line.is-vertical')
      const horizontal = whyGrid.querySelector('.why_line.is-horizontal')
      const plus = whyGrid.querySelector('.why_plus')
      const tl = gsap.timeline({
        scrollTrigger: { trigger: whyGrid, start: 'top 82%', once: true },
      })
      if (vertical)
        tl.from(vertical, { scaleY: 0, duration: 0.9, ease: 'power3.inOut' }, 0)
      if (horizontal)
        tl.from(horizontal, { scaleX: 0, duration: 0.9, ease: 'power3.inOut' }, 0.1)
      if (plus)
        tl.from(
          plus,
          { scale: 0.4, opacity: 0, rotate: -90, duration: 0.8, ease: 'back.out(1.6)' },
          0.45
        )
    }

    // Payment dividers
    root.querySelectorAll('.payment_divider').forEach((el, i) => {
      gsap.from(el, {
        scaleY: 0,
        duration: 1.1,
        delay: 0.25 + i * 0.12,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '.payment_card', start: 'top 75%', once: true },
      })
    })

    // Reviews photography
    const reviewSlides = root.querySelectorAll('.reviews_slide')
    if (reviewSlides.length) {
      ScrollTrigger.create({
        trigger: '.reviews_slider',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            reviewSlides,
            { scale: 0.88, opacity: 0 },
            {
              scale: 1,
              opacity: (i, el) => (el.classList.contains('is-center') ? 1 : 0.6),
              duration: 1,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'scale,opacity,translate,rotate',
            }
          )
        },
      })
    }

    // Eyebrow corner ticks
    root.querySelectorAll('.eyebrow_corner').forEach((el) => {
      gsap.from(el, {
        scale: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 95%', once: true },
      })
    })

    // Footer image
    const footerImage = root.querySelector('.footer_image')
    if (footerImage) {
      gsap.from(footerImage, {
        yPercent: 12,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: footerImage, start: 'top 95%', once: true },
      })
    }
  }, root)

  document.fonts?.ready.then(() => ScrollTrigger.refresh())

  return () => ctx.revert()
}
