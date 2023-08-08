import { getWpHostname, withFaust } from '@faustwp/core'
import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const faustConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    sassOptions: {
        includePaths: ['node_modules'],
    },
    images: {
        domains: [getWpHostname()],
    },
    experimental: {
        scrollRestoration: true,
    },
    sentry: {
        hideSourceMaps: true,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
}

const sentryConfig = {
    disableLogger: true,
    hideSourceMaps: true,
    org: 'guy-romelle-magayano',
    org: 'guy-romelle-magayano',
    project: 'guyromellemagayano',
    project: 'guyromellemagayano',
    silent: true,
    silent: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    widenClientFileUpload: true,
}

export default withFaust(faustConfig, withSentryConfig(sentryConfig))
