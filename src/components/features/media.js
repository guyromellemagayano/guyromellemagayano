import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

import Description from "./description"
import Thumbnail from "./thumbnail"
import Title from "./title"

const MediaDiv = styled.div``

const Media = ({ imageDimensions, title, description, images }) => {
  const imageArr = []

  images.map(val => {
    return imageArr.push(val)
  })

  return (
    <MediaDiv className={`${isMobile ? "block" : "flex items-start"} my-12`}>
      {imageDimensions.map((data, index) => {
        const matchImage = imageArr.find(
          x => x.node.fluid.originalName === data.src
        )

        return (
          <React.Fragment key={index}>
            <Thumbnail
              key={index}
              className={`${isMobile ? "mr-0 mb-10" : "mr-5"}`}
              src={matchImage.node.fluid}
              alt={data.alt}
              draggable={false}
            />
          </React.Fragment>
        )
      })}
      <div className={`flex flex-auto flex-wrap flex-row clear-both`}>
        <Title text={title} className={`flex-none flex-basis-1`} />
        <Description text={description} className={`flex-none flex-basis-1`} />
      </div>
    </MediaDiv>
  )
}

export default Media
