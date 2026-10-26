import { useCallback } from 'react'
import { useToast } from '@/components/ui/toastContext'
import { profile } from '@/data/profile'
import { useCopyToClipboard } from './useCopyToClipboard'

/** Copies Shreya's email and confirms with a toast. Falls back to showing the address. */
export function useCopyEmail() {
  const copy = useCopyToClipboard()
  const { show } = useToast()

  return useCallback(async () => {
    const copied = await copy(profile.email)
    show(copied ? 'Email copied' : profile.email)
  }, [copy, show])
}
