import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Memberships from '../components/Memberships'
import Payment from '../components/Payment'
import PageCta from '../components/PageCta'

export default function Programs() {
  return (
    <>
      <Seo
        title="Care Programs — Dr Rashmi Saxena's Women's Clinic"
        description="Care programs for general consultations, fertility support and antenatal care. Transparent fees, in-clinic tests and follow-up guidance."
      />
      <PageHero
        eyebrow="Care Programs"
        title="Support that grows with you"
        text="No packages to sign. Fees are explained before anything is booked, and follow-up questions are always welcome."
      />
      <Memberships />
      <Payment />
      <PageCta
        eyebrow="Fees & Payments"
        title="Fees with no surprises"
        text="The consultation fee is ₹700 and is valid for 3 days. Tests, scans and procedures are quoted in advance, and payments are accepted by UPI or cash at the clinic."
      />
    </>
  )
}
