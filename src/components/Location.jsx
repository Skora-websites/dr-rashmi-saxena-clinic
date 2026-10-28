import Eyebrow from './Eyebrow'
import { clinic } from '../data/content'

export default function Location() {
  return (
    <section className="section_location" id="location">
      <div className="padding-global">
        <div className="container-large">
          <div className="location_component">
            <div className="location_card">
              <div className="location_header">
                <Eyebrow>Location &amp; Hours</Eyebrow>
                <h2 className="location_heading">Where to find us</h2>
              </div>
              <div className="location_details">
                <div className="location_group">
                  <p className="location_label">Address</p>
                  <p className="location_address">{clinic.address}</p>
                </div>
                <div className="location_row">
                  <div className="location_group is-contact">
                    <p className="location_label">Phone</p>
                    <a href={clinic.phoneHref} className="location_link">
                      {clinic.phoneDisplay}
                    </a>
                  </div>
                  <div className="location_group is-contact">
                    <p className="location_label">WhatsApp</p>
                    <a
                      href={clinic.whatsapp}
                      className="location_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Message the clinic
                    </a>
                  </div>
                </div>
                <div className="location_group">
                  <p className="location_label">Hours</p>
                  <div className="location_hours">
                    {clinic.hours.map((slot) => (
                      <p className="location_hours-text" key={slot.days}>
                        {slot.days} :
                        <br />
                        {slot.time}
                      </p>
                    ))}
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
