import { useState } from 'react'
import Eyebrow from './Eyebrow'
import { faqs } from '../data/content'

export default function Faq({ eyebrow = 'FAQ', heading = 'Got questions? We have answers' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section_faq" id="faq">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="faq_component">
              <div className="faq_header">
                <Eyebrow dark>{eyebrow}</Eyebrow>
                <h2 className="faq_heading heading-style-h2" data-split>
                  {heading}
                </h2>
              </div>
              <div className="faq_list" data-reveal-group>
                {faqs.map((faq, index) => {
                  const open = openIndex === index
                  return (
                    <div
                      className={`faq_item${open ? ' is-open' : ''}`}
                      key={faq.question}
                      data-reveal
                    >
                      <button
                        type="button"
                        className="faq_question"
                        aria-expanded={open}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenIndex(open ? null : index)}
                      >
                        <span className="faq_question-text">{faq.question}</span>
                        <span className="faq_icon" aria-hidden="true">
                          <span className="faq_icon-bar" />
                          <span className="faq_icon-bar is-vertical" />
                        </span>
                      </button>
                      <div
                        className="faq_answer"
                        id={`faq-answer-${index}`}
                        hidden={!open}
                      >
                        <p className="faq_answer-text">{faq.answer}</p>
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
