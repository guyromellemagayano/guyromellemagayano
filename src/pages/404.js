import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        NotFoundQuery: allNotFoundJson {
          edges {
            node {
              section
              content {
                title
                description
                ctaLink {
                  link
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="404: Not Found" />
          {data.NotFoundQuery.edges
            ? data.NotFoundQuery.edges.map((val, index) => {
                if (val.node.section === "not-found-intro") {
                  return (
                    <Jumbotron
                      key={index}
                      data={val}
                      className={`mt-24 mb-16`}
                    />
                  )
                } else {
                  return <Info key={index} data={val} />
                }
              })
            : null}
        </Layout>
      </>
    )}
  />
)

export default NotFoundPage
