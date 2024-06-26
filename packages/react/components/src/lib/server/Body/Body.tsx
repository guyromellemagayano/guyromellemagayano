import { HTMLAttributes, forwardRef } from 'react'

export type BodyRef = HTMLBodyElement
export type BodyProps = HTMLAttributes<BodyRef>

/**
 * Render the body component.
 * @param {BodyProps} props - The body component properties.
 * @param {BodyRef} ref - The body component reference.
 * @returns The rendered body component.
 */
const Body = forwardRef<BodyRef, BodyProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <body ref={ref} {...rest}>
      {children}
    </body>
  )
})

Body.displayName = 'Body'

export default Body
