import React from 'react'

export type THeadingGroupRef = HTMLElement
export type THeadingGroupProps = React.HTMLAttributes<THeadingGroupRef>

/**
 * Render the heading group component.
 * @param {THeadingGroupProps} props - The heading group component properties
 * @param {THeadingGroupRef} ref - The heading group component reference
 * @returns The rendered heading group component
 */
const HeadingGroup = React.forwardRef<THeadingGroupRef, THeadingGroupProps>(
  ({ children, ...rest }, ref) => {
    return (
      <hgroup ref={ref} {...rest}>
        {children}
      </hgroup>
    )
  }
)

HeadingGroup.displayName = 'HeadingGroup'

export default HeadingGroup
