import { TableHTMLAttributes, forwardRef } from 'react'

export type CaptionRef = HTMLTableCaptionElement
export type CaptionProps = TableHTMLAttributes<CaptionRef>

/**
 * Render the caption component.
 * @param {CaptionProps} props - The caption component properties.
 * @param {CaptionRef} ref - The caption component reference.
 * @returns The rendered caption component.
 */
const Caption = forwardRef<CaptionRef, CaptionProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <caption ref={ref} {...rest}>
      {children}
    </caption>
  )
})

Caption.displayName = 'Caption'

export default Caption
