import React from "react"
import { StaticQuery, graphql } from "gatsby"

import ImgWithSVGSupport from "../../hooks/imgSVGSupport"

const Icon = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "site-icon.svg" }) {
            childImageSharp {
              fixed(width: 81, height: 81) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
        }
      `}
      render={data => <ImgWithSVGSupport {...data.placeholderImage} />}
    />
  )
}

export default Icon
