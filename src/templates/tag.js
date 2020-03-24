import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
import CtaButton from "../components/features/ctaButton"
import Jumbotron from "../components/features/jumbotron"
import Posts from "../components/features/posts"
import Sepline from "../components/features/sepline"

const TagsTemplateDiv = styled.div``
const Wrapper = styled.article`
  .blog-tags {
    margin-left: -2rem;
    margin-right: -2rem;
  }
`

const TagsTemplate = ({ pageContext, data }) => {
  const dataMarkdownRemark = data.TagsDataQuery
  const dataTagsTemplateJSON = data.TagsCTALinkQuery
  const dataTagsList = data.TagsListPerPostQuery
  const dataCategoryList = data.CategoryListPerPostQuery

  return (
    <Layout>
      <Jumbotron data={dataMarkdownRemark} pageContext={pageContext} />
      <TagsTemplateDiv className={`mb-40`}>
        <Wrapper
          className={`block clear-both max-w-full ${
            isMobile ? "mx-12" : "mx-32"
          }`}
        >
          <ul
            className={`${
              isMobile ? "blog-tags" : "blog-tags grid grid-cols-2 gap-4"
            } mb-20`}
          >
            {dataMarkdownRemark.edges.map((val, index) => {
              return (
                <li key={index}>
                  <Posts
                    data={val.node}
                    tags={dataTagsList}
                    category={dataCategoryList}
                    pageContext={pageContext}
                  />
                </li>
              )
            })}
          </ul>
          <div>
            {dataTagsTemplateJSON.edges.map((val2, index) => {
              return (
                <React.Fragment key={index}>
                  {val2.node.content.map((val3, index) => {
                    return (
                      <React.Fragment key={index}>
                        {val3.ctaLink.map((val4, index) => {
                          return (
                            <CtaButton
                              key={index}
                              link={val4.link}
                              label={val4.label}
                            />
                          )
                        })}
                      </React.Fragment>
                    )
                  })}
                </React.Fragment>
              )
            })}
            <Sepline />
          </div>
        </Wrapper>
      </TagsTemplateDiv>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    TagsDataQuery: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___tags], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            tags
            path
            description
          }
          html
          timeToRead
        }
      }
    }
    TagsListPerPostQuery: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        totalCount
        field
        fieldValue
      }
    }
    CategoryListPerPostQuery: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        totalCount
        field
        fieldValue
      }
    }
    TagsCTALinkQuery: allTagTemplateJson(limit: 2000) {
      edges {
        node {
          id
          section
          content {
            ctaLink {
              link
              label
            }
          }
        }
      }
    }
  }
`

export default TagsTemplate
