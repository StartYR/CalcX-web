import { useRef } from 'react'
import { gsap, useGSAP } from '../../animations/gsap'
import { useContent } from '../../i18n/LocaleContext'

const APP_GALLERY_URL = 'https://appgallery.huawei.com/app/detail?id=com.startyi.calcx'
const GITHUB_URL = 'https://github.com/StartYR/CalculatorX'

export default function HeroSection() {
  const root = useRef<HTMLElement>(null)
  const { hero, proof } = useContent()

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .from('.hero__eyebrow', { y: 18, autoAlpha: 0, duration: 0.55 })
        .from('.hero-title__line', { yPercent: 115, rotate: 3, duration: 0.9, stagger: 0.09 }, '-=0.25')
        .from('.hero__description, .hero__actions', { y: 28, autoAlpha: 0, duration: 0.7, stagger: 0.1 }, '-=0.45')
        .from('.hero-product-frame', { y: 100, rotate: 5, scale: 0.86, autoAlpha: 0, duration: 1.1 }, '-=0.9')
        .from('.hero-float', { scale: 0.7, autoAlpha: 0, duration: 0.55, stagger: 0.12 }, '-=0.45')
        .from('.hero-proof__item', { y: 22, autoAlpha: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')

      gsap.to('.hero-visual__orbit--one', { rotate: 360, duration: 34, repeat: -1, ease: 'none' })
      gsap.to('.hero-visual__orbit--two', { rotate: -360, duration: 46, repeat: -1, ease: 'none' })

      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
        .to('.hero__copy', { yPercent: -20, autoAlpha: 0.15, ease: 'none' }, 0)
        .to('.hero-product-anchor', { rotate: -5, scale: 0.92, ease: 'none' }, 0)
        .to('.hero__mesh', { scale: 1.25, rotate: 12, ease: 'none' }, 0)
    })

    return () => media.revert()
  }, { scope: root })

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero-equations" aria-hidden="true">
        <span>∫₀∞ e<sup>−x²</sup> dx</span><span>A⁻¹b</span><span>lim x→0</span><span>Σ n²</span>
      </div>
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow"><span className="eyebrow-dot" />{hero.eyebrow}</p>
          <h1 id="hero-title">
            <span className="hero-title__mask"><span className="hero-title__line">{hero.titleBefore}</span></span>
            <span className="hero-title__mask"><span className="hero-title__line hero-title__line--accent">{hero.titleAccent}</span></span>
            {hero.titleAfter && <span className="hero-title__mask"><span className="hero-title__line">{hero.titleAfter}</span></span>}
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={APP_GALLERY_URL} target="_blank" rel="noreferrer">
              {hero.primaryAction}<span aria-hidden="true">↗</span>
            </a>
            <a className="button button--ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.4 9.4 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
              {hero.secondaryAction}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__orbit hero-visual__orbit--one" aria-hidden="true" />
          <div className="hero-visual__orbit hero-visual__orbit--two" aria-hidden="true" />
          <div className="hero-product-anchor">
            <div className="hero-product-frame">
              <div className="hero-phone">
                <img className="theme-image theme-image--light" src="/images/product/scientific.webp" alt={hero.visualAlt} />
                <img className="theme-image theme-image--dark" src="/images/product/scientific-dark.webp" alt={hero.visualAlt} />
              </div>
            </div>
          </div>
          <div className="hero-float hero-float--result">
            <span>{hero.visualBadge}</span>
            <strong><img src="/images/svg/sqrt8.svg" alt="√8 = 2√2" /></strong>
          </div>
          <div className="hero-float hero-float--graph" aria-hidden="true">
            <span>{hero.floatingFormula}</span>
            <svg viewBox="0 0 220 72"><path d="M0 37c26 0 31-24 54-24 26 0 29 46 57 46 28 0 31-45 58-45 21 0 27 23 51 23" /></svg>
          </div>
        </div>
      </div>
      <div className="shell hero-proof" aria-label="Product facts">
        {proof.map((item, index) => (
          <div className="hero-proof__item" key={item.label}><span>0{index + 1}</span><strong>{item.value}</strong><small>{item.label}</small></div>
        ))}
      </div>
      <div className="hero-scroll" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  )
}
