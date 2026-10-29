import Eyebrow from './Eyebrow'
import { reasons } from '../data/content'

export default function Why() {
  return (
    <section className="section_why" id="why">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="why_component">
              <div className="why_header">
                <Eyebrow dark>Why Dr. Rashmi Saxena</Eyebrow>
                <h2 className="why_heading heading-style-h2" data-split>
                  Care you can trust
                </h2>
              </div>
              <div className="why_grid" data-reveal-group>
                {reasons.map((reason, index) => (
                  <div
                    className={`why_card${index === 1 ? ' is-right' : ''}${
                      index === 2 ? ' is-bottom' : ''
                    }${index === 3 ? ' is-last' : ''}`}
                    key={reason.title}
                    data-reveal
                  >
                    <div className="why_card-top">
                      <img
                        src={reason.icon}
                        loading="lazy"
                        width="40"
                        height="40"
                        alt=""
                        className="why_icon"
                      />
                      <h3 className="why_card-title">{reason.title}</h3>
                    </div>
                    <p className="why_card-text">{reason.text}</p>
                  </div>
                ))}
                <div aria-hidden="true" className="why_line is-vertical" />
                <div aria-hidden="true" className="why_line is-horizontal" />
                <div aria-hidden="true" className="why_plus">
                  <div className="why_plus-bar" />
                  <div className="why_plus-bar is-turned" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
