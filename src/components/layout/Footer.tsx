import { useContent, useLocale } from '../../i18n/LocaleContext'

export default function Footer() {
  const { footer } = useContent()
  const { locale } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <a className="brand brand--footer" href={locale === 'en' ? '/en/' : '/'}>
            <img src="/images/app-icon.webp" alt="" width="40" height="40" />
            <span>Calculator<span>X</span></span>
          </a>
          <p>{footer.statement}</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="shell site-footer__bottom">
        <span>{footer.copyrightLabel} © 2026{year > 2026 ? `–${year}` : ''} {footer.copyright}</span>
        <span>GPLv3 · HarmonyOS NEXT</span>
      </div>
    </footer>
  )
}
