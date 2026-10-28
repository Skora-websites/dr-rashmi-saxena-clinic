import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Visit from '../components/Visit'
import Faq from '../components/Faq'
import PageCta from '../components/PageCta'

export default function FirstVisit() {
  return (
    <>
      <Seo
        title="Your First Visit — Dr Rashmi Saxena's Women's Clinic, Gaur City 2"
        description="What happens at your first consultation: an unhurried conversation, a clear plan, an exact cost, in-clinic tests and an included follow-up."
      />
      <PageHero
        eyebrow="Your First Visit"
        title="Come in, we'll take it from here"
        text="A first consultation is unhurried. We talk through your concerns, examine only what is needed, and explain the plan and the cost before anything is booked."
      />
      <Visit />
      <Faq />
      <PageCta
        eyebrow="Ready when you are"
        title="Walk in, or book ahead"
        text="Walk-ins are welcome during OPD hours. Calling first helps us keep waiting times short, especially for first visits and fertility consultations."
      />
    </>
  )
}
