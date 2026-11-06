const galleryImages = [
  { src: '/assets/clinic/gallery/gallery-01.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-02.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-03.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-04.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-05.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-06.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-07.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
  { src: '/assets/clinic/gallery/gallery-08.jpg', alt: 'Inside Dr Rashmi Saxena’s clinic' },
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
                  width="300"
                  height="210"
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
