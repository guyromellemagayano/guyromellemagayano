import { Metadata } from 'next'

import { ArticlesApp } from '@guyromellemagayano/portfolio/components/apps/articles'
import {
  articlesAppData,
  articlesPageData
} from '@guyromellemagayano/portfolio/utils/server'

/**
 * Generates the metadata for the articles page.
 * @returns The metadata for the articles page.
 */
export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await articlesPageData()

  return {
    title: meta?.title || '',
    description: meta?.description || '',
    keywords: meta?.keywords || ''
  }
}

/**
 * Renders the articles page.
 * @returns The articles page component.
 */
const Page = async () => {
  const data = await articlesAppData()

  return <ArticlesApp {...data} />
}

export default Page
