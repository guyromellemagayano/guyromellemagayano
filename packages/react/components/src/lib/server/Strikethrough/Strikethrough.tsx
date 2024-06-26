import { HTMLAttributes, forwardRef } from 'react'

export type StrikethroughRef = HTMLElement
export type StrikethroughProps = HTMLAttributes<StrikethroughRef>

/**
 * Render the strikethrough component.
 * @param {StrikethroughProps} props - The strikethrough component properties.
 * @param {StrikethroughRef} ref - The strikethrough component reference.
 * @returns The rendered strikethrough component.
 */
const Strikethrough = forwardRef<StrikethroughRef, StrikethroughProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <s ref={ref} {...rest}>
        {children}
      </s>
    )
  }
)

Strikethrough.displayName = 'Strikethrough'

export default Strikethrough
