const { withSentryConfig } = require('@sentry/nextjs') 
const { withFaust, getWpHostname } = require('@faustwp/core') 

/** @type {import('next').NextConfig} */
const faustConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['node_modules'],
    },
    images: {
        domains: [getWpHostname()],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    sentry: {
        hideSourceMaps: true,
    },
}

const sentryWebpackPluginOptions = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
}

module.exports = withFaust(
    withSentryConfig(faustConfig, sentryWebpackPluginOptions)
)
