import { useState } from 'react'
import Eyebrow from './Eyebrow'

export default function Newsletter() {
  const [joined, setJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setJoined(true)
  }

  return (
    <section className="section_newsletter">
      <div className="newsletter_blur" />
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="newsletter_component">
              <div className="newsletter_card">
                <div className="newsletter_header">
                  <Eyebrow>Clinic Updates</Eyebrow>
                  <h2 className="newsletter_heading">Timings, camps and health notes</h2>
                  <p className="newsletter_text">
                    OPD timing changes, vaccination drives and seasonal health notes for women in
                    Gaur City. Roughly one message a month. Never more.
                  </p>
                </div>
                <div className="newsletter_form-block">
                  <div className="newsletter_form-wrapper w-form">
                    {joined ? (
                      <div className="newsletter_success w-form-done" style={{ display: 'block' }}>
                        <div>Thank you. You are on the list.</div>
                      </div>
                    ) : (
                      <form className="newsletter_form" onSubmit={handleSubmit}>
                        <input
                          className="newsletter_input w-input"
                          maxLength="256"
                          name="email"
                          aria-label="Email address"
                          placeholder="Email address"
                          type="email"
                          id="newsletter-email"
                          required
                        />
                        <input
                          type="submit"
                          className="newsletter_submit w-button"
                          value="Join the List"
                        />
                      </form>
                    )}
                    <div className="newsletter_error w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
