import { HTMLAttributes, forwardRef } from 'react'

export type QuoteRef = HTMLQuoteElement
export type QuoteProps = HTMLAttributes<QuoteRef>

/**
 * Render the quote component.
 * @param {QuoteProps} props - The quote component properties.
 * @param {QuoteRef} ref - The quote component reference.
 * @returns The rendered quote component.
 */
const Quote = forwardRef<QuoteRef, QuoteProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <q ref={ref} {...rest}>
      {children}
    </q>
  )
})

Quote.displayName = 'Quote'

export default Quote
