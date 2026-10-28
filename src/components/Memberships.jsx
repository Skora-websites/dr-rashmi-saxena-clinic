import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow'
import { carePrograms } from '../data/content'

export default function Memberships() {
  return (
    <section id="memberships" className="section_memberships">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small">
            <div className="memberships_component">
              <div className="memberships_header">
                <div className="memberships_intro">
                  <Eyebrow dark>Care Programs</Eyebrow>
                  <h2 className="memberships_heading heading-style-h2" data-split>
                    Care that continues, visit after visit
                  </h2>
                </div>
                <div className="memberships_details">
                  <p className="memberships_note">
                    No packages to sign. Fees are explained before anything is booked, and follow-up
                    questions are always welcome.
                  </p>
                  <Link to="/book" className="button-outline w-inline-block">
                    <div className="button-outline_text">Book a Consultation</div>
                  </Link>
                </div>
              </div>
              <div className="memberships_list">
                {carePrograms.map((program, index) => {
                  const featured = Boolean(program.featured)
                  const featureClass = featured ? ' is-featured' : ''
                  const positionClass = index === 0 ? ' is-joined' : featured ? ' is-featured' : ''
                  return (
                    <div className={`memberships_card${positionClass}`} key={program.name}>
                      <div className="memberships_card-top">
                        <div className="memberships_card-header">
                          <div className="memberships_card-titles">
                            <h3 className={`memberships_card-name${featureClass}`}>{program.name}</h3>
                            <p className={`memberships_card-description${featureClass}`}>
                              {program.description}
                            </p>
                          </div>
                          {featured ? (
                            <div className="memberships_tag">
                              <div className="memberships_tag-text">Most Chosen</div>
                            </div>
                          ) : null}
                        </div>
                        <div className={`memberships_price${featureClass} ${program.unit ? '' : 'is-text'}`.trim()}>
                          {program.price}
                          {program.unit ? (
                            <>
                              /
                              <span className={`memberships_price-unit${featureClass}`}>
                                {program.unit}
                              </span>
                            </>
                          ) : null}
                        </div>
                        <Link to="/book" className={`memberships_button${featureClass} w-inline-block`}>
                          <div className="memberships_button-text">Book Now</div>
                        </Link>
                      </div>
                      <div className="memberships_features">
                        <p className={`memberships_included${featureClass}`}>What&rsquo;s included:</p>
                        <div className={`memberships_feature-list${featureClass}`}>
                          {program.features.map((feature) => (
                            <div className="memberships_feature" key={feature}>
                              <img
                                src={
                                  featured
                                    ? '/assets/template/home-memberships-check-light.webp'
                                    : '/assets/template/home-memberships-check.webp'
                                }
                                loading="lazy"
                                width="32"
                                height="32"
                                alt="Included"
                                className="memberships_feature-icon"
                              />
                              <p className={`memberships_feature-text${featureClass}`}>{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
