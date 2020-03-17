import React from "react"
import styled from "styled-components"

const ContentDiv = styled.section`
  p {
    font-weight: 400;
    color: #707070;
    letter-spacing: -0.7px;
  }
`

const Wrapper = styled.article`
  .image {
    width: 100%;
    height: 100%;
  }

  p {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    letter-spacing: -0.7px;
    color: #707070;
    line-height: 2.5rem;
    margin-bottom: 4rem;
    margin-left: 8rem;
    margin-right: 8rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }

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
      margin-top: 2rem;
      color: rgba(0, 0, 0, 0.45);

      &:after {
        content: ". . .";
        text-align: center;
        width: 100%;
        display: block;
        margin: 1rem auto 4rem;
      }
    }
  }

  ul {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    letter-spacing: -0.7px;
    color: #707070;
    line-height: 2.5rem;
    margin-bottom: 4rem;
    margin-left: 10rem;
    margin-right: 8rem;
    list-style: unset;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      margin-left: 5rem;
      margin-right: 1.5rem;
    }

    li {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  blockquote {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-style: italic;
    position: relative;
    padding-left: 1em;
    color: #707070;
    border-left: 0.5rem solid #707070;
    margin-bottom: 3rem;
    margin-left: 8rem;
    margin-right: 8rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  .banner-img {
    margin-bottom: 3rem;
  }
`

const Content = ({ node }) => {
  return (
    <ContentDiv className={`block mb-40 clear-both`}>
      <Wrapper className={`block clear-both`}>
        <div
          className={`text-left mb-32 text-2xl`}
          dangerouslySetInnerHTML={{ __html: node }}
        />
      </Wrapper>
    </ContentDiv>
  )
}

export default Content
