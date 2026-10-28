import { Link } from 'react-router-dom'
import { clinic } from '../data/content'

export default function PageCta({
  eyebrow = 'Appointments',
  title = 'Come in and talk it through',
  text = 'Walk in during OPD hours, call first if you prefer, or request an appointment and we will confirm on WhatsApp.',
}) {
  return (
    <section className="section_page-cta">
      <div className="padding-global">
        <div className="container-large">
          <div className="page-cta_component">
            <div className="page-cta_content">
              <p className="page-cta_eyebrow">{eyebrow}</p>
              <h2 className="page-cta_heading" data-split>
                {title}
              </h2>
              <p className="page-cta_text">{text}</p>
              <p className="page-cta_hours">{clinic.hoursLabel}</p>
            </div>
            <div className="page-cta_actions">
              <Link to="/book" className="page-cta_button">
                Book an Appointment
              </Link>
              <a href={clinic.phoneHref} className="page-cta_link">
                Call {clinic.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
