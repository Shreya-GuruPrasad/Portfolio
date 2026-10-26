import { useCallback } from 'react'

/** Returns a function that copies text to the clipboard and resolves to whether it worked. */
export function useCopyToClipboard() {
  return useCallback(async (text: string): Promise<boolean> => {
    try {
      if (!navigator.clipboard?.writeText) return false
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }, [])
}
