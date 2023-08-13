import { withFaust } from '@faustwp/core'
import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    reactStrictMode: true,
    sentry: {
        hideSourceMaps: true,
    },
}

const sentryWebpackPluginOptions = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true,
}

export default withFaust(
    withSentryConfig(nextConfig, sentryWebpackPluginOptions)
)
