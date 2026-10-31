import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="hero_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5L13 17.5" />
  </svg>
)

const CalendarIcon = () => (
  <svg
    aria-hidden="true"
    className="hero_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="5.5" width="17" height="15" rx="2.2" />
    <path d="M8 3.5v4M16 3.5v4M3.5 10.5h17" />
    <path d="M8.2 14h.01M12 14h.01M15.8 14h.01M8.2 17.2h.01M12 17.2h.01" />
  </svg>
)

const PregnancyIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="19.6" cy="7.2" r="2.9" />
    <path d="M18.3 10.6c-.3 1.9.5 3.3 2.3 4.2 1.9 1 2.9 2.4 2.8 4.2-.1 1.9-1.4 3.3-3.4 3.8-1 .2-1.7.9-2 1.9-.3 1.1 0 2.2.8 3" />
    <path d="M17.8 10.9c-1.9.8-3.1 2.2-3.6 4.1-.6 2.3-.5 4.5.1 6.6.3 1.1.9 2 1.7 2.7" />
  </svg>
)

const LotusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.4 18.2c2.9.3 5.3 1.6 7 3.8" />
    <path d="M27.6 18.2c-2.9.3-5.3 1.6-7 3.8" />
    <path d="M16 26.3c-5.3 0-9.3-2.8-10.7-6.8 2.7-.5 5.3.3 7.2 2" />
    <path d="M16 26.3c5.3 0 9.3-2.8 10.7-6.8-2.7-.5-5.3.3-7.2 2" />
    <path d="M16 26.3c-2.6-3.7-3.4-7.6-2.2-11.6" />
    <path d="M16 26.3c2.6-3.7 3.4-7.6 2.2-11.6" />
    <path d="M16 26.3c-1.6-4.5-1.6-8.7 0-12.6 1.6 3.9 1.6 8.1 0 12.6Z" />
  </svg>
)

const UterusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.4 11.6c-1.6 2.2-1.6 4.7-.1 7 1.1 1.7 2.8 2.8 4.7 3.1v3.4" />
    <path d="M19.6 11.6c1.6 2.2 1.6 4.7.1 7-1.1 1.7-2.8 2.8-4.7 3.1v3.4" />
    <path d="M13.4 11.4c-1.7-2-3.7-3.3-5.8-3.6" />
    <path d="M18.6 11.4c1.7-2 3.7-3.3 5.8-3.6" />
    <circle cx="5.6" cy="8.3" r="1.5" />
    <circle cx="26.4" cy="8.3" r="1.5" />
    <path d="M15 25.6h2" />
  </svg>
)

const VenusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="16" cy="12.4" r="6.2" />
    <path d="M16 18.6v7.2M13 22h6" />
    <path d="m16 9.3 2.3 3.1L16 15.5l-2.3-3.1Z" />
  </svg>
)

const features = [
  { label: 'Pregnancy Care', icon: <PregnancyIcon /> },
  { label: "Women's Health", icon: <LotusIcon />, lavender: true },
  { label: 'Fertility Support', icon: <UterusIcon /> },
  { label: 'Gynaecological Care', icon: <VenusIcon />, lavender: true },
]

export default function Hero() {
  return (
    <section className="section_home-hero" id="home">
      <div aria-hidden="true" className="home-hero_image" />
      <div aria-hidden="true" className="home-hero_decor">
        <svg
          className="home-hero_waves"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 258c300-38 560-70 820-96 258-26 442-78 620-152v330H0Z" fill="#cbb0e4" opacity="0.5" />
          <path d="M0 304c320-30 620-64 900-98 240-29 402-76 540-130v264H0Z" fill="#bf9bd8" opacity="0.38" />
        </svg>
        <svg className="home-hero_leaf" viewBox="0 0 220 280" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M28 280c22-62 34-116 33-176" />
          <path d="M61 104c-30 4-50 24-57 56 30-3 51-24 57-56Z" />
          <path d="M22 206C-3 189-9 161 4 133c27 18 33 47 18 73Z" />
          <path d="M48 154c20-25 47-31 73-17-15 27-45 34-73 17Z" />
          <path d="M50 240c23-17 49-15 67 5-20 19-48 18-67-5Z" />
        </svg>
        <svg className="home-hero_heart" viewBox="0 0 84 78" fill="rgba(255, 255, 255, 0.28)" stroke="currentColor" strokeWidth="2.8">
          <path d="M42 69C20 53 7 39 7 25.5 7 14.6 15.2 7 26 7c6 0 12 3.4 16 8.8C46 10.4 52 7 58 7c10.8 0 19 7.6 19 18.5C77 39 64 53 42 69Z" />
        </svg>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="home-hero_component">
            <div aria-hidden="true" className="home-hero_mobile-media">
              <img
                src="/assets/clinic/hero-mother-baby.jpg"
                width="1680"
                height="950"
                alt=""
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <p className="home-hero_eyebrow">Obstetrician · Gynaecologist · IVF Specialist</p>
            <h1 className="home-hero_name">Dr. Rashmi Saxena</h1>
            <h2 className="home-hero_heading">Because your health deserves the best</h2>
            <span aria-hidden="true" className="hero_rule" />
            <div className="home-hero_content">
              <p className="home-hero_text">
                Senior obstetrician, gynaecologist and fertility specialist — unhurried care at
                every stage of a woman&rsquo;s life.
              </p>
              <ul className="hero_features">
                {features.map((feature) => (
                  <li
                    className={`hero_feature${feature.lavender ? ' is-lavender' : ''}`}
                    key={feature.label}
                  >
                    <span className="hero_feature-icon">{feature.icon}</span>
                    <span className="hero_feature-label">{feature.label}</span>
                  </li>
                ))}
              </ul>
              <div className="hero_actions">
                <Link to="/book" className="hero_button">
                  <CalendarIcon />
                  <span>Book an Appointment</span>
                  <ArrowIcon />
                </Link>
                <Link to="/services" className="hero_button is-outline">
                  <span>Explore Services</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
