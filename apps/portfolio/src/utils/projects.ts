import { glob } from 'fast-glob'
import * as path from 'path'

import { ProjectsData } from '@guyromellemagayano/portfolio/types'

/**
 * Imports the project data.
 * @returns The project data.
 */
export const importProject = async (fileName: string) => {
  const { meta, default: component } = await import(
    `@guyromellemagayano/portfolio/app/projects/${fileName}`
  )

  return { slug: fileName.replace(/(\/page)?\.mdx$/, ''), ...meta, component }
}

/**
 * Fetches the projects data.
 * @returns The projects data.
 */
export const projectsData = async (): Promise<Array<ProjectsData>> =>
  await Promise.all(
    await glob(['**/*.mdx'], {
      cwd: path.join(process.cwd(), '/src/app/projects')
    })
      .then(res => res.map(importProject))
      .catch(() => [])
  )
    .then(res => res.sort((a, z) => +new Date(z.date) - +new Date(a.date)))
    .catch(() => [])

/**
 * Retrieves the projects data by category.
 * @returns The projects data by category.
 */
export const projectsByCategory = (
  data: Array<ProjectsData> | undefined,
  category: string
): Array<ProjectsData> | [] =>
  data?.filter(project => project.category === category) || []
