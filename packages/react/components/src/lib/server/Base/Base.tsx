import { BaseHTMLAttributes, forwardRef } from 'react'

export type BaseRef = HTMLBaseElement
export type BaseProps = BaseHTMLAttributes<BaseRef>

/**
 * Render the base component.
 * @param {BaseProps} props - The base component properties.
 * @param {BaseRef} ref - The base component reference.
 * @returns The rendered base component.
 */
const Base = forwardRef<BaseRef, BaseProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <base ref={ref} {...rest}>
      {children}
    </base>
  )
})

Base.displayName = 'Base'

export default Base
