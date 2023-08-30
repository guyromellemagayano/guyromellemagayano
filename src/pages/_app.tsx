import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import usePrevious from '@/hooks/usePrevious'
import '@/styles/tailwind.css'
import { FaustProvider } from '@faustwp/core'
import { Analytics } from '@vercel/analytics/react'
import 'focus-visible'
import { AppProps } from 'next/app'
import '../../faust.config'

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
                <Header />
                <main>
                    <Component {...extendedPageProps} key={router.asPath} />
                </main>
                <Footer />
            </div>

            <Analytics />
        </FaustProvider>
    )
}

export default App
