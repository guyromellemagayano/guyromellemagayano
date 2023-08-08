import { GetHomePageQuery } from '@/__generated__/graphql'
import { FaustTemplate } from '@faustwp/core'
import React from 'react'

// Front page template
const Component: FaustTemplate<GetHomePageQuery> = (props): React.ReactNode => {
    console.log(props?.data?.generalSettings)

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Component
