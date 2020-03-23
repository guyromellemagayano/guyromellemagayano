import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import PageTransition from "gatsby-plugin-page-transitions"

import "../../content/assets/stylesheets/style.scss"

import Layout from "../components/layout"
import Content from "../components/features/content"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const SinglePostDiv = styled.main``

const SinglePostTemplate = ({ data, pageContext }) => {
  // const { previous, next } = pageContext

  return (
    <PageTransition>
      <Layout>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description={
            data.markdownRemark.frontmatter.description ||
            data.markdownRemark.excerpt
          }
        />
        <SinglePostDiv className={`relative mb-32`}>
          <div className={`container mx-auto`}>
            <div className={`row`}>
              {data.markdownRemark ? (
                <React.Fragment>
                  <Jumbotron
                    data={data.markdownRemark}
                    className={`${isMobile ? "mt-8" : "mt-24"} mb-32`}
                  />
                  <Content node={data.markdownRemark.html} />
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </SinglePostDiv>
      </Layout>
    </PageTransition>
  )
}

export default SinglePostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 128, format: PLAIN, truncate: true)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        tags
      }
    }
  }
`
