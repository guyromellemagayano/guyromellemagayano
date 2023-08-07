import { WordPressTemplateProps } from '@/types'
import { WordPressTemplate, getWordPressProps } from '@faustwp/core'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const Page: NextPage = (props: WordPressTemplateProps): React.ReactNode => {
    return <WordPressTemplate {...props} />
}

export const getStaticProps: GetStaticProps = (ctx) => {
    return getWordPressProps({ ctx })
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export default Page
