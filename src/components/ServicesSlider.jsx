import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Eyebrow from './Eyebrow'
import { services } from '../data/content'

export default function ServicesSlider() {
  const [index, setIndex] = useState(0)
  const slideRefs = useRef([])
  const sectionRef = useRef(null)
  const firstRun = useRef(true)

  useEffect(() => {
    const slide = slideRefs.current[index]
    if (!slide) return undefined

    const ctx = gsap.context(() => {
      const animate = () => {
        const image = slide.querySelector('.treat-slider_image')
        const parts = slide.querySelectorAll(
          '.treat-slider_title, .treat-slider_tags, .treat-slider_text, .treat-slider_price'
        )
        const tl = gsap.timeline()
        if (image) {
          tl.fromTo(
            image,
            { scale: 1.08 },
            { scale: 1, duration: 1.5, ease: 'power3.out' },
            0
          )
        }
        tl.fromTo(
          parts,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: 'power3.out' },
          0.1
        )
      }

      if (firstRun.current) {
        firstRun.current = false
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
          onEnter: animate,
        })
      } else {
        animate()
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [index])

  const go = (direction) => {
    setIndex((current) => (current + direction + services.length) % services.length)
  }

  return (
    <section data-treat-slider="" className="section_treat-slider" id="services" ref={sectionRef}>
      <div className="treat-slider_component">
        <div className="treat-slider_intro">
          <Eyebrow>What We Treat</Eyebrow>
          <div className="treat-slider_intro-content">
            <h2 className="treat-slider_heading heading-style-h2" data-split>
              Start with what&rsquo;s bothering you
            </h2>
            <p className="treat-slider_intro-text" data-reveal>
              Unhurried consultations, in-clinic lab testing, and trusted hospital partners across
              Noida.
            </p>
          </div>
        </div>
        <div className="treat-slider_main">
          <div
            data-animation="cross"
            className="treat-slider_slider w-slider"
            data-autoplay="false"
            data-duration="900"
            data-infinite="true"
          >
            <div className="treat-slider_mask w-slider-mask">
              {services.map((service, i) => (
                <div
                  className={`treat-slider_slide w-slide${i === index ? ' is-active' : ''}`}
                  key={service.title}
                  ref={(el) => {
                    slideRefs.current[i] = el
                  }}
                  aria-hidden={i !== index}
                >
                  <div className="treat-slider_item">
                    <img
                      src={service.image}
                      loading="lazy"
                      width="1200"
                      height="896"
                      alt={service.alt}
                      className="treat-slider_image"
                    />
                    <div className="treat-slider_overlay" />
                    <div className="treat-slider_content">
                      <div className="treat-slider_info">
                        <h3 className="treat-slider_title">{service.title}</h3>
                        <div className="treat-slider_tags">
                          {service.tags.map((tag, tagIndex) => (
                            <span key={tag} style={{ display: 'contents' }}>
                              {tagIndex > 0 && <div className="treat-slider_divider" />}
                              <p className="treat-slider_tag">{tag}</p>
                            </span>
                          ))}
                        </div>
                        <p className="treat-slider_text">{service.text}</p>
                      </div>
                      <div className="treat-slider_price">
                        <p className="treat-slider_price-label">From</p>
                        <div className="treat-slider_price-row">
                          <div className="treat-slider_price-amount">₹{service.price}</div>
                          <div className="treat-slider_price-amount">/</div>
                          <div className="treat-slider_price-unit">{service.unit}</div>
                        </div>
                      </div>
                    </div>
                    <p className="treat-slider_counter">
                      {String(i + 1).padStart(2, '0')}/{String(services.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="treat-slider_arrow is-prev w-slider-arrow-left"
              role="button"
              tabIndex={0}
              aria-label="Previous treatment"
              onClick={() => go(-1)}
              onKeyDown={(e) => e.key === 'Enter' && go(-1)}
            >
              <img
                src="/assets/template/home-icon-chevron-left.webp"
                loading="lazy"
                width="11"
                height="20"
                alt=""
                className="treat-slider_arrow-icon"
              />
            </div>
            <div
              className="treat-slider_arrow is-next w-slider-arrow-right"
              role="button"
              tabIndex={0}
              aria-label="Next treatment"
              onClick={() => go(1)}
              onKeyDown={(e) => e.key === 'Enter' && go(1)}
            >
              <img
                src="/assets/template/home-icon-chevron-right.webp"
                loading="lazy"
                width="11"
                height="20"
                alt=""
                className="treat-slider_arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
