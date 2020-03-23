import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        AboutQuery: allAboutJson {
          edges {
            node {
              section
              content {
                title
                info
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <PageTransition>
          <Layout>
            <SEO title="About" />
            {data.AboutQuery.edges
              ? data.AboutQuery.edges.map((val, index) => {
                  if (val.node.section === "about-intro") {
                    return (
                      <Jumbotron
                        key={index}
                        data={val}
                        className={`${isMobile ? "mt-8 mb-16" : "mt-24 mb-32"}`}
                      />
                    )
                  } else {
                    return <Info key={index} data={val} />
                  }
                })
              : null}
          </Layout>
        </PageTransition>
      </React.Fragment>
    )}
  />
)

export default AboutPage
