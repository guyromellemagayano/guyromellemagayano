import { HTMLAttributes, forwardRef } from 'react'

export type WordBreakOpportunityRef = HTMLElement
export type WordBreakOpportunityProps = HTMLAttributes<WordBreakOpportunityRef>

/**
 * Render the word break opportunity component.
 * @param children - The children of the word break opportunity.
 * @param rest - The rest of the props of the word break opportunity.
 * @returns The rendered word break opportunity component.
 */
export const WordBreakOpportunity = forwardRef<
  WordBreakOpportunityRef,
  WordBreakOpportunityProps
>(({ children, ...rest }, ref) => {
  return (
    <wbr ref={ref} {...rest}>
      {children}
    </wbr>
  )
})

WordBreakOpportunity.displayName = 'WordBreakOpportunity'

export default WordBreakOpportunity