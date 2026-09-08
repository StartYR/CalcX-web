import { useTheme } from '../../hooks/useTheme'
import { useContent } from '../../i18n/LocaleContext'

export default function ThemeToggle() {
  const { preference, cycle } = useTheme()
  const { ui } = useContent()

  const label =
    preference === 'system' ? ui.themeSystem : preference === 'light' ? ui.themeLight : ui.themeDark

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      onClick={cycle}
      aria-label={label}
      title={label}
    >
      {preference === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      ) : preference === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="13" rx="2" /><path d="M9 21h6m-3-3.5V21" /></svg>
      )}
    </button>
  )
}
