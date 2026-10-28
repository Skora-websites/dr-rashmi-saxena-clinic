export default function Eyebrow({ children, dark = false }) {
  const variant = dark ? 'w-variant-3f6e64d0-9868-3b3a-62f0-53b2d2f2bf07' : ''
  return (
    <div data-wf--eyebrow--variant={dark ? 'dark' : 'light'} className={`eyebrow_component ${variant}`}>
      <div className="eyebrow_text">{children}</div>
      <div className={`eyebrow_corner ${variant}`} />
      <div className={`eyebrow_corner ${variant} is-bottom`} />
    </div>
  )
}
