import { Metadata } from 'next'

import { HomeApp } from '@guyromellemagayano/portfolio/components/apps/home'
import {
  homeAppData,
  homePageData
} from '@guyromellemagayano/portfolio/utils/server'

/**
 * Generates the metadata for the home page.
 * @returns The metadata for the home page.
 */
export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await homePageData()

  return {
    title: meta?.title || '',
    description: meta?.description || '',
    keywords: meta?.keywords || ''
  }
}

/**
 * Renders the home page.
 * @returns The home page component.
 */
const Page = async () => {
  const data = await homeAppData()

  return <HomeApp {...data} />
}

export default Page
