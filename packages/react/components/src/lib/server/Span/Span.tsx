import { HTMLAttributes, forwardRef } from 'react'

export type SpanRef = HTMLSpanElement
export type SpanProps = HTMLAttributes<SpanRef>

/**
 * Render the span component.
 * @param {SpanProps} props - The span component properties.
 * @param {SpanRef} ref - The span component reference.
 * @returns The rendered span component.
 */
const Span = forwardRef<SpanRef, SpanProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <span ref={ref} {...rest}>
      {children}
    </span>
  )
})

Span.displayName = 'Span'

export default Span
