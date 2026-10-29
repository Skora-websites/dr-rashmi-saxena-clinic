import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Payment from '../components/Payment'
import PageCta from '../components/PageCta'

export default function PaymentPage() {
  return (
    <>
      <Seo
        title="Payment Options — Dr Rashmi Saxena's Women's Clinic"
        description="Consultation fee, tests and procedure costs explained upfront. Payments accepted by UPI or cash at the clinic in Gaur City 2."
      />
      <PageHero
        eyebrow="Payment Options"
        title="Fees you can see upfront"
        text="The consultation fee is ₹700 and is valid for 3 days. Anything beyond that — tests, scans, procedures — is quoted in advance so you can decide before you agree."
      />
      <Payment />
      <PageCta
        eyebrow="Before You Book"
        title="Know the cost before you agree"
        text="Every visit ends with an itemised bill. Reports and prescriptions are shared with you, and the next review is booked before you leave."
      />
    </>
  )
}
