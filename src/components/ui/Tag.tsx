interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-pill border border-faint px-2.5 py-[3px] text-[0.76rem] text-soft">
      {children}
    </span>
  )
}
