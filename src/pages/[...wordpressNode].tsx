import { getWordPressProps, WordPressTemplate } from '@faustwp/core'
import {
    GetStaticPaths,
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from 'next'
import { WordPressTemplateProps } from '../types'

const Page = (props: WordPressTemplateProps): React.ReactNode => {
    return <WordPressTemplate {...props} />
}

export default Page

export const getStaticProps: GetStaticProps = async (
    ctx
): Promise<GetStaticPropsResult<WordPressTemplateProps>> => {
    const result = await getWordPressProps({ ctx })
    if (
        typeof result === 'object' &&
        'props' in result &&
        '__SEED_NODE__' in result.props &&
        '__TEMPLATE_QUERY_DATA__' in result.props
    ) {
        return result as GetStaticPropsResult<WordPressTemplateProps>
    }

    console.log('Unexpected result:', result)
    throw new Error('Incompatible type returned by getWordPressProps')
}

export const getStaticPaths: GetStaticPaths =
    async (): Promise<GetStaticPathsResult> => {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }
