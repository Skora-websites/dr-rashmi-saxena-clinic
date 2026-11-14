const galleryImages = [
  { src: '/assets/clinic/gallery/cards/gallery-01.jpg', alt: 'A mother with her newborn at the clinic' },
  { src: '/assets/clinic/gallery/cards/gallery-02.jpg', alt: 'A family with their newborn and Dr Rashmi Saxena' },
  { src: '/assets/clinic/gallery/cards/gallery-03.jpg', alt: 'Parents holding their newborn with Dr Rashmi Saxena' },
  { src: '/assets/clinic/gallery/cards/gallery-04.jpg', alt: 'A newborn resting with his mother' },
  { src: '/assets/clinic/gallery/cards/gallery-05.jpg', alt: 'A mother holding her newborn baby' },
  { src: '/assets/clinic/gallery/cards/gallery-06.jpg', alt: 'A mother resting with her newborn' },
  { src: '/assets/clinic/gallery/cards/gallery-07.jpg', alt: 'A mother with her newborn after delivery' },
  { src: '/assets/clinic/gallery/cards/gallery-08.jpg', alt: 'A mother with her newborn in the delivery room' },
]

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
                  width="640"
                  height="800"
                  key={`${copy}-${image.src}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
