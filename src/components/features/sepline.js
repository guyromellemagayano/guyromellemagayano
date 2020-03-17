import React from "react"
import styled from "styled-components"

const SeplineDiv = styled.span`
  background-color: #4caf50;
  max-width: 21.25rem;
  height: 1rem;
  clear: both;
`

const Sepline = () => {
  return <SeplineDiv className={`block mt-16 mb-16 clear-both`} />
}

export default Sepline
