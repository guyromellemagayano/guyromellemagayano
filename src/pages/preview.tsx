import { WordPressTemplateProps } from '@/types'
import { WordPressTemplate } from '@faustwp/core'
import { NextPage } from 'next'

const Preview: NextPage = (props: WordPressTemplateProps): React.ReactNode => {
    return <WordPressTemplate {...props} />
}

export default Preview
