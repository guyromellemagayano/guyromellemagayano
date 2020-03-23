import React from "react"
import styled from "styled-components"

const SubDetailDiv = styled.h4`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  letter-spacing: -0.7px;
`

const SubDetail = ({ text, className }) => {
  return (
    <SubDetailDiv
      className={`text-2xl leading-tight ${className ? className : ""}`}
    >
      {text}
    </SubDetailDiv>
  )
}

export default SubDetail
