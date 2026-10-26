interface ToastProps {
  message: string | null
}

/**
 * A polite live region that is always mounted, so screen readers announce each new message.
 * It is only visible while there is a message.
 */
export function Toast({ message }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={
        message
          ? 'fixed bottom-[calc(24px+env(safe-area-inset-bottom,0px))] left-1/2 z-90 max-w-[calc(100%-32px)] -translate-x-1/2 rounded-pill bg-ink px-[18px] py-2.5 text-center text-[0.88rem] text-bg'
          : 'sr-only'
      }
    >
      {message}
    </div>
  )
}
