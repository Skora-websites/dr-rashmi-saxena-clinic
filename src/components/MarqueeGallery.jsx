const galleryImages = [
  { src: '/assets/clinic/gallery/gallery-01.jpg', alt: 'A mother with her newborn at the clinic' },
  { src: '/assets/clinic/gallery/gallery-02.jpg', alt: 'A family with their newborn and Dr Rashmi Saxena' },
  { src: '/assets/clinic/gallery/gallery-03.jpg', alt: 'Parents holding their newborn with Dr Rashmi Saxena' },
  { src: '/assets/clinic/gallery/gallery-04.jpg', alt: 'A newborn resting with his mother' },
  { src: '/assets/clinic/gallery/gallery-05.jpg', alt: 'A mother holding her newborn baby' },
  { src: '/assets/clinic/gallery/gallery-06.jpg', alt: 'A mother resting with her newborn' },
  { src: '/assets/clinic/gallery/gallery-07.jpg', alt: 'A mother with her newborn after delivery' },
  { src: '/assets/clinic/gallery/gallery-08.jpg', alt: 'A mother with her newborn in the delivery room' },
]

const mobileGallery = [galleryImages[1], galleryImages[2], galleryImages[4], galleryImages[7]]

export default function MarqueeGallery() {
  return (
    <section className="section_marquee" aria-label="Gallery of clinic photos">
      <div className="marquee-strip">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-set" aria-hidden={copy === 1} key={copy}>
              {galleryImages.map((image) => (
                <img
                  className="marquee-card"
                  src={image.src}
                  alt={copy === 0 ? image.alt : ''}
                  loading="lazy"
                  width="240"
                  height="320"
                  key={`${copy}-${image.src}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-grid">
        {mobileGallery.map((image) => (
          <img
            className="marquee-grid-card"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="480"
            height="600"
            key={image.src}
          />
        ))}
      </div>
    </section>
  )
}
