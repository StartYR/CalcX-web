import { useRef } from 'react'
import { gsap, useGSAP } from '../../animations/gsap'
import { useContent } from '../../i18n/LocaleContext'
import { PRODUCT_VERSION } from '../../data/version'

const APP_GALLERY_URL = 'https://appgallery.huawei.com/app/detail?id=com.startyi.calcx'
const RELEASES_URL = 'https://github.com/StartYR/CalculatorX/releases'
const ATOMGIT_URL = 'https://atomgit.com/StartYi/CalculatorX'
const GITEE_URL = 'https://gitee.com/StartYi/CalculatorX'

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
          <a
            href={APP_GALLERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-adaptive"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 17px 12px 12px',
              borderRadius: '20px',
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/appgallery-icon.png"
              alt="AppGallery Logo"
              style={{
                width: '36px',
                height: '36px',
                marginRight: '10px',
                objectFit: 'contain',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '1', letterSpacing: '0.5px' }}>EXPLORE IT ON</span>
              <span style={{ fontSize: '22px', fontWeight: '900', lineHeight: '1.2' }}>AppGallery</span>
            </div>
          </a>

          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 28px 12px 20px',
              border: '2px solid #24292e',
              borderRadius: '20px',
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: '#24292e',
            }}
          >
            <svg height="30" width="30" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '16px' }}>
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '1', color: '#b3b3b3', letterSpacing: '0.5px', marginBottom: '5px' }}>GitHub</span>
              <span style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1' }}>Releases</span>
            </div>
          </a>

          <a
            href={ATOMGIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-adaptive-red"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px 12px 14px',
              borderRadius: '20px',
              textDecoration: 'none',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ marginRight: '10px', flexShrink: 0 }}
            >
              <path d="m15.585 4.586.486-.274q.032.17.06.303c.032.158.06.289.072.418.103 1.118.665 1.941 1.462 2.127 1.165.27 2.264-.177 2.856-1.164.711-1.184.403-2.634-.808-3.507C16.346.061 12.647-.609 8.663.56.072 3.095-2.867 13.65 3.23 20.122c2.608 2.769 5.92 3.964 9.68 3.873 4.817-.113 8.285-2.513 10.5-6.674 1.57-2.952-.137-6.178-3.405-6.849a21 21 0 0 0-5.675-.362 4.8 4.8 0 0 0-1.805.548c-.625.325-.805.998-.735 1.666.065.608.531.972 1.086 1.064 1.118.175 2.25.277 3.378.37.327.027.657.03.986.033.473.005.944.01 1.405.086 1.314.217 1.766 1.284 1.09 2.425a4.7 4.7 0 0 1-.577.766 6.55 6.55 0 0 1-3.318 1.964c-2.333.57-4.669.603-6.99-.13-2.645-.835-4.221-2.777-4.277-5.392A9.1 9.1 0 0 1 5.76 8.907c.36-.654.558-1.327.503-2.067a26 26 0 0 1-.05-.972l-.025-.565q.401.084.792.212c1.011.406 2.007.592 3.102.294a5.6 5.6 0 0 1 1.902-.122 4.76 4.76 0 0 0 2.921-.714c.218-.128.439-.251.681-.387" />
            </svg>
            <span style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1' }}>AtomGit</span>
          </a>

          <a
            href={GITEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-adaptive-red"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '164px',
              padding: '12px 16px',
              borderRadius: '20px',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z" />
            </svg>
            <span style={{ flex: 1, textAlign: 'center', fontSize: '20px', fontWeight: '900', lineHeight: '1' }}>Gitee</span>
          </a>
        </div>
        <p className="download__footnote">{download.footnote}</p>
        <span className="download__version">CALCULATORX / V{PRODUCT_VERSION} / HARMONYOS NEXT</span>
      </div>
    </section>
  )
}
