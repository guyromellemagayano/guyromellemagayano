import { getWordPressProps, WordPressTemplate } from '@faustwp/core'
import { GetStaticProps, NextPage } from 'next'
import { WordPressTemplateProps } from '../types'

const Page: NextPage = (props: WordPressTemplateProps): React.ReactNode => {
    return <WordPressTemplate {...props} />
}

export const getStaticProps: GetStaticProps = (ctx) => {
    return getWordPressProps({ ctx })
}

export default Page
