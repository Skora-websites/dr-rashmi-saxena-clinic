import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow'

const tags = [
  'MBBS, University of Delhi',
  'MD, Obstetrics & Gynaecology',
  'AOGD & FOGSI Member',
  'Visiting Consultant, Noida',
]

export default function Provider() {
  return (
    <section className="section_provider" id="about">
      <div className="provider_component">
        <div className="provider_bio">
          <div className="provider_bio-header">
            <p className="provider_bio-label">Meet Your Doctor</p>
          </div>
          <div className="provider_bio-body">
            <p className="provider_bio-text">
              Dr Rashmi Saxena has cared for women through pregnancy, fertility and gynaecological
              surgery for more than twenty years.
            </p>
            <p className="provider_bio-text">
              She completed her MBBS at the University of Delhi and her MD in Obstetrics &amp;
              Gynaecology at Lady Hardinge Medical College, New Delhi. Her approach is simple:
              understand the whole picture first, treat only what is needed, and stay with you
              through every stage of care.
            </p>
          </div>
          <div className="provider_tags">
            {tags.map((tag) => (
              <div className="provider_tag" key={tag}>
                <p className="provider_tag-text">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="provider_aside">
          <div className="provider_card">
            <div className="provider_eyebrow">
              <Eyebrow dark>Your Doctor</Eyebrow>
            </div>
            <div className="provider_image-wrapper">
              <img
                src="/assets/clinic/doctor-at-desk.jpg"
                loading="lazy"
                width="800"
                height="450"
                alt="Dr Rashmi Saxena at her desk in the clinic"
                className="provider_image is-doctor"
                data-img-reveal
              />
              <div className="provider_name-tag">
                <p className="provider_name">Dr Rashmi Saxena</p>
              </div>
            </div>
            <p className="provider_quote">
              &ldquo;The best part of my work is when a patient tells me she felt heard before she
              felt treated.&rdquo;
            </p>
            <Link to="/about" className="provider_button w-inline-block">
              <div className="provider_button-text">About Dr Rashmi</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
