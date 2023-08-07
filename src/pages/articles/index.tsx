/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticlesList, ArticlesListCards, Seo, SimpleLayout } from '@/components'
import ArticlesData from '@/data/articles'
import { IArticlesProps } from '@/interfaces'
import { getAllArticles } from '@/lib/getAllArticles'
import type { NextPage } from 'next'

// Articles page
const Articles: NextPage = ({ articles }: IArticlesProps): React.ReactNode => {
    // Destructure the data from ArticlesData function
    const { meta, hero } = ArticlesData()

    return (
        <>
            <Seo meta={meta} />

            <SimpleLayout id="hero" title={hero.heading} intro={hero.description}>
                <ArticlesList>
                    {articles?.map((article, index) => <ArticlesListCards key={index} {...article} />)}
                </ArticlesList>
            </SimpleLayout>
        </>
    )
}

export const getStaticProps = async (): Promise<object> => {
    try {
        const allArticles = await getAllArticles()

        return {
            props: {
                articles: allArticles.map(({ component, ...meta }) => meta),
            },
        }
    } catch (error) {
        console.error('Failed to retrieve articles:', error)

        // You can return some default props in case of an error
        return { props: { articles: [] } }
    }
}

export default Articles
