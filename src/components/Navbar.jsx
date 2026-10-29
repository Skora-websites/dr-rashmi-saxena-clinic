import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { clinic } from '../data/content'

const menuColumns = [
  {
    label: 'Care',
    links: [
      { text: 'Preconception Counselling', href: '/services/preconception-counselling' },
      { text: 'Antenatal Care', href: '/services/antenatal-care' },
      { text: 'Delivery', href: '/services/delivery' },
      { text: 'Adolescent Health', href: '/services/adolescent-health' },
      { text: 'Perimenopausal Problems', href: '/services/perimenopausal-problems' },
      { text: 'Gynaecological Problems', href: '/services/gynaecological-problems' },
      { text: 'PCOS / PMOS', href: '/services/pcos-pmos' },
      { text: 'Gynaecological Surgeries', href: '/services/gynaecological-surgeries' },
      { text: 'Cancer Detection', href: '/services/cancer-detection' },
      { text: 'Family Planning Counselling', href: '/services/family-planning' },
    ],
  },
  {
    label: 'Clinic',
    links: [
      { text: 'About', href: '/about' },
      { text: 'First Visit', href: '/first-visit' },
      { text: 'Programs', href: '/programs' },
      { text: 'Payment', href: '/payment' },
      { text: 'Reviews', href: '/reviews' },
      { text: 'Location', href: '/location' },
    ],
  },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isLight = pathname === '/'
  const [banner, setBanner] = useState(true)
  const [open, setOpen] = useState(false)
  const bannerRef = useRef(null)
  const menuRef = useRef(null)
  const bgRef = useRef(null)
  const overlayRef = useRef(null)
  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const labelRef = useRef(null)
  const timeline = useRef(null)

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return undefined
    const items = menu.querySelectorAll('.navbar_menu-label, .navbar_menu-link, .navbar_menu-button-wrapper')

    const tl = gsap.timeline({ paused: true })
    tl.set(menu, { visibility: 'visible' }, 0)
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' }, 0)
      .to(menu, { opacity: 1, duration: 0.01 }, 0)
      .fromTo(
        bgRef.current,
        { scaleX: 0.12, scaleY: 0.03 },
        { scaleX: 1, scaleY: 1, duration: 0.75, ease: 'expo.out' },
        0
      )
      .fromTo(
        items,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.045, ease: 'power3.out' },
        0.18
      )
      .to(topLineRef.current, { y: 4.5, rotate: 45, duration: 0.4, ease: 'power2.inOut' }, 0)
      .to(bottomLineRef.current, { y: -4, rotate: -45, duration: 0.4, ease: 'power2.inOut' }, 0)
      .to(labelRef.current, { y: -26, duration: 0.4, ease: 'power2.inOut' }, 0)

    timeline.current = tl

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (!timeline.current) return
    if (open) {
      document.documentElement.classList.add('menu-open')
      timeline.current.play()
    } else {
      document.documentElement.classList.remove('menu-open')
      timeline.current.reverse()
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const dismissBanner = () => {
    const el = bannerRef.current
    if (!el) {
      setBanner(false)
      return
    }
    gsap.to(el, {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.45,
      ease: 'power2.inOut',
      onComplete: () => setBanner(false),
    })
  }

  return (
    <div data-navbar="" className={`navbar_component${isLight ? ' is-light' : ''}`}>
      {banner && (
        <div data-banner="" className="navbar_banner" ref={bannerRef}>
          <div className="navbar_banner-content">
            <p className="navbar_banner-text">
              <svg
                aria-hidden="true"
                className="navbar_banner-calendar"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3.5" y="5.5" width="17" height="15" rx="2.4" />
                <path d="M8 3.5v4M16 3.5v4M3.5 10.5h17" />
              </svg>
              <span>
                Evening OPD Mon–Sat 6:30–8:30 pm
                <span className="navbar_banner-note"> · Walk-ins welcome</span>
              </span>
            </p>
            <Link to="/book" className="navbar_banner-link">
              Book an Appointment →
            </Link>
          </div>
          <div
            data-banner-close=""
            aria-label="Close announcement"
            role="button"
            tabIndex={0}
            className="navbar_banner-close"
            onClick={dismissBanner}
            onKeyDown={(e) => e.key === 'Enter' && dismissBanner()}
          >
            <img
              src="/assets/template/icon-close.webp"
              loading="lazy"
              width="18"
              height="18"
              alt="Close icon"
              className="navbar_banner-icon"
            />
          </div>
        </div>
      )}
      <div className="navbar_bar">
        <div className="padding-global">
          <div className="container-large">
            <div className="navbar_container">
              <div
                data-menu-open=""
                aria-label={open ? 'Close menu' : 'Open menu'}
                role="button"
                tabIndex={0}
                aria-expanded={open}
                className="navbar_menu-button"
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e) => e.key === 'Enter' && setOpen((v) => !v)}
              >
                <div className="navbar_menu-burger">
                  <div className="navbar_menu-ring" />
                  <div className="navbar_menu-line is-top" ref={topLineRef} />
                  <div className="navbar_menu-line is-bottom" ref={bottomLineRef} />
                </div>
                <div className="navbar_menu-button-label">
                  <div ref={labelRef}>
                    <div className="navbar_menu-label-text">Menu</div>
                    <div className="navbar_menu-label-text" aria-hidden="true">
                      Close
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/" aria-label="Dr Rashmi Saxena's Women's Clinic — home" className="navbar_logo-link w-inline-block">
                <img
                  src={isLight ? '/assets/clinic/logo.png' : '/assets/clinic/logo-white.png'}
                  width="1024"
                  height="341"
                  alt="Dr. Rashmi Saxena's Women's Clinic"
                  className="navbar_logo-image"
                />
              </Link>

              <div className="navbar_actions">
                <a href={clinic.phoneHref} className="navbar_contact">
                  <svg
                    aria-hidden="true"
                    className="navbar_contact-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.8 3.2 9.5 4l1.4 3.4-2 1.5a12.1 12.1 0 0 0 5.2 5.2l1.5-2L19 13.5l.8 2.7c.2.8-.2 1.6-.9 2-1.1.6-2.4 1-3.7 1C8.6 19.2 3 13.6 3 6.8c0-1.3.4-2.6 1-3.7.4-.7 1.2-1.1 2-.9Z" />
                    <path d="M15.4 3.6a6.4 6.4 0 0 1 5 5M15.9 7a3.2 3.2 0 0 1 2.1 2.1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="navbar_contact-text">
                    <span className="navbar_contact-label">Click to Call</span>
                    <span className="navbar_contact-number">{clinic.phoneDisplay}</span>
                  </span>
                </a>
                <Link to="/book" className="navbar_button w-inline-block">
                  <div className="navbar_button-text">Book an Appointment</div>
                </Link>
              </div>

              <div data-menu="" aria-label="Site menu" className="navbar_menu" ref={menuRef}>
                <div className="navbar_menu-bg" ref={bgRef} />
                {menuColumns.map((column) => (
                  <div className="navbar_menu-group" key={column.label}>
                    <div className="navbar_menu-label">{column.label}</div>
                    <div className="navbar_menu-list">
                      {column.links.map((link) => (
                        <Link
                          key={link.text}
                          to={link.href}
                          className="navbar_menu-link"
                          onClick={closeMenu}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="navbar_menu-button-wrapper">
                  <Link to="/book" className="navbar_button w-inline-block" onClick={closeMenu}>
                    <div className="navbar_button-text">Book an Appointment</div>
                  </Link>
                  <p className="navbar_menu-contact">
                    {clinic.addressShort} · Mon–Sat, 6:30–8:30 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-menu-close="" className="navbar_menu-overlay" ref={overlayRef} onClick={closeMenu} />
    </div>
  )
}
