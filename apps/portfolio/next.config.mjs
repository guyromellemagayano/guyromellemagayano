//@ts-check

import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import { composePlugins, withNx } from '@nx/next'
import { withSentryConfig } from '@sentry/nextjs'
import remarkGfm from 'remark-gfm'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    NX_VERCEL_REMOTE_CACHE_TOKEN: process.env.NX_VERCEL_REMOTE_CACHE_TOKEN,
    NX_VERCEL_REMOTE_CACHE_TEAM: process.env.NX_VERCEL_REMOTE_CACHE_TEAM,
    SENTRY_DSN: process.env.SENTRY_DSN || '',
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN || '',
    SENTRY_ORG: process.env.SENTRY_ORG || '',
    SENTRY_PROJECT: process.env.SENTRY_PROJECT || '',
    SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT || ''
  },
  reactStrictMode: true,
  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true
  },
  sentry: {
    hideSourceMaps: true
  }
}

const sentryWebpackPluginOptions = {
  org: process.env.SENTRY_ORG || '',
  project: process.env.SENTRY_PROJECT || '',
  authToken: process.env.SENTRY_AUTH_TOKEN || '',
  silent: true
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism]
  }
})

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMDX
]

export default withSentryConfig(
  composePlugins(...plugins)(nextConfig),
  sentryWebpackPluginOptions
)
