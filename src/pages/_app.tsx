import { FooterLayout, HeaderLayout } from '@/components'
import usePrevious from '@/hooks/usePrevious'
import '@/styles/tailwind.css'
import { FaustProvider } from '@faustwp/core'
import '@faustwp/core/dist/css/toolbar.css'
import 'faust.config.mjs'
import 'focus-visible'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps, router }: AppProps): React.ReactNode => {
    const previousPathname = usePrevious(router.pathname)

    // Add the previousPathname to pageProps
    const extendedPageProps = { ...pageProps, previousPathname }

    return (
        <FaustProvider pageProps={pageProps}>
            <div className="fixed inset-0 flex justify-center sm:px-8 bg-white dark:bg-zinc-900">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full" />
                </div>
            </div>

            <div className="relative">
                <HeaderLayout />
                <main>
                    <Component {...extendedPageProps} key={router.asPath} />
                </main>
                <FooterLayout />
            </div>
        </FaustProvider>
    )
}

export default App
