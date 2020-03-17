import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const ThankYouPage = () => (
  <StaticQuery
    query={graphql`
      query {
        ThankYouQuery: allThankYouJson {
          edges {
            node {
              section
              content {
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="Thank You!" />
          {data.ThankYouQuery.edges
            ? data.ThankYouQuery.edges.map((val, index) => {
                if (val.node.section === "thank-you-intro") {
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

export default ThankYouPage
