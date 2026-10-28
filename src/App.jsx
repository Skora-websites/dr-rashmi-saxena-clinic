import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import FirstVisit from './pages/FirstVisit'
import Programs from './pages/Programs'
import PaymentPage from './pages/PaymentPage'
import ReviewsPage from './pages/ReviewsPage'
import LocationPage from './pages/LocationPage'
import Book from './pages/Book'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="first-visit" element={<FirstVisit />} />
          <Route path="programs" element={<Programs />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
