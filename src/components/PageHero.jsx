import Eyebrow from './Eyebrow'

export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="section_page-hero">
      <div aria-hidden="true" className="page-hero_texture" />
      <div className="padding-global">
        <div className="container-large">
          <div className="page-hero_component">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="page-hero_heading heading-style-h1" data-split>
              {title}
            </h1>
            {text ? (
              <p className="page-hero_text" data-reveal>
                {text}
              </p>
            ) : null}
            {children ? (
              <div className="page-hero_actions" data-reveal>
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
