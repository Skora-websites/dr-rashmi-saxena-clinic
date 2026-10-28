import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { initPageAnimations } from '../lib/animations'

export default function Layout() {
  const rootRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    let cleanup = () => {}
    let cancelled = false
    // Split headings must measure wrapped lines with the real webfont metrics.
    const start = () => {
      if (!cancelled) cleanup = initPageAnimations(rootRef.current)
    }
    if (typeof document !== 'undefined' && document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(start)
    } else {
      start()
    }
    return () => {
      cancelled = true
      cleanup()
    }
  }, [pathname])

  return (
    <div id="top" ref={rootRef}>
      <ScrollToTop />
      <Navbar />
      <main className="main-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
