import React from "react"
import styled from "styled-components"

const TitleDiv = styled.h4`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  letter-spacing: -1.6px;
  color: #434e52;
`

const Title = ({ text, className }) => {
  return (
    <TitleDiv
      className={`text-left text-3xl mb-3 leading-tight ${
        className ? className : ""
      }`}
    >
      {text}
    </TitleDiv>
  )
}

export default Title
