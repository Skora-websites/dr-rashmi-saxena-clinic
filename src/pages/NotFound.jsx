import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Dr Rashmi Saxena's Women's Clinic" />
      <PageHero
        eyebrow="404"
        title="This page could not be found"
        text="The link may be old or mistyped. Start from the homepage or browse our services."
      >
        <Link to="/" className="home-hero_button w-inline-block">
          <div className="home-hero_button-text">Back to Home</div>
        </Link>
        <Link to="/services" className="home-hero_link w-inline-block">
          <div className="home-hero_link-text">View Services</div>
          <img
            src="/assets/template/home-icon-arrow-right.webp"
            loading="lazy"
            width="24"
            height="24"
            alt=""
            className="home-hero_link-icon"
          />
        </Link>
      </PageHero>
      <PageCta />
    </>
  )
}
