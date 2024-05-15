'use client'

import { Div } from '@guyromellemagayano/react-components/server'

import {
  isArrayType,
  isEmpty,
  isStringType
} from '@guyromellemagayano/react-utils'

import { ContentLayout } from '@guyromellemagayano/portfolio/components/layouts/content'
import { SkillsList } from '@guyromellemagayano/portfolio/components/lists/skills'
import { SkillsCardsList } from '@guyromellemagayano/portfolio/components/lists/skills-cards'
import {
  SkillsData,
  SkillsItemData,
  SkillsPageData
} from '@guyromellemagayano/portfolio/types'

export type SkillsAppProps = SkillsPageData

/**
 * Renders the skills page component.
 * @param props - The props of the skills page.
 * @returns The rendered skills page component.
 */
const SkillsApp = (props: SkillsAppProps) => {
  const { hero, skills } = props

  const heading = hero?.heading || undefined,
    description = hero?.description || undefined

  return (
    !isEmpty(heading) &&
    isStringType(heading) &&
    !isEmpty(description) &&
    (isStringType(description) || isArrayType(description)) && (
      <ContentLayout.Simple title={heading} intro={description}>
        {!isEmpty(skills) && isArrayType(skills) && (
          <Div className="grid gap-y-12">
            {skills?.map(({ name, items }: SkillsData, index: number) => (
              <SkillsList key={index} title={name}>
                {!isEmpty(items) &&
                  isArrayType(items) &&
                  items?.map((rest: SkillsItemData, index: number) => (
                    <SkillsCardsList key={index} {...rest} />
                  ))}
              </SkillsList>
            ))}
          </Div>
        )}
      </ContentLayout.Simple>
    )
  )
}

SkillsApp.displayName = 'SkillsApp'

export default SkillsApp
