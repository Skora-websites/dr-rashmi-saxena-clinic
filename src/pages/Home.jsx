import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Why from '../components/Why'
import ServicesSlider from '../components/ServicesSlider'
import Provider from '../components/Provider'
import Visit from '../components/Visit'
import Gallery from '../components/Gallery'
import Memberships from '../components/Memberships'
import Payment from '../components/Payment'
import Reviews from '../components/Reviews'
import Location from '../components/Location'
import Booking from '../components/Booking'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Seo
        title="Dr Rashmi Saxena — Best Gynaecologist in Gaur City 2, Greater Noida"
        description="Dr Rashmi Saxena's Women's Clinic — senior obstetrician, gynaecologist and fertility specialist in Gaur City 2, Greater Noida. Pregnancy care, fertility consultation, PCOS support, PAP smear, vaccination and gynaecological surgery."
      />
      <Hero />
      <Why />
      <ServicesSlider />
      <Provider />
      <Visit />
      <Gallery />
      <Memberships />
      <Payment />
      <Reviews />
      <Location />
      <Booking />
      <Newsletter />
    </>
  )
}
