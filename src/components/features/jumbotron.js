import React from "react"
import styled from "styled-components"
import ReactHtmlParser from "react-html-parser"

import Category from "./category"
import Description from "./description"
import Sepline from "./sepline"
import Tags from "./tags"

const JumbotronDiv = styled.section`
  h1 {
    font-family: Lora;
    font-weight: 700;
    color: #434e52;
    letter-spacing: -3.75px;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      letter-spacing: -2.5px;
    }
  }

  p {
    font-weight: 400;
    color: #707070;
    letter-spacing: -0.7px;
  }

  a {
    font-weight: 700;
    letter-spacing: -0.7px;
    transition: color 500ms cubic-bezier(0, 0, 0.2, 1);

    :hover {
      color: #2d9434;
    }
  }
`

const Wrapper = styled.article`
  > ul {
    > li {
      border-bottom: 2px solid #dedede;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

const Jumbotron = ({ className, data, pageContext }) => {
  if (pageContext) {
    if (pageContext.hasOwnProperty("tag")) {
      const { tag } = pageContext
      const tagHeader = `${data.totalCount} post${
        data.totalCount === 1 ? "" : "s"
      } tagged with "${tag}"`

      return (
        <React.Fragment>
          <JumbotronDiv
            className={`mt-10 clear-both ${className ? className : ""}`}
          >
            <Wrapper className={`block clear-both mx-6 sm:mx-10 xl:mx-32`}>
              {tagHeader ? (
                <h1
                  className={`text-left leading-tight text-4xl xl:text-6xl mb-8`}
                >
                  {ReactHtmlParser(tagHeader)}
                </h1>
              ) : null}
              <Sepline />
            </Wrapper>
          </JumbotronDiv>
        </React.Fragment>
      )
    } else {
      const { category } = pageContext
      const categoryHeader = `${data.totalCount} post${
        data.totalCount === 1 ? "" : "s"
      } categorized with "${category}"`

      return (
        <React.Fragment>
          <JumbotronDiv
            className={`mt-10 clear-both ${className ? className : ""}`}
          >
            <Wrapper className={`block clear-both mx-6 sm:mx-10 xl:mx-32`}>
              {categoryHeader ? (
                <h1
                  className={`text-left leading-tight text-4xl xl:text-6xl mb-8`}
                >
                  {ReactHtmlParser(categoryHeader)}
                </h1>
              ) : null}
              <Sepline />
            </Wrapper>
          </JumbotronDiv>
        </React.Fragment>
      )
    }
  } else {
    return (
      <React.Fragment>
        {data.node ? (
          data.node.content.map((val, index) => {
            return (
              <JumbotronDiv
                key={index}
                className={`clear-both ${className ? className : "mt-20"}`}
              >
                <Wrapper className={`block clear-both mx-6 sm:mx-10 xl:mx-32`}>
                  {val.title ? (
                    <React.Fragment>
                      <h1
                        className={`text-left leading-tight text-4xl xl:text-6xl mb-8`}
                      >
                        {ReactHtmlParser(val.title)}
                      </h1>
                    </React.Fragment>
                  ) : null}
                  {val.date ? (
                    <Description
                      text={val.date}
                      className={`text-left leading-tight text-1xl strong mt-2 mb-8`}
                    />
                  ) : null}
                  {val.subtitle ? (
                    <p key={index} className={`text-left text-2xl`}>
                      {ReactHtmlParser(val.subtitle)}
                    </p>
                  ) : null}
                  <Sepline />
                </Wrapper>
              </JumbotronDiv>
            )
          })
        ) : (
          <JumbotronDiv
            className={`mt-10 clear-both ${className ? className : ""}`}
          >
            <Wrapper className={`block clear-both mx-6 sm:mx-10 xl:mx-32`}>
              {data.frontmatter.category ? (
                <Category node={data.frontmatter.category} />
              ) : null}
              {data.frontmatter.title ? (
                <React.Fragment>
                  <h1
                    className={`text-left leading-tight text-4xl xl:text-6xl mb-8`}
                  >
                    {ReactHtmlParser(data.frontmatter.title)}
                  </h1>
                </React.Fragment>
              ) : null}
              {data.frontmatter.date ? (
                <Description
                  text={data.frontmatter.date}
                  className={`text-left leading-tight text-1xl strong mt-2 mb-8`}
                />
              ) : null}
              {data.frontmatter.subtitle ? (
                <p className={`text-left text-2xl`}>
                  {ReactHtmlParser(data.frontmatter.subtitle)}
                </p>
              ) : null}
              {data.frontmatter.tags ? (
                <Tags node={data.frontmatter.tags} />
              ) : null}
              <Sepline />
            </Wrapper>
          </JumbotronDiv>
        )}
      </React.Fragment>
    )
  }
}

export default Jumbotron
