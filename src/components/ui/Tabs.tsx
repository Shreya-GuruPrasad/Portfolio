import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  /** Accessible name for the tab list. */
  label: string
  items: TabItem[]
  /** Prefix for tab and panel ids, unique on the page. */
  idPrefix: string
}

/**
 * WAI-ARIA tabs with automatic activation. Vertical list on wide screens, horizontal scroller
 * on narrow ones; both arrow axes work so keyboard use matches whichever layout is shown.
 */
export function Tabs({ label, items, idPrefix }: TabsProps) {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  function select(index: number) {
    setSelected(index)
    const tab = tabRefs.current[index]
    tab?.focus()
    tab?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1
    const next: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowRight: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    const target = next[event.key]
    if (target === undefined) return
    event.preventDefault()
    select(target)
  }

  const tabId = (id: string) => `${idPrefix}-tab-${id}`
  const panelId = (id: string) => `${idPrefix}-panel-${id}`

  return (
    <div className="grid gap-7 tab:grid-cols-[240px_minmax(0,1fr)] tab:gap-12">
      <div
        role="tablist"
        aria-label={label}
        aria-orientation="vertical"
        className="flex overflow-x-auto border-b border-faint [scrollbar-width:none] tab:flex-col tab:overflow-visible tab:border-b-0 tab:border-l"
      >
        {items.map((item, index) => {
          const isSelected = index === selected
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              id={tabId(item.id)}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId(item.id)}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                'mb-[-1px] cursor-pointer border-b-2 px-4 py-3 text-left text-[0.95rem] whitespace-nowrap transition-colors hover:text-ink',
                'tab:mb-0 tab:-ml-px tab:border-b-0 tab:border-l-2 tab:px-[18px] tab:py-3.5 tab:hover:bg-raise',
                isSelected ? 'border-accent text-ink tab:bg-raise' : 'border-transparent text-soft',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={item.id}
            id={panelId(item.id)}
            role="tabpanel"
            aria-labelledby={tabId(item.id)}
            tabIndex={0}
            hidden={index !== selected}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}
