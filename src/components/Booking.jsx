import { useState } from 'react'
import Eyebrow from './Eyebrow'
import { clinic, services } from '../data/content'

const interests = [...services.map((service) => service.title), 'General Consultation']

const times = ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM']

function formatDate(value) {
  const digits = value.replace(/\D/g, '').slice(0, 6)
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 6)].filter(Boolean)
  return parts.join('/')
}

export default function Booking() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Appointment request',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Interest: ${data.get('interest') || 'Not specified'}`,
      `Patient: ${data.get('patient-type') || 'Not specified'}`,
      `Preferred date: ${data.get('preferred-date') || 'Flexible'}`,
      `Preferred time: ${data.get('preferred-time') || 'Flexible'}`,
    ].join('\n')

    window.open(`${clinic.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer')
    setSent(true)
  }

  return (
    <section className="section_booking" id="book">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="booking_component">
              <div className="booking_header">
                <Eyebrow dark>Book</Eyebrow>
                <h2 className="booking_heading heading-style-h2" data-split>
                  Book your consultation
                </h2>
              </div>
              <div className="booking_layout">
                <div className="booking_aside">
                  <img
                    src="/assets/clinic/consultation.jpg"
                    loading="lazy"
                    width="424"
                    height="297"
                    alt="A consultation in progress at Dr Rashmi Saxena's clinic"
                    className="booking_image"
                  />
                  <div className="booking_faq">
                    <p className="booking_faq-text">
                      Walk-ins are welcome during OPD hours. Calls help us keep waiting times short,
                      especially for first visits and fertility consultations.
                    </p>
                    <a href={clinic.phoneHref} className="booking_faq-link w-inline-block">
                      <div className="booking_faq-link-text">Call {clinic.phoneDisplay}</div>
                      <img
                        src="/assets/template/icon-arrow-right.webp"
                        loading="lazy"
                        width="24"
                        height="24"
                        alt=""
                        className="booking_faq-link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="booking_form-wrapper">
                  <div className="form_block w-form">
                    {sent ? (
                      <div className="form_success w-form-done" style={{ display: 'block' }}>
                        <div className="form_message">
                          Thank you. Your request has been prepared in WhatsApp — send the message
                          and we will confirm your appointment.
                        </div>
                      </div>
                    ) : (
                      <form className="form_component" onSubmit={handleSubmit}>
                        <div className="form_fields">
                          <div className="form_row">
                            <div className="form_field">
                              <label htmlFor="booking-interest" className="form_label">
                                What are you interested in?
                              </label>
                              <div className="form_control">
                                <select
                                  id="booking-interest"
                                  name="interest"
                                  className="form_select is-large w-select"
                                  defaultValue=""
                                >
                                  <option value="">Select</option>
                                  {interests.map((interest) => (
                                    <option value={interest} key={interest}>
                                      {interest}
                                    </option>
                                  ))}
                                </select>
                                <img
                                  src="/assets/template/icon-chevron-down.webp"
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  alt=""
                                  className="form_icon is-large"
                                />
                              </div>
                            </div>
                            <div className="form_field">
                              <div className="form_label">Have you visited us before?</div>
                              <div
                                role="radiogroup"
                                aria-label="Have you visited us before?"
                                className="form_radio-group"
                              >
                                <label className="form_radio w-radio">
                                  <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-input is-large w-radio-input" />
                                  <input
                                    name="patient-type"
                                    aria-label="New patient"
                                    type="radio"
                                    id="booking-patient-new"
                                    style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                                    value="New Patient"
                                  />
                                  <span className="form_radio-label w-form-label">
                                    New Patient
                                  </span>
                                </label>
                                <label className="form_radio w-radio">
                                  <div className="w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-input is-large w-radio-input" />
                                  <input
                                    type="radio"
                                    id="booking-patient-returning"
                                    name="patient-type"
                                    aria-label="Returning patient"
                                    style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                                    value="Returning"
                                  />
                                  <span className="form_radio-label w-form-label">Returning</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form_row">
                            <div className="form_field">
                              <label htmlFor="booking-date" className="form_label">
                                Preferred Date
                              </label>
                              <div className="form_control">
                                <input
                                  className="form_input is-large w-input"
                                  autoComplete="off"
                                  maxLength="8"
                                  name="preferred-date"
                                  inputMode="numeric"
                                  placeholder="DD/MM/YY"
                                  type="text"
                                  id="booking-date"
                                  onChange={(event) => {
                                    event.currentTarget.value = formatDate(event.currentTarget.value)
                                  }}
                                />
                                <img
                                  src="/assets/template/form-calendar.webp"
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  alt=""
                                  className="form_icon is-large"
                                />
                              </div>
                            </div>
                            <div className="form_field">
                              <label htmlFor="booking-time" className="form_label">
                                Preferred Time
                              </label>
                              <div className="form_control">
                                <select
                                  id="booking-time"
                                  name="preferred-time"
                                  className="form_select is-large w-select"
                                  defaultValue=""
                                >
                                  <option value="">Select Time</option>
                                  {times.map((time) => (
                                    <option value={time} key={time}>
                                      {time}
                                    </option>
                                  ))}
                                </select>
                                <img
                                  src="/assets/template/icon-chevron-down.webp"
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  alt=""
                                  className="form_icon is-large"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form_field">
                            <label htmlFor="booking-name" className="form_label">
                              Name
                            </label>
                            <input
                              className="form_input is-large w-input"
                              autoComplete="name"
                              maxLength="256"
                              name="name"
                              placeholder="e.g. Priya Sharma"
                              type="text"
                              id="booking-name"
                              required
                            />
                          </div>
                          <div className="form_field">
                            <label htmlFor="booking-phone" className="form_label">
                              Phone
                            </label>
                            <input
                              className="form_input is-large w-input"
                              autoComplete="tel"
                              maxLength="256"
                              name="phone"
                              placeholder="e.g. 096502 91732"
                              type="tel"
                              id="booking-phone"
                              required
                            />
                          </div>
                          <div className="form_field">
                            <label htmlFor="booking-email" className="form_label">
                              Email
                            </label>
                            <input
                              className="form_input is-large w-input"
                              autoComplete="email"
                              maxLength="256"
                              name="email"
                              placeholder="e.g. priya@gmail.com"
                              type="email"
                              id="booking-email"
                            />
                          </div>
                        </div>
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="form_submit w-button"
                          value="Request My Appointment"
                        />
                      </form>
                    )}
                    <div className="form_error w-form-fail">
                      <div className="form_message">
                        Something went wrong. Please try again or call us.
                      </div>
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
