import { Fragment, useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gallerySlides } from '../data/content'

function CompareCard({ slide }) {
  const frameRef = useRef(null)
  const [position, setPosition] = useState(50)

  const updateFromEvent = useCallback((clientX) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(98, Math.max(2, next)))
  }, [])

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromEvent(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (event.buttons !== 1) return
    updateFromEvent(event.clientX)
  }

  return (
    <div
      ref={frameRef}
      className="results-card_compare is-wide"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      role="slider"
      aria-label={`Compare ${slide.title} photos`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
    >
      <img
        src={slide.after}
        loading="lazy"
        width="858"
        height="383"
        alt={slide.afterAlt}
        style={{ objectPosition: slide.afterPosition }}
        className="results-card_image"
      />
      <div className="results-card_before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img
          src={slide.before}
          loading="lazy"
          width="858"
          height="383"
          alt={slide.beforeAlt}
          style={{ objectPosition: slide.beforePosition }}
          className="results-card_image is-before"
        />
      </div>
      <div className="results-card_handle-track">
        <div className="results-card_handle" style={{ left: `${position}%` }}>
          <div className="results-card_handle-line" />
          <div className="results-card_handle-knob">
            <img
              src="/assets/template/icon-compare.webp"
              loading="lazy"
              width="24"
              height="24"
              alt=""
              className="results-card_handle-icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [index, setIndex] = useState(0)

  const go = (direction) => {
    setIndex((current) => (current + direction + gallerySlides.length) % gallerySlides.length)
  }

  return (
    <section className="section_home-results">
      <div className="padding-global">
        <div className="container-large">
          <div className="home-results_component">
            <div className="home-results_blur" />
            <div className="home-results_row">
              <p className="home-results_label">The Clinic</p>
              <p className="home-results_label is-right">Inside &amp; Out</p>
            </div>
            <div className="home-results_slider w-slider">
              <div className="w-slider-mask home-results_mask">
                {gallerySlides.map((slide, slideIndex) => (
                  <div
                    className={`w-slide home-results_slide${slideIndex === index ? ' is-active' : ''}`}
                    key={slide.title}
                    aria-hidden={slideIndex !== index}
                  >
                    <div className="home-results_item">
                      <div className="home-results_card">
                        <CompareCard slide={slide} />
                        <div className="home-results_info">
                          <h3 className="home-results_title heading-style-h3">{slide.title}</h3>
                          <div className="home-results_details">
                            {slide.details.map((detail, detailIndex) => (
                              <Fragment key={detail}>
                                {detailIndex > 0 ? (
                                  <div className="home-results_divider" />
                                ) : null}
                                <p className="home-results_detail">{detail}</p>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="home-results_arrow is-prev w-slider-arrow-left"
                role="button"
                aria-label="Previous clinic photo"
                onClick={() => go(-1)}
              >
                <img
                  src="/assets/template/home-icon-chevron-left.webp"
                  loading="lazy"
                  width="11"
                  height="20"
                  alt=""
                  className="home-results_arrow-icon"
                />
              </div>
              <div
                className="home-results_arrow is-next w-slider-arrow-right"
                role="button"
                aria-label="Next clinic photo"
                onClick={() => go(1)}
              >
                <img
                  src="/assets/template/home-icon-chevron-right.webp"
                  loading="lazy"
                  width="11"
                  height="20"
                  alt=""
                  className="home-results_arrow-icon"
                />
              </div>
              <div className="home-results_nav w-slider-nav w-round w-num" />
            </div>
            <div className="home-results_row is-bottom">
              <p className="home-results_label">Gaur City 2</p>
              <div className="home-results_button-wrapper">
                <Link to="/book" className="button-outline is-light w-inline-block">
                  <div className="button-outline_text">Book a Visit</div>
                </Link>
              </div>
              <p className="home-results_label is-right">Walk-ins welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
