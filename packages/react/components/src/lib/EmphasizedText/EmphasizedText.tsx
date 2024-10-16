import React from 'react'

export type TEmphasizedTextRef = HTMLElement
export type TEmphasizedTextProps = React.HTMLAttributes<TEmphasizedTextRef>

/**
 * Render the emphasized text component.
 * @param {TEmphasizedTextProps} props - The emphasized text component properties
 * @param {TEmphasizedTextRef} ref - The emphasized text component reference
 * @returns The rendered emphasized text component
 */
const EmphasizedText = React.forwardRef<
  TEmphasizedTextRef,
  TEmphasizedTextProps
>(({ children, ...rest }, ref) => {
  return (
    <em ref={ref} {...rest}>
      {children}
    </em>
  )
})

EmphasizedText.displayName = 'EmphasizedText'

export default EmphasizedText
