import React from 'react'

export type TDefinitionListRef = HTMLDListElement
export type TDefinitionListProps = React.HTMLAttributes<TDefinitionListRef>

/**
 * Render the definition list component.
 * @param {TDefinitionListProps} props - The definition list component properties
 * @param {TDefinitionListRef} ref - The definition list component reference
 * @returns The rendered definition list component
 */
const DefinitionList = React.forwardRef<
  TDefinitionListRef,
  TDefinitionListProps
>(({ children, ...rest }, ref) => {
  return (
    <dl ref={ref} {...rest}>
      {children}
    </dl>
  )
})

DefinitionList.displayName = 'DefinitionList'

export default DefinitionList
