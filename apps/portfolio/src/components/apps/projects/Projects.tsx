'use client'

import {
  isArrayType,
  isEmpty,
  isStringType
} from '@guyromellemagayano/react-utils'

import { ContentLayout } from '@guyromellemagayano/portfolio/components/layouts/content'
import { ProjectsList } from '@guyromellemagayano/portfolio/components/lists/projects'
import { ProjectsCardsList } from '@guyromellemagayano/portfolio/components/lists/projects-cards'
import type {
  ProjectsData,
  ProjectsPageData
} from '@guyromellemagayano/portfolio/types'

export type ProjectsAppProps = ProjectsPageData & {
  projects?: Array<ProjectsData>
}

/**
 * Render the projects application component.
 * @param props - The props of the projects application.
 * @returns The rendered projects application component.
 */
const ProjectsApp = (props: ProjectsAppProps) => {
  const { hero, projects } = props

  const heading = hero?.heading || undefined,
    description = hero?.description || undefined

  return (
    !isEmpty(heading) &&
    isStringType(heading) &&
    !isEmpty(description) &&
    (isStringType(description) || isArrayType(description)) && (
      <ContentLayout.Simple title={heading} intro={description}>
        {!isEmpty(projects) && isArrayType(projects) && (
          <ProjectsList>
            {projects?.map((project, index) => (
              <ProjectsCardsList key={index} {...project} />
            ))}
          </ProjectsList>
        )}
      </ContentLayout.Simple>
    )
  )
}

ProjectsApp.displayName = 'ProjectsApp'

export default ProjectsApp
