import { getWordPressProps, WordPressTemplate } from '@faustwp/core'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { WordPressTemplateProps } from '../types'

const Page = (props: WordPressTemplateProps): React.ReactNode => {
    return <WordPressTemplate {...props} />
}

export default Page

export const getStaticProps: GetStaticProps = async (
    ctx
): Promise<GetStaticPropsResult<WordPressTemplateProps>> => {
    const result = await getWordPressProps({ ctx }) // assuming it's asynchronous

    if (
        'props' in result &&
        '__SEED_NODE__' in result.props &&
        '__TEMPLATE_QUERY_DATA__' in result.props
    ) {
        return result as GetStaticPropsResult<WordPressTemplateProps>
    }

    // throw an error or return a default value
    throw new Error('Incompatible type returned by getWordPressProps')
}
