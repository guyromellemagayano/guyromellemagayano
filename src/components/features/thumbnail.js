import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { isMobile } from "react-device-detect"

const ThumbnailDiv = styled.span`
  flex-basis: 5rem;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`

const Thumbnail = props => {
  let normalizedProps = props

  if (props.src) {
    normalizedProps = {
      ...props,
      fluid: props.src,
      alt: props.alt,
      draggable: false,
      style: {
        ...(props.style || {}),
        minWidth: props.src.presentationWidth,
        minHeight: props.src.presentationHeight,
        maxWidth: "100%",
        maxHeight: "100%",
      },
    }
  }

  return (
    <ThumbnailDiv
      className={`${
        isMobile ? "block" : "flex flex-grow-1 flex-shrink-0 inline-block"
      } ${props.className ? props.className : ""}`}
    >
      <Img {...normalizedProps} />
    </ThumbnailDiv>
  )
}

export default Thumbnail
