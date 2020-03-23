import React from "react"
import styled from "styled-components"

import Thumbnail from "./thumbnail"

const ImageDiv = styled.span``

const Image = ({ className, imageDimensions, images }) => {
  const imageArr = []

  images.map(val => {
    return imageArr.push(val)
  })

  return (
    <ImageDiv className={`w-full ${className ? className : ""}`}>
      {imageDimensions.map((data, index) => {
        const matchImage = imageArr.find(
          x => x.node.fluid.originalName === data.src
        )

        return (
          <React.Fragment key={index}>
            <Thumbnail
              key={index}
              src={matchImage.node.fluid}
              alt={data.alt}
              draggable={false}
            />
          </React.Fragment>
        )
      })}
    </ImageDiv>
  )
}

export default Image
