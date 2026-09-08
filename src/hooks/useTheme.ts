import { useCallback, useEffect, useState } from 'react'

type ResolvedTheme = 'light' | 'dark'
type ThemePreference = ResolvedTheme | 'system'
const STORAGE_KEY = 'calcx-theme'

function systemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function storedPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

export function useTheme() {
  // 偏好：用户显式选择（写入 localStorage），未选择时跟随系统
  const [preference, setPreference] = useState<ThemePreference>(storedPreference)
  // 实际生效主题：偏好为 system 时解析自系统设置
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    preference === 'system' ? systemTheme() : preference
  )

  // 仅在「跟随系统」时监听系统变化；手动偏好下解除监听，
  // 重新回到 system 时立即按当前系统值同步
  useEffect(() => {
    if (preference === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      const syncWithSystem = (event: MediaQueryListEvent) =>
        setResolved(event.matches ? 'dark' : 'light')
      setResolved(systemTheme())
      media.addEventListener('change', syncWithSystem)
      return () => media.removeEventListener('change', syncWithSystem)
    }
    setResolved(preference)
  }, [preference])

  useEffect(() => {
    document.documentElement.dataset.theme = resolved
  }, [resolved])

  // 与 Nextra(CalcX-docs)/startyi 一致的三态循环：跟随系统 → 浅色 → 深色 → 跟随系统
  const cycle = useCallback(() => {
    const next: ThemePreference =
      preference === 'system' ? 'light' : preference === 'light' ? 'dark' : 'system'
    localStorage.setItem(STORAGE_KEY, next)
    setPreference(next)
  }, [preference])

  return { theme: resolved, preference, cycle }
}
