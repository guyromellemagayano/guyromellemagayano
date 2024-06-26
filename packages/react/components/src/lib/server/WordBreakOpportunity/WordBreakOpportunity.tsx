import { HTMLAttributes, forwardRef } from 'react'

export type WordBreakOpportunityRef = HTMLElement
export type WordBreakOpportunityProps = HTMLAttributes<WordBreakOpportunityRef>

/**
 * Render the word break opportunity component.
 * @param {WordBreakOpportunityProps} props - The word break opportunity component properties.
 * @param {WordBreakOpportunityRef} ref - The word break opportunity component reference.
 * @returns The rendered word break opportunity component.
 */
const WordBreakOpportunity = forwardRef<
  WordBreakOpportunityRef,
  WordBreakOpportunityProps
>((props, ref) => {
  const { children, ...rest } = props

  return (
    <wbr ref={ref} {...rest}>
      {children}
    </wbr>
  )
})

WordBreakOpportunity.displayName = 'WordBreakOpportunity'

export default WordBreakOpportunity
