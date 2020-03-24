import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query {
        ContactQuery: allContactJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                action
                method
                inputs {
                  label
                  type
                  name
                  req
                }
                info {
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Layout>
          <SEO title="Contact" />
          {data.ContactQuery.edges
            ? data.ContactQuery.edges.map((val, index) => {
                if (val.node.section === "contact-intro") {
                  return (
                    <Jumbotron
                      key={index}
                      data={val}
                      className={`${isMobile ? "mt-8" : "mt-24"} mb-32`}
                    />
                  )
                } else {
                  return <Info key={index} data={val} />
                }
              })
            : null}
        </Layout>
      </React.Fragment>
    )}
  />
)

export default ContactPage
