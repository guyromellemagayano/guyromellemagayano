'use client'

import { Div } from '@guyromellemagayano/react-components/server'

import {
  isArrayType,
  isEmpty,
  isStringType
} from '@guyromellemagayano/react-utils'

import { ContentLayout } from '@guyromellemagayano/portfolio/components/layouts/content'
import { ToolsList } from '@guyromellemagayano/portfolio/components/lists/tools'
import { ToolsCardsList } from '@guyromellemagayano/portfolio/components/lists/tools-cards'
import {
  ToolsData,
  ToolsItemsData,
  UsesPageData
} from '@guyromellemagayano/portfolio/types'

export type UsesAppProps = UsesPageData

/**
 * Renders the uses page.
 * @param id The uses page id.
 * @param data The uses page data.
 * @param rest The uses page props.
 * @returns The uses page component.
 */
const UsesApp = (props: UsesAppProps) => {
  const { hero, tools } = props

  const heading = hero?.heading || undefined,
    description = hero?.description || undefined

  return (
    !isEmpty(heading) &&
    isStringType(heading) &&
    !isEmpty(description) &&
    (isStringType(description) || isArrayType(description)) && (
      <ContentLayout.Simple title={heading} intro={description}>
        {!isEmpty(tools) && isArrayType(tools) && (
          <Div className="space-y-20">
            {tools?.map(({ name, items }: ToolsData, index: number) => (
              <ToolsList key={index} title={name}>
                {!isEmpty(items) &&
                  isArrayType(items) &&
                  items?.map(
                    ({ title, description }: ToolsItemsData, index2) => (
                      <ToolsCardsList
                        key={index2}
                        title={title}
                        description={description}
                      />
                    )
                  )}
              </ToolsList>
            ))}
          </Div>
        )}
      </ContentLayout.Simple>
    )
  )
}

UsesApp.displayName = 'UsesApp'

export default UsesApp
