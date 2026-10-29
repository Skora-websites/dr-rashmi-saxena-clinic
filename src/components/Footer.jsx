import { Link } from 'react-router-dom'
import { clinic } from '../data/content'

const careLinks = [
  ['Preconception Counselling', '/services/preconception-counselling'],
  ['Antenatal Care', '/services/antenatal-care'],
  ['Delivery', '/services/delivery'],
  ['Adolescent Health', '/services/adolescent-health'],
  ['Perimenopausal Problems', '/services/perimenopausal-problems'],
  ['Gynaecological Problems', '/services/gynaecological-problems'],
  ['PCOS / PMOS', '/services/pcos-pmos'],
  ['Gynaecological Surgeries', '/services/gynaecological-surgeries'],
  ['Cancer Detection', '/services/cancer-detection'],
  ['Family Planning Counselling', '/services/family-planning'],
]

const clinicLinks = [
  ['About Dr Rashmi', '/about'],
  ['First Visit', '/first-visit'],
  ['Care Programs', '/programs'],
  ['Payment', '/payment'],
  ['Reviews', '/reviews'],
  ['Location & Hours', '/location'],
]

const quickLinks = [
  ['Book an Appointment', '/book'],
  ['Contact the Clinic', '/contact'],
  ['Call the Clinic', clinic.phoneHref],
  ['WhatsApp', clinic.whatsapp],
  ['Directions', clinic.maps],
]

export default function Footer() {
  return (
    <footer className="footer_component">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_padding">
            <div className="footer_top">
              <Link to="/" aria-label="Dr Rashmi Saxena's Women's Clinic — home" className="footer_logo-link w-inline-block">
                <img
                  src="/assets/clinic/logo.png"
                  width="1024"
                  height="341"
                  alt="Dr. Rashmi Saxena's Women's Clinic"
                  className="footer_logo-image"
                />
              </Link>
              <div className="footer_layout">
                <div className="footer_left">
                  <p className="footer_tagline">
                    Obstetrics, gynaecology and fertility care in Gaur City 2, Greater Noida.
                    Unhurried, by appointment or walk-in.
                  </p>
                  <div className="footer_legal">
                    {quickLinks.map(([label, href]) => {
                      if (href.startsWith('http') || href.startsWith('tel:')) {
                        return (
                          <a
                            href={href}
                            className="footer_legal-link"
                            key={label}
                            {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                          >
                            {label}
                          </a>
                        )
                      }
                      return (
                        <Link to={href} className="footer_legal-link" key={label}>
                          {label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="footer_right">
                  <div className="footer_nav">
                    <div className="footer_nav-group">
                      <div className="footer_nav-label">Care</div>
                      <div className="footer_nav-list">
                        {careLinks.map(([label, href]) => (
                          <Link to={href} className="footer_nav-link" key={label}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="footer_nav-group">
                      <div className="footer_nav-label">Clinic</div>
                      <div className="footer_nav-list">
                        {clinicLinks.map(([label, href]) => (
                          <Link to={href} className="footer_nav-link" key={label}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <img
                    src="/assets/clinic/signboard.jpg"
                    loading="lazy"
                    width="635"
                    height="375"
                    alt="The clinic signboard at 14th Avenue High Street Market, Gaur City 2"
                    className="footer_image"
                    data-footer-image
                  />
                </div>
              </div>
            </div>
            <div className="footer_divider" />
            <div className="footer_bottom">
              <p className="footer_copyright">
                Copyright © {new Date().getFullYear()} Dr Rashmi Saxena.
                <a href={clinic.phoneHref} className="footer_copyright-link">
                  {clinic.phoneDisplay}
                </a>
              </p>
              <a href="#top" className="footer_back-to-top w-inline-block">
                <div className="footer_back-to-top-text">Back To Top</div>
                <img
                  src="/assets/template/icon-arrow-up.webp"
                  loading="lazy"
                  width="36"
                  height="36"
                  alt=""
                  className="footer_back-to-top-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
