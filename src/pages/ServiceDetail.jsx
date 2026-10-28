import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import PageCta from '../components/PageCta'
import { clinic, services } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <>
        <Seo title="Service not found — Dr Rashmi Saxena" />
        <PageHero
          eyebrow="Services"
          title="That service could not be found"
          text="The page may have moved. Browse all services to find the care you are looking for."
        >
          <Link to="/services" className="home-hero_button w-inline-block">
            <div className="home-hero_button-text">All Services</div>
          </Link>
        </PageHero>
        <PageCta />
      </>
    )
  }

  const others = services.filter((item) => item.slug !== slug)

  return (
    <>
      <Seo
        title={`${service.fullTitle} in Gaur City 2 — Dr Rashmi Saxena`}
        description={`${service.intro} Consult Dr Rashmi Saxena at her Women's Clinic in Gaur City 2, Greater Noida.`}
      />
      <PageHero eyebrow="Service" title={service.fullTitle} text={service.intro}>
        <Link to="/book" className="home-hero_button w-inline-block">
          <div className="home-hero_button-text">Book a Consultation</div>
        </Link>
        <a href={clinic.phoneHref} className="home-hero_link w-inline-block">
          <div className="home-hero_link-text">Call {clinic.phoneDisplay}</div>
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

      <section className="section_service-detail">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="service-detail_component">
                <div className="service-detail_main">
                  <div className="service-detail_media">
                    <img
                      src={service.image}
                      loading="lazy"
                      width="1200"
                      height="800"
                      alt={service.alt}
                      className="service-detail_image"
                    />
                  </div>
                  <Eyebrow dark>What&rsquo;s Included</Eyebrow>
                  <h2 className="service-detail_heading heading-style-h2" data-split>
                    How we care for you
                  </h2>
                  <ul className="service-detail_list">
                    {service.includes.map((item) => (
                      <li className="service-detail_item" key={item}>
                        <span className="service-detail_mark" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="service-detail_note">
                    Every plan begins with an unhurried consultation. Tests and procedures are
                    quoted before they are ordered, and follow-up questions are always welcome.
                  </p>
                </div>
                <aside className="service-detail_aside">
                  <div className="service-detail_card">
                    <p className="service-detail_card-label">Consultation</p>
                    <div className="service-detail_price">
                      ₹{service.price}
                      <span className="service-detail_price-unit">/ {service.unit}</span>
                    </div>
                    <p className="service-detail_card-text">
                      Fees for scans, tests and procedures are explained before anything is
                      booked. Payments by UPI or cash at the clinic.
                    </p>
                    <Link to="/book" className="service-detail_button">
                      Book an Appointment
                    </Link>
                    <a href={clinic.phoneHref} className="service-detail_link">
                      Call {clinic.phoneDisplay}
                    </a>
                    <div className="service-detail_hours">
                      <p className="service-detail_hours-label">OPD Hours</p>
                      {clinic.hours.map((slot) => (
                        <p className="service-detail_hours-text" key={slot.days}>
                          <span>{slot.days}</span>
                          <span>{slot.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_service-related">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="service-related_header">
                <Eyebrow dark>Continue Exploring</Eyebrow>
                <h2 className="service-related_heading">Other services</h2>
              </div>
              <div className="service-related_grid">
                {others.map((item) => (
                  <Link to={`/services/${item.slug}`} className="service-related_card" key={item.slug}>
                    <p className="service-related_title">{item.fullTitle}</p>
                    <p className="service-related_text">{item.text}</p>
                    <span className="service-related_link">
                      Learn more
                      <img
                        src="/assets/template/icon-arrow-right.webp"
                        loading="lazy"
                        width="18"
                        height="18"
                        alt=""
                        className="service-related_link-icon"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  )
}
