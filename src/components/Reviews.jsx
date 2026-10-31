import { useEffect, useRef, useState } from 'react'
import Eyebrow from './Eyebrow'
import { clinic, reviews } from '../data/content'

const total = reviews.length

export default function Reviews() {
  const [current, setCurrent] = useState(1)
  const paused = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = window.setInterval(() => {
      if (paused.current || document.visibilityState !== 'visible') return
      setCurrent((value) => (value % total) + 1)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const go = (direction) => {
    setCurrent((value) => ((value - 1 + direction + total) % total) + 1)
  }

  return (
    <section id="reviews" className="section_reviews">
      <div className="padding-global">
        <div className="container-large">
          <div className="reviews_component">
            <div className="reviews_header">
              <Eyebrow>What Patients Say</Eyebrow>
              <h2 className="reviews_heading heading-style-h2" data-split>
                4.9 stars across
                <br />
                {clinic.reviewCount} Google reviews
              </h2>
            </div>
            <div
              className="reviews_stage"
              onMouseEnter={() => {
                paused.current = true
              }}
              onMouseLeave={() => {
                paused.current = false
              }}
            >
              {reviews.map((review, index) => (
                <article
                  className={`reviews_card${current === index + 1 ? ' is-current' : ''}`}
                  key={review.name}
                  aria-hidden={current !== index + 1}
                >
                  <div className="reviews_card-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="reviews_card-quote">{review.quote}</blockquote>
                  <footer className="reviews_card-author">
                    <img
                      src={review.avatar}
                      loading="lazy"
                      width="48"
                      height="48"
                      alt={review.alt}
                      className="reviews_card-avatar"
                    />
                    <div className="reviews_card-person">
                      <p className="reviews_card-name">{review.name}</p>
                      <p className="reviews_card-meta">Google review · {review.date}</p>
                    </div>
                    <span className="reviews_card-service">{review.service}</span>
                  </footer>
                </article>
              ))}
            </div>
            <div className="reviews_controls">
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
            <a
              href={clinic.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="reviews_all-link"
            >
              Read all {clinic.reviewCount} reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
