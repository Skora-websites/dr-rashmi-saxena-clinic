import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Provider from '../components/Provider'
import Why from '../components/Why'
import PageCta from '../components/PageCta'
import { clinic, credentials, focusAreas } from '../data/content'

export default function About() {
  return (
    <>
      <Seo
        title="About Dr Rashmi Saxena — 28 Years in Women's Health | Gaur City 2"
        description="Dr Rashmi Saxena is a senior gynaecologist, obstetrician and infertility specialist in Gaur City 2, Greater Noida. MBBS (Maulana Azad Medical College, Delhi), MD (Lady Hardinge Medical College), AOGD & FOGSI member."
      />
      <PageHero
        eyebrow="About Dr Rashmi Saxena"
        title="28 years of women's health care"
        text="Senior obstetrician, gynaecologist and fertility specialist — combining clinical experience with calm, unhurried care for women at every stage of life."
      >
        <Link to="/book" className="home-hero_button w-inline-block">
          <div className="home-hero_button-text">Book a Consultation</div>
        </Link>
        <Link to="/services" className="home-hero_link w-inline-block">
          <div className="home-hero_link-text">Explore Services</div>
          <img
            src="/assets/template/home-icon-arrow-right.webp"
            loading="lazy"
            width="24"
            height="24"
            alt=""
            className="home-hero_link-icon"
          />
        </Link>
      </PageHero>

      <Provider />

      <section className="section_about">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="about_intro">
                <Eyebrow dark>About Dr Rashmi Saxena</Eyebrow>
                <h2 className="about_intro-heading" data-split>
                  Gynaecologist, Obstetrician &amp; Infertility Specialist
                </h2>
                <div className="about_intro-body">
                  <p className="about_text">
                    Dr Rashmi Saxena is a gynaecologist, obstetrician and infertility specialist
                    practising in Noida, with 28 years of experience. She consults at Dr Rashmi
                    Saxena&rsquo;s Women&rsquo;s Clinic in Gaur City 2, Greater Noida.
                  </p>
                  <p className="about_text">
                    Her qualifications include training in assisted reproductive techniques
                    (infertility) at the Institute of Reproductive Medicine, Kolkata; an MD in
                    Obstetrics &amp; Gynaecology from Lady Hardinge Medical College, New Delhi; and
                    an MBBS from Maulana Azad Medical College, Delhi. She is a member of AOGD and
                    FOGSI.
                  </p>
                </div>
                <div className="about_intro-grid">
                  <div className="about_intro-card">
                    <h3 className="about_intro-title">Areas of focus</h3>
                    <ul className="about_tags">
                      {focusAreas.map((area) => (
                        <li className="about_tag" key={area}>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="about_intro-card">
                    <h3 className="about_intro-title">Hospital affiliations</h3>
                    <p className="about_intro-text">
                      She is associated with Sarvodaya Hospital and LYF Hospital, along with other
                      hospitals that offer economical packages — so treatment can be planned around
                      what a family can comfortably manage.
                    </p>
                  </div>
                </div>
                <div className="about_note">
                  <span className="about_note-label">Pregnancy care</span>
                  <p className="about_note-text">
                    Preconception counselling comes first, before pregnancy. Antenatal care then
                    follows trimester by trimester, with counselling at every visit on tests,
                    ultrasound scans, nutrition and follow-ups — calm, well-supported care
                    throughout.
                  </p>
                </div>
              </div>

              <div className="about_divider" />

              <div className="about_component">
                <div className="about_content">
                  <Eyebrow dark>Credentials &amp; Memberships</Eyebrow>
                  <h2 className="about_heading heading-style-h2" data-split>
                    Senior Obstetrician, Gynaecologist &amp; Fertility Specialist
                  </h2>
                  <p className="about_text">
                    Dr Rashmi Saxena combines more than two decades of clinical experience with
                    compassionate, unhurried care. From pregnancy and delivery to fertility, PCOS
                    and gynaecological surgery, every patient receives personalised attention
                    tailored to her needs.
                  </p>
                  <p className="about_text">
                    She completed her MBBS from Maulana Azad Medical College, Delhi, and her MD in
                    Obstetrics &amp; Gynaecology from Lady Hardinge Medical College, New Delhi. She
                    has advanced clinical training in infertility assessment, ovulation induction
                    and assisted reproductive technologies.
                  </p>
                  <p className="about_text">
                    Deliveries and advanced gynaecological surgeries are performed at Sarvodaya
                    Hospital and LYF Hospital, and at other Noida hospitals that offer economical
                    packages — with the highest standards of safety and care.
                  </p>
                  <ul className="about_credentials">
                    {credentials.map((item) => (
                      <li className="about_credential" key={item}>
                        <span className="about_credential-mark" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="about_aside">
                  <div className="about_brand-card">
                    <img
                      src="/assets/clinic/logo.png"
                      width="1024"
                      height="341"
                      alt="Dr. Rashmi Saxena's Women's Clinic logo"
                      className="about_logo"
                    />
                    <p className="about_brand-text">
                      Best Gynaecologist Dr Rashmi Saxena · Gaur City 2, Greater Noida
                    </p>
                  </div>
                  <img
                    src="/assets/clinic/signboard.jpg"
                    loading="lazy"
                    width="1500"
                    height="1125"
                    alt="The clinic signboard at 14th Avenue High Street Market, Gaur City 2"
                    className="about_image"
                  />
                  <div className="about_facts">
                    <div className="about_fact">
                      <span className="about_fact-label">Consulting at</span>
                      <span className="about_fact-value">{clinic.addressShort}</span>
                    </div>
                    <div className="about_fact">
                      <span className="about_fact-label">Google rating</span>
                      <span className="about_fact-value">
                        {clinic.rating} ★ · {clinic.reviewCount} reviews
                      </span>
                    </div>
                    <div className="about_fact">
                      <span className="about_fact-label">Appointments</span>
                      <a href={clinic.phoneHref} className="about_fact-link">
                        {clinic.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Why />

      <PageCta
        eyebrow="About Your Visit"
        title="Care that starts with listening"
        text="The first consultation is unhurried. We talk through your history and concerns, then explain the plan and the cost before anything is booked."
      />
    </>
  )
}
