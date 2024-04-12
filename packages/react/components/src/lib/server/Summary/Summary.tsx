import { HTMLAttributes, forwardRef } from 'react'

export type SummaryRef = HTMLElement
export type SummaryProps = HTMLAttributes<SummaryRef>

/**
 * Render the summary component.
 * @param children - The children of the summary.
 * @param rest - The rest of the props of the summary.
 * @returns The rendered summary component.
 */
export const Summary = forwardRef<SummaryRef, SummaryProps>(
  ({ children, ...rest }, ref) => {
    return (
      <summary ref={ref} {...rest}>
        {children}
      </summary>
    )
  }
)

Summary.displayName = 'Summary'

export default Summary