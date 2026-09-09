import { useRef } from 'react'
import { gsap, useGSAP } from '../../animations/gsap'
import { useContent } from '../../i18n/LocaleContext'

const GITHUB_URL = 'https://github.com/StartYR/CalculatorX'
const ARCHITECTURE_URL = 'https://github.com/StartYR/CalculatorX/blob/main/docs/ARCHITECTURE.md'

export default function OpenSourceSection() {
  const root = useRef<HTMLElement>(null)
  const { openSource } = useContent()

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.open-source__card', {
        clipPath: 'inset(12% 8% 12% 8% round 60px)',
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
      })
      gsap.from('.open-source__copy > *', {
        y: 46,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.open-source__copy', start: 'top 72%', once: true },
      })
      gsap.to('.open-source__ring', { rotate: 360, duration: 28, repeat: -1, ease: 'none' })
    })
    return () => media.revert()
  }, { scope: root })

  return (
    <section ref={root} className="open-source">
      <div className="shell open-source__card">
        <div className="open-source__mark" aria-hidden="true">
          <div className="open-source__ring"><span>OPEN SOURCE · VERIFIABLE MATH · GPLV3 · </span></div>
          <strong>&lt;/&gt;</strong>
          <svg viewBox="0 0 180 180"><circle cx="90" cy="90" r="70" /><path d="m42 96 27 27 68-68" /></svg>
        </div>
        <div className="open-source__copy">
          <p className="eyebrow">{openSource.eyebrow}</p>
          <h2>{openSource.title}</h2>
          <p>{openSource.description}</p>
          <div className="badge-row">
            {openSource.badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
          <div className="open-source__actions">
            <a className="button button--light" href={GITHUB_URL} target="_blank" rel="noreferrer">{openSource.primaryAction}<span>↗</span></a>
            <a className="text-link text-link--light" href={ARCHITECTURE_URL} target="_blank" rel="noreferrer">{openSource.secondaryAction}<span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
