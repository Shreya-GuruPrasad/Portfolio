import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Toast } from './Toast'
import { ToastContext } from './toastContext'

const DURATION_MS = 2400

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const show = useCallback((next: string) => {
    window.clearTimeout(timer.current)
    setMessage(next)
    timer.current = window.setTimeout(() => setMessage(null), DURATION_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const api = useMemo(() => ({ show }), [show])

  return (
    <ToastContext value={api}>
      {children}
      <Toast message={message} />
    </ToastContext>
  )
}
