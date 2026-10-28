import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Location from '../components/Location'
import PageCta from '../components/PageCta'
import { clinic } from '../data/content'

export default function LocationPage() {
  return (
    <>
      <Seo
        title="Location & Hours — Dr Rashmi Saxena, Gaur City 2"
        description="Find Dr Rashmi Saxena's Women's Clinic at Shop No 15, First Floor, High Street Market, 14th Avenue, Gaur City 2, Greater Noida. OPD Mon–Sat 6:30–8:30 pm and Sat–Sun 11:30 am–1:30 pm."
      />
      <PageHero
        eyebrow="Location & Hours"
        title="In the heart of Gaur City 2"
        text="First floor, High Street Market on 14th Avenue — above Domino's, Amatra and Rivaah Banquets, near the petrol pump."
      >
        <a
          href={clinic.maps}
          target="_blank"
          rel="noreferrer"
          className="home-hero_button w-inline-block"
        >
          <div className="home-hero_button-text">Get Directions</div>
        </a>
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

      <Location />

      <section className="section_map">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="map_component">
                <div className="map_frame">
                  <iframe
                    src={clinic.mapEmbed}
                    title="Dr Rashmi Saxena's Women's Clinic on Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="map_details">
                  <p className="map_label">Getting there</p>
                  <p className="map_address">{clinic.address}</p>
                  <div className="map_actions">
                    <a
                      href={clinic.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="map_button"
                    >
                      Open in Google Maps
                    </a>
                    <a href={clinic.phoneHref} className="map_link">
                      Call {clinic.phoneDisplay}
                    </a>
                  </div>
                  <div className="map_note">
                    <p className="map_note-label">Parking & landmarks</p>
                    <p className="map_note-text">
                      The clinic is in the same block as Domino&apos;s and the Amatra and Rivaah
                      banquet halls, near the petrol pump on 14th Avenue. Plus code JC99+97.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Plan Your Visit"
        title="We look forward to seeing you"
        text="Walk in during OPD hours or call ahead. If you are travelling from outside Gaur City, a quick call helps us keep your waiting time short."
      />
    </>
  )
}
