import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import PageCta from '../components/PageCta'
import { clinic, gmbCare, gmbProducts, services } from '../data/content'

export default function Services() {
  return (
    <>
      <Seo
        title="Women's Health Services in Gaur City 2 — Dr Rashmi Saxena"
        description="Preconception counselling, antenatal care, delivery, adolescent health, perimenopausal care, PCOS/PMOS, gynaecological surgery, cancer detection and family planning in Gaur City 2, Greater Noida."
      />
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive women's healthcare"
        text="From preconception and pregnancy to menopause and surgery — evidence-led care with in-clinic lab testing and trusted hospital partners across Noida."
      >
        <Link to="/book" className="home-hero_button w-inline-block">
          <div className="home-hero_button-text">Book an Appointment</div>
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

      <section className="section_service-index">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="service-index_header">
                <Eyebrow dark>What We Treat</Eyebrow>
                <h2 className="service-index_heading heading-style-h2" data-split>
                  Care for every stage of a woman&rsquo;s life
                </h2>
              </div>
              <div className="service-grid" data-reveal-group>
                {services.map((service) => (
                  <Link
                    to={`/services/${service.slug}`}
                    className="service-card"
                    key={service.slug}
                    data-reveal
                  >
                    <div className="service-card_media">
                      <img
                        src={service.image}
                        loading="lazy"
                        width="800"
                        height="600"
                        alt={service.alt}
                        className="service-card_image"
                      />
                    </div>
                    <div className="service-card_body">
                      <h3 className="service-card_title">{service.fullTitle}</h3>
                      <p className="service-card_text">{service.intro}</p>
                      <div className="service-card_tags">
                        {service.tags.map((tag) => (
                          <span className="service-card_tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="service-card_link">
                        Learn more
                        <img
                          src="/assets/template/icon-arrow-right.webp"
                          loading="lazy"
                          width="20"
                          height="20"
                          alt=""
                          className="service-card_link-icon"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_services-detail">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="services-detail_grid">
                <div className="services-detail_block">
                  <Eyebrow>From the Clinic</Eyebrow>
                  <h2 className="services-detail_heading">Complete gynae care, under one roof</h2>
                  <ul className="care-list">
                    {gmbCare.map((item) => (
                      <li className="care-list_item" key={item}>
                        <span className="care-list_mark" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="services-detail_block is-products">
                  <Eyebrow>Investigations &amp; Products</Eyebrow>
                  <h2 className="services-detail_heading">In-clinic tests and treatments</h2>
                  <div className="products-grid">
                    {gmbProducts.map((product) => (
                      <div className="product-item" key={product.name}>
                        <p className="product-item_name">{product.name}</p>
                        <p className="product-item_text">{product.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Not sure where to start?"
        title="Start with a consultation"
        text="Bring your questions and any previous reports. We will work out what is needed, what it costs, and what happens next."
      />
    </>
  )
}
