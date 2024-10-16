import type { CodegenConfig } from '@graphql-codegen/cli'

const NEXT_PUBLIC_PORTFOLIO_SITE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PORTFOLIO_SITE_URL
    : 'http://localhost:3000'
const NEXT_PUBLIC_PORTFOLIO_SITE_GRAPHQL_API_PATHNAME =
  process.env.NEXT_PUBLIC_PORTFOLIO_SITE_GRAPHQL_API_PATHNAME
const PORTFOLIO_SITE_GRAPHQL_API_URL = `${NEXT_PUBLIC_PORTFOLIO_SITE_URL}${NEXT_PUBLIC_PORTFOLIO_SITE_GRAPHQL_API_PATHNAME}`

const config: CodegenConfig = {
  config: {
    skipTypename: true
  },
  overwrite: true,
  schema: PORTFOLIO_SITE_GRAPHQL_API_URL,
  documents: 'apps/portfolio/src/graphql/**/*.ts',
  generates: {
    'apps/portfolio/src/graphql/__generated__/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
