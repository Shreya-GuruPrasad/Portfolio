import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { isExternal } from '@/lib/utils'
import { NewTabHint } from './NewTabHint'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './buttonStyles'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string }

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined }

export type ButtonProps = LinkProps | NativeButtonProps

/** A pill button. Renders an <a> when given an href, otherwise a <button>. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, children, href, ...rest } = props
    const external = isExternal(href)
    return (
      <a
        href={href}
        className={buttonClasses(variant, size, className)}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
        {external && <NewTabHint />}
      </a>
    )
  }

  const { variant, size, className, children, type = 'button', ...rest } = props
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}
