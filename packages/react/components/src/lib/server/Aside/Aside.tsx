import { HTMLAttributes, forwardRef } from 'react'

export type AsideRef = HTMLElement
export type AsideProps = HTMLAttributes<AsideRef>

/**
 * Render the aside component.
 * @param {AsideProps} props - The aside component properties.
 * @param {AsideRef} ref - The aside component reference.
 * @returns The rendered aside component.
 */
const Aside = forwardRef<AsideRef, AsideProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <aside ref={ref} {...rest}>
      {children}
    </aside>
  )
})

Aside.displayName = 'Aside'

export default Aside
