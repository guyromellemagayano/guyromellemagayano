import { gql } from '@/__generated__'
import { GetPageQuery } from '@/__generated__/graphql'
import { FaustTemplate } from '@faustwp/core'

const Component: FaustTemplate<GetPageQuery> = (props) => {
    // TODO: Add loading state for previews

    console.log(props)

    return <></>
}

Component.variables = ({ databaseId }, ctx) => {
    return {
        databaseId,
        asPreview: ctx?.asPreview,
    }
}

Component.query = gql(`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`)

export default Component
