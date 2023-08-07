import { ISeoProps } from '@/interfaces/components'
import Head from 'next/head'

// SEO component
const Seo = ({ meta }: ISeoProps): React.ReactNode => {
    return (
        <Head>
            {meta?.title && <title>{meta.title}</title>}
            {meta?.description && <meta property="description" content={meta.description} />}
            {meta?.keywords && <meta name="keywords" content={meta.keywords} />}
            {/* TODO: Twitter and Open Graph meta tags */}
        </Head>
    )
}

export default Seo
