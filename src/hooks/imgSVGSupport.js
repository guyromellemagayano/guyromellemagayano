import React from "react"
import Img from "gatsby-image"

// this can be in different file
const ImgWithSVGSupport = ({
  childImageSharp,
  extension,
  publicURL,
  ...rest
}) => {
  if (!childImageSharp && extension === "svg") {
    return <img src={publicURL} {...rest} draggable="false" alt="site-logo" />
  }
  return <Img {...childImageSharp} {...rest} />
}

export default ImgWithSVGSupport
