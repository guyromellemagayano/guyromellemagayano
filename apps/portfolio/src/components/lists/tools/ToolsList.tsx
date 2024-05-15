import { forwardRef } from 'react'

import { Ul } from '@guyromellemagayano/react-components/server'

import { isEmpty } from '@guyromellemagayano/react-utils'

import {
  SectionLayout,
  type SectionLayoutProps,
  type SectionLayoutRef
} from '@guyromellemagayano/portfolio/components/layouts/section'

export type ToolsListRef = SectionLayoutRef
export type ToolsListProps = SectionLayoutProps

/**
 * Renders the tools list component.
 * @param children - The children of the tools list.
 * @param rest - The rest of the props of the tools list.
 * @returns The rendered tools list component.
 */
const ToolsList = forwardRef<ToolsListRef, ToolsListProps>(
  ({ children, ...rest }, ref) => {
    return (
      !isEmpty(children) && (
        <SectionLayout ref={ref} {...rest}>
          <Ul className="space-y-16">{children}</Ul>
        </SectionLayout>
      )
    )
  }
)

ToolsList.displayName = 'ToolsList'

export default ToolsList
