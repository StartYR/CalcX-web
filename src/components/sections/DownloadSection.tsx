import { useRef } from 'react'
import { gsap, useGSAP } from '../../animations/gsap'
import { useContent } from '../../i18n/LocaleContext'

const APP_GALLERY_URL = 'https://appgallery.huawei.com/app/detail?id=com.startyi.calcx'
const RELEASES_URL = 'https://github.com/StartYR/CalculatorX/releases'

export default function DownloadSection() {
  const root = useRef<HTMLElement>(null)
  const { download } = useContent()

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.download__inner > *', {
        y: 60,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%', once: true },
      })
      gsap.to('.download__orbit', { rotate: 360, duration: 34, repeat: -1, ease: 'none' })
    })
    return () => media.revert()
  }, { scope: root })

  return (
    <section ref={root} className="download" id="download">
      <div className="download__orbit" aria-hidden="true"><span>√</span><span>∫</span><span>π</span><span>Σ</span></div>
      <div className="shell download__inner">
        <p className="eyebrow"><span className="eyebrow-dot" />{download.eyebrow}</p>
        <h2>{download.title}</h2>
        <p className="download__description">{download.description}</p>
        <div className="download__actions">
          <a className="store-button" href={APP_GALLERY_URL} target="_blank" rel="noreferrer">
            <img src="/images/appgallery-icon.webp" alt="" width="46" height="46" />
            <span><small>EXPLORE IT ON</small><strong>{download.appGallery}</strong></span>
          </a>
          <a className="button button--dark button--large" href={RELEASES_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.4 9.4 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
            {download.github}
          </a>
        </div>
        <p className="download__footnote">{download.footnote}</p>
        <span className="download__version">CALCULATORX / V1.6.2 / HARMONYOS NEXT</span>
      </div>
    </section>
  )
}
