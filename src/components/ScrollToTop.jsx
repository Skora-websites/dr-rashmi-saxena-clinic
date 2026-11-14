import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Global scroll-behavior is smooth and the browser ignores scrollTo during
    // the route commit, which left new pages at the old offset. Jump on the
    // frame after the new route paints, with smooth scrolling temporarily off.
    const html = document.documentElement
    const previous = html.style.scrollBehavior

    const frame = requestAnimationFrame(() => {
      html.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      html.style.scrollBehavior = previous
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
