import Eyebrow from './Eyebrow'
import { visitSteps } from '../data/content'

function CardText({ text, highlight }) {
  if (!highlight) return <p className="visit_card-text">{text}</p>
  const index = text.indexOf(highlight)
  if (index === -1) return <p className="visit_card-text">{text}</p>
  return (
    <p className="visit_card-text">
      {text.slice(0, index).replace(/\s+$/, '')}
      <span className="visit_card-text-highlight">{highlight}</span>
      {text.slice(index + highlight.length)}
    </p>
  )
}

export default function Visit() {
  return (
    <section id="first-visit" className="section_visit">
      <div className="padding-global">
        <div className="container-large">
          <div className="visit_component">
            <div className="visit_header">
              <Eyebrow dark>Your First Visit</Eyebrow>
              <div className="visit_header-row">
                <h2 className="visit_heading heading-style-h2" data-split>
                  Here&rsquo;s exactly what happens
                </h2>
                <p className="visit_header-text">
                  A first consultation is unhurried. We talk through your concerns, examine only
                  what is needed, and explain the plan and the cost before anything is booked.
                </p>
              </div>
            </div>
            <div className="visit_list">
              {visitSteps.map((step) => (
                <div className="visit_card" key={step.title}>
                  <div className="visit_image-wrap">
                    <img
                      src={step.image}
                      loading="lazy"
                      width="304"
                      height="325"
                      alt={step.alt}
                      className="visit_image"
                    />
                    <div className="visit_image-cover" data-cover />
                  </div>
                  <div className="visit_card-content">
                    <h3 className="visit_card-title">{step.title}</h3>
                    <CardText text={step.text} highlight={step.highlight} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
