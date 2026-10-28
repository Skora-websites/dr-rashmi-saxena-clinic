import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Booking from '../components/Booking'

export default function Book() {
  return (
    <>
      <Seo
        title="Book an Appointment — Dr Rashmi Saxena, Gaur City 2"
        description="Request an appointment with Dr Rashmi Saxena at her Women's Clinic in Gaur City 2, Greater Noida. Walk-ins welcome during OPD hours."
      />
      <PageHero
        eyebrow="Appointments"
        title="Book a time that suits you"
        text="Request a time that suits you and we will confirm on WhatsApp. Walk-ins are also welcome during OPD hours."
      />
      <Booking />
    </>
  )
}
