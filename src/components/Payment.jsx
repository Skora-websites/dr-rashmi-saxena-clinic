import Eyebrow from './Eyebrow'

const steps = [
  {
    title: '01 - Know the Fee',
    icon: '/assets/template/icon-pay-treatment.webp',
    heading: '₹700, valid for 3 days',
    text: 'The consultation is ₹700 and stays valid for 3 days. Tests and scans are quoted before they are ordered — no surprises at the desk.',
  },
  {
    title: '02 - Pay How You Prefer',
    icon: '/assets/template/icon-pay-plan.webp',
    heading: 'UPI or cash',
    text: 'Pay at the clinic by UPI or cash. An itemised bill is provided for every visit and every test.',
  },
  {
    title: '03 - You\u2019re All Set',
    icon: '/assets/template/icon-pay-set.webp',
    heading: 'Simple from here',
    text: 'Reports and prescriptions are shared with you, and the next review is booked before you leave.',
  },
]

export default function Payment() {
  return (
    <section id="financing" className="section_payment">
      <div className="payment_blur" />
      <div className="padding-global">
        <div className="container-large">
          <div className="payment_component">
            <div className="payment_card">
              <div className="payment_header">
                <Eyebrow>Payment Options</Eyebrow>
                <h2 className="payment_heading">Simple, transparent payment</h2>
                <p className="payment_text">
                  The consultation fee is ₹700 and is valid for 3 days. Anything beyond that —
                  tests, scans, procedures — is quoted in advance so you can decide before you
                  agree. Payments are accepted by UPI or cash at the clinic.
                </p>
              </div>
              <div className="payment_steps">
                {steps.map((step, index) => (
                  <Step key={step.title} step={step} last={index === steps.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ step, last }) {
  return (
    <>
      <div className="payment_step">
        <h3 className="payment_step-title">{step.title}</h3>
        <div className="payment_step-content">
          <img
            src={step.icon}
            loading="lazy"
            width="40"
            height="40"
            alt=""
            className="payment_icon"
          />
          <h4 className="payment_step-heading">{step.heading}</h4>
          <p className="payment_step-text">{step.text}</p>
        </div>
      </div>
      {last ? null : <div className="payment_divider" />}
    </>
  )
}
