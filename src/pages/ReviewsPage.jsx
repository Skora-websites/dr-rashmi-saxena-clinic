import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Reviews from '../components/Reviews'
import PageCta from '../components/PageCta'
import { clinic, gmbReviews } from '../data/content'

export default function ReviewsPage() {
  return (
    <>
      <Seo
        title="Patient Reviews — 4.9 Stars on Google | Dr Rashmi Saxena"
        description="Read verified patient reviews for Dr Rashmi Saxena's Women's Clinic in Gaur City 2 — 4.9 stars across 166 Google reviews."
      />
      <PageHero
        eyebrow="Patient Reviews"
        title="Loved by women across Gaur City 2"
        text="Verified reviews from patients on the clinic's Google Business Profile — pregnancy journeys, high-risk care, painless delivery and gynaecological treatment."
      >
        <a
          href={clinic.googleProfile}
          target="_blank"
          rel="noreferrer"
          className="home-hero_button w-inline-block"
        >
          <div className="home-hero_button-text">Read Reviews on Google</div>
        </a>
      </PageHero>

      <Reviews />

      <section className="section_review-cards">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="review-cards_header">
                <Eyebrow dark>In Their Words</Eyebrow>
                <h2 className="review-cards_heading heading-style-h2" data-split>
                  Notes from recent patients
                </h2>
              </div>
              <div className="review-cards_grid" data-reveal-group>
                {gmbReviews.map((review) => (
                  <figure className="review-card" key={review.name} data-reveal>
                    <div className="review-card_stars" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <blockquote className="review-card_quote">{review.quote}</blockquote>
                    <figcaption className="review-card_author">
                      <span className="review-card_name">{review.name}</span>
                      <span className="review-card_source">{review.service}</span>
                    </figcaption>
                  </figure>
                ))}
                <div className="review-card is-summary" data-reveal>
                  <div className="review-card_score">{clinic.rating}</div>
                  <div className="review-card_stars" aria-hidden="true">
                    ★★★★★
                  </div>
                  <p className="review-card_summary-text">
                    Based on {clinic.reviewCount} Google reviews for Dr Rashmi Saxena in Gaur City
                    2, Greater Noida.
                  </p>
                  <a
                    href={clinic.googleProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="review-card_link"
                  >
                    View all Google reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Your Experience"
        title="Care worth recommending"
        text="If you have visited the clinic, a review helps other women in Gaur City find the right care. Thank you for taking the time."
      />
    </>
  )
}
