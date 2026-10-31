import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Booking from '../components/Booking'
import { clinic } from '../data/content'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — Dr Rashmi Saxena's Women's Clinic, Gaur City 2"
        description="Call 096502 91732, message on WhatsApp, or visit Dr Rashmi Saxena's Women's Clinic at High Street Market, 14th Avenue, Gaur City 2, Greater Noida."
      />
      <PageHero
        eyebrow="Contact"
        title="We are here to help"
        text="Call, message on WhatsApp, or walk in during OPD hours. For first visits and fertility consultations, calling ahead helps us keep waiting times short."
      >
        <a href={clinic.phoneHref} className="home-hero_button w-inline-block">
          <div className="home-hero_button-text">Call {clinic.phoneDisplay}</div>
        </a>
        <a
          href={clinic.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="home-hero_link w-inline-block"
        >
          <div className="home-hero_link-text">Message on WhatsApp</div>
          <img
            src="/assets/template/home-icon-arrow-right.webp"
            loading="lazy"
            width="24"
            height="24"
            alt=""
            className="home-hero_link-icon"
          />
        </a>
      </PageHero>

      <section className="section_contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="contact_component">
                <div className="contact_details">
                  <Eyebrow dark>Clinic Information</Eyebrow>
                  <h2 className="contact_heading heading-style-h2" data-split>
                    Dr Rashmi Saxena&rsquo;s Women&rsquo;s Clinic
                  </h2>
                  <div className="contact_blocks">
                    <div className="contact_block">
                      <p className="contact_block-label">Address</p>
                      <p className="contact_block-text">
                        {clinic.addressLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </p>
                      <a
                        href={clinic.maps}
                        target="_blank"
                        rel="noreferrer"
                        className="contact_block-link"
                      >
                        Get directions
                      </a>
                    </div>
                    <div className="contact_block">
                      <p className="contact_block-label">Phone &amp; WhatsApp</p>
                      <p className="contact_block-text">
                        <a href={clinic.phoneHref} className="contact_block-link">
                          {clinic.phoneDisplay}
                        </a>
                        <span>Walk-in during OPD or book ahead</span>
                      </p>
                      <a
                        href={clinic.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="contact_block-link"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                    <div className="contact_block">
                      <p className="contact_block-label">OPD Timings</p>
                      <p className="contact_block-text">
                        {clinic.hours.map((slot) => (
                          <span key={slot.days}>
                            {slot.days}: {slot.time}
                          </span>
                        ))}
                      </p>
                      <p className="contact_block-note">{clinic.hoursNote}</p>
                    </div>
                    <div className="contact_block">
                      <p className="contact_block-label">Associated Hospitals</p>
                      <p className="contact_block-text">
                        <span>Cloud 9</span>
                        <span>Motherland</span>
                        <span>Sarvodaya</span>
                        <span>LYF</span>
                        <span>Motherhood Sector-45</span>
                        <span>Others</span>
                      </p>
                    </div>
                  </div>
                </div>
                <aside className="contact_aside">
                  <img
                    src="/assets/clinic/logo.png"
                    width="1024"
                    height="341"
                    alt="Dr. Rashmi Saxena's Women's Clinic logo"
                    className="contact_logo"
                  />
                  <img
                    src="/assets/clinic/waiting-room.jpg"
                    loading="lazy"
                    width="1200"
                    height="800"
                    alt="The waiting area at Dr Rashmi Saxena's clinic"
                    className="contact_image"
                  />
                  <p className="contact_aside-text">
                    Obstetrician-Gynecologist in Uttar Pradesh · {clinic.rating} stars across{' '}
                    {clinic.reviewCount} Google reviews
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Booking />
    </>
  )
}
