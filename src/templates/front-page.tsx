/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaustTemplate } from '@faustwp/core'
import { gql } from '../__generated__'
import { GetHomePageQuery } from '../__generated__/graphql'
// import Article from '@/components/Article'
import Container from '@/components/Container'
import Seo from '@/components/Seo'
// import Newsletter from "@/components/layouts/Newsletter";
import Photos from '@/components/layouts/Photos'
import Resume from '@/components/layouts/Resume'
import SocialLink from '@/components/links/Social'
import HomeData from '@/data/home'
import socialLinksData from '@/data/social-links'

const Component: FaustTemplate<GetHomePageQuery> = (props): React.ReactNode => {
    // Destructure the data from the HomeData function
    const { meta, hero, slidePhotos, cvFile, workExperiences } = HomeData()

    // Update the work experience data
    const updatedResumeData = {
        work: workExperiences,
        file: cvFile,
    }

    console.log(props)

    return (
        <>
            <Seo meta={meta} />

            <Container id="hero" className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {hero.heading}
                    </h1>
                    <p className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
                        {hero.description.map((paragraph, index) => {
                            return (
                                <span key={index} className="space-y-7">
                                    {paragraph}
                                </span>
                            )
                        })}
                    </p>
                    <div className="mt-6 flex gap-6">
                        {socialLinksData.map((link) => {
                            return <SocialLink key={link.url} {...link} />
                        })}
                    </div>
                </div>
            </Container>

            <Photos data={slidePhotos} />

            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {/* {articles?.map((article) => <Article key={article.slug} {...article} />)} */}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/* <Newsletter /> */}
                        <Resume data={updatedResumeData} />
                    </div>
                </div>
            </Container>
        </>
    )
}

Component.query = gql(`
  query GetHomePage {
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`)

export default Component
