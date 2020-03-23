import React from "react"
import styled from "styled-components"
import ReactHtmlParser from "react-html-parser"

const DescriptionDiv = styled.span`
  font-family: Source Sans Pro, sans-serif;
  font-weight: 400;
  letter-spacing: -0.7px;
  color: #707070;
  line-height: 1.5;

  &.strong {
    font-weight: 700;
  }

  a {
    font-weight: 700;
    color: #4caf50;
    letter-spacing: -0.7px;
    transition: color 500ms cubic-bezier(0, 0, 0.2, 1);

    :hover {
      color: #2d9434;
    }
  }

  blockquote {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-style: italic;
    position: relative;
    padding-left: 1em;
    border-left: 0.5rem solid #707070;
  }

  &.title,
  .subtitle,
  .snippet {
    font-family: Lora, sans-serif;
    font-weight: 700;
    letter-spacing: -1.8px;
  }

  &.title,
  .subtitle {
    color: #434e52;
  }

  .subtitle {
    width: 100%;

    &:after {
      content: "";
      display: block;
      margin-bottom: 2rem;
    }
  }

  .snippet {
    display: block;
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.45);

    &:after {
      content: ". . .";
      text-align: center;
      width: 100%;
      display: block;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const Description = ({ text, className }) => {
  return (
    <DescriptionDiv
      className={`block text-left ${className ? className : ""} ${
        className.includes("title")
          ? "text-4xl leading-12"
          : "text-2xl leading-10"
      }`}
    >
      {ReactHtmlParser(text)}
    </DescriptionDiv>
  )
}

export default Description
