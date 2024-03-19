import { HTMLAttributes, forwardRef } from 'react'

import { customId } from '@guy-romelle-magayano/react-utils/server'

export type SmallRef = HTMLElement
export type SmallProps = HTMLAttributes<SmallRef>

/**
 * Render the small component.
 * @param children - The children of the small.
 * @param rest - The rest of the props of the small.
 * @returns The rendered small component.
 */
const Small = forwardRef<SmallRef, SmallProps>(({ children, ...rest }, ref) => {
  return (
    <small ref={ref} {...rest} id={rest.id ?? customId}>
      {children}
    </small>
  )
})

Small.displayName = 'Small'

export default Small