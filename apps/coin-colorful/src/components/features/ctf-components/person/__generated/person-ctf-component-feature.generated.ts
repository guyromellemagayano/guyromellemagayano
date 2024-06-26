import * as Types from '../../../../../libs/__generated/graphql.types'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { ctfFetcher } from '../../../../../libs'
import {
  AssetFieldsFragment,
  AssetFieldsFragmentDoc
} from '../../asset/__generated/asset-ctf-component-feature.generated'
export type PersonFieldsFragment = {
  __typename: 'TopicPerson'
  name?: string | null
  website?: string | null
  location?: string | null
  cardStyle?: boolean | null
  sys: { __typename?: 'Sys'; id: string }
  bio?: { __typename?: 'TopicPersonBio'; json: any } | null
  avatar?: ({ __typename?: 'Asset' } & AssetFieldsFragment) | null
}

export type CtfPersonQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input']
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
}>

export type CtfPersonQuery = {
  __typename?: 'Query'
  topicPerson?: ({ __typename?: 'TopicPerson' } & PersonFieldsFragment) | null
}

export const PersonFieldsFragmentDoc = `
    fragment PersonFields on TopicPerson {
  __typename
  sys {
    id
  }
  name
  bio {
    json
  }
  avatar {
    ...AssetFields
  }
  website
  location
  cardStyle
}
    `
export const CtfPersonDocument = `
    query CtfPerson($id: String!, $locale: String, $preview: Boolean) {
  topicPerson(id: $id, preview: $preview, locale: $locale) {
    ...PersonFields
  }
}
    ${PersonFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`

export const useCtfPersonQuery = <TData = CtfPersonQuery, TError = unknown>(
  variables: CtfPersonQueryVariables,
  options?: UseQueryOptions<CtfPersonQuery, TError, TData>
) => {
  return useQuery<CtfPersonQuery, TError, TData>(
    ['CtfPerson', variables],
    ctfFetcher<CtfPersonQuery, CtfPersonQueryVariables>(
      CtfPersonDocument,
      variables
    ),
    options
  )
}

useCtfPersonQuery.getKey = (variables: CtfPersonQueryVariables) => [
  'CtfPerson',
  variables
]

useCtfPersonQuery.fetcher = (
  variables: CtfPersonQueryVariables,
  options?: RequestInit['headers']
) =>
  ctfFetcher<CtfPersonQuery, CtfPersonQueryVariables>(
    CtfPersonDocument,
    variables,
    options
  )
