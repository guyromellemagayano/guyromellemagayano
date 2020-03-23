import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CtaButtonDiv = styled(Link)`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  border: 3px solid #4caf50;
  border-radius: 5px;
  display: table;
  clear: both;
  color: #4caf50;
  letter-spacing: -1.25px;
  transition: background-color 500ms cubic-bezier(0, 0, 0.2, 1);

  :hover {
    color: #fff;
    background-color: #2d9434;
    border-color: #2d9434;
  }
`

const CtaButton = ({ link, label }) => {
  return (
    <CtaButtonDiv
      to={link}
      className={`px-4 py-2 text-center text-2xl leading-tight`}
    >
      {label}
    </CtaButtonDiv>
  )
}

export default CtaButton
