import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query {
        BlogQuery: allBlogJson {
          edges {
            node {
              section
              content {
                title
              }
            }
          }
        }
        PostsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tags
                category
                path
                description
              }
              html
              timeToRead
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <PageTransition>
          <Layout>
            <SEO title="Blog" />
            {data.BlogQuery.edges ? (
              <React.Fragment>
                {data.BlogQuery.edges.map((val, index) => {
                  return (
                    <Jumbotron
                      key={index}
                      data={val}
                      className={`${isMobile ? "mt-8 mb-16" : "mt-24 mb-16"}`}
                    />
                  )
                })}
              </React.Fragment>
            ) : null}
            {data.PostsRemark ? <Info data={data.PostsRemark} /> : null}
          </Layout>
        </PageTransition>
      </React.Fragment>
    )}
  />
)

export default BlogPage
