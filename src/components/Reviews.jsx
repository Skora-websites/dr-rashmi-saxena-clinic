import { useEffect, useRef, useState } from 'react'
import Eyebrow from './Eyebrow'
import { reviews } from '../data/content'

const total = reviews.length

function positionFor(slideIndex, current) {
  const offset = (slideIndex - (current - 1) + total) % total
  if (offset === 0) return 'is-center'
  if (offset === 1) return 'is-right'
  return 'is-left'
}

export default function Reviews() {
  const [current, setCurrent] = useState(1)
  const timer = useRef(null)
  const paused = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    timer.current = window.setInterval(() => {
      if (paused.current || document.visibilityState !== 'visible') return
      setCurrent((value) => (value % total) + 1)
    }, 8000)

    return () => clearInterval(timer.current)
  }, [])

  const go = (direction) => {
    setCurrent((value) => ((value - 1 + direction + total) % total) + 1)
  }

  return (
    <section id="reviews" className="section_reviews">
      <div className="padding-global">
        <div className="container-large">
          <div
            className="reviews_component"
            onMouseEnter={() => {
              paused.current = true
            }}
            onMouseLeave={() => {
              paused.current = false
            }}
          >
            <div className="reviews_header">
              <Eyebrow>What Patients Say</Eyebrow>
              <h2 className="reviews_heading heading-style-h2" data-split>
                4.9 stars across
                <br />
                166 Google reviews
              </h2>
            </div>
            <div className="reviews_slider">
              {reviews.map((review, index) => (
                <div
                  className={`reviews_slide ${positionFor(index, current)}`}
                  key={review.name}
                  onClick={() => {
                    if (positionFor(index, current) !== 'is-center') setCurrent(index + 1)
                  }}
                >
                  <img
                    src={review.photo}
                    loading="lazy"
                    width="400"
                    height="600"
                    alt={review.alt}
                    className="reviews_image"
                  />
                </div>
              ))}
            </div>
            <div className="reviews_dots">
              {reviews.map((review, index) => (
                <div
                  aria-label={`Show review ${index + 1}`}
                  role="button"
                  className="reviews_dot"
                  key={review.name}
                  onClick={() => setCurrent(index + 1)}
                >
                  <div className={`reviews_dot-bar${current === index + 1 ? ' is-active' : ''}`} />
                </div>
              ))}
            </div>
            <div className="reviews_content">
              <div className="reviews_info">
                <div className="reviews_author">
                  <div className="reviews_names">
                    {reviews.map((review, index) => (
                      <p
                        className={`reviews_name${current === index + 1 ? ' is-current' : ''}`}
                        key={review.name}
                      >
                        {review.name}
                      </p>
                    ))}
                  </div>
                  <div className="reviews_source">
                    <p className="reviews_source-text">Google</p>
                    <img
                      src="/assets/template/home-reviews-stars.webp"
                      loading="lazy"
                      width="93"
                      height="14"
                      alt="5 out of 5 stars"
                      className="reviews_stars"
                    />
                  </div>
                </div>
                <div className="reviews_buttons">
                  {reviews.map((review, index) => (
                    <div
                      className={`reviews_arrow-pair${current === index + 1 ? ' is-current' : ''}`}
                      key={review.name}
                    >
                      <div
                        aria-label="Previous review"
                        role="button"
                        className="reviews_arrow"
                        onClick={() => go(-1)}
                      >
                        <img
                          src="/assets/template/home-reviews-chevron-left.webp"
                          loading="lazy"
                          width="10"
                          height="18"
                          alt=""
                          className="reviews_arrow-icon"
                        />
                      </div>
                      <div
                        aria-label="Next review"
                        role="button"
                        className="reviews_arrow"
                        onClick={() => go(1)}
                      >
                        <img
                          src="/assets/template/home-reviews-chevron-right.webp"
                          loading="lazy"
                          width="10"
                          height="18"
                          alt=""
                          className="reviews_arrow-icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reviews_quotes">
                {reviews.map((review, index) => (
                  <p
                    className={`reviews_quote${current === index + 1 ? ' is-current' : ''}`}
                    key={review.name}
                  >
                    {review.quote}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
