import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const SpecialitiesPage = () => (
  <StaticQuery
    query={graphql`
      query {
        SpecialtiesQuery: allSpecialtiesJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                skills {
                  imgFileName
                  imgAlt
                  title
                  description
                }
              }
            }
          }
        }
        AllImagesSharpQuery: allImageSharp {
          edges {
            node {
              fluid {
                base64
                tracedSVG
                originalImg
                originalName
                presentationWidth
                presentationHeight
                src
                srcSet
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Layout>
          <SEO title="Specialties" />
          {data.SpecialtiesQuery.edges
            ? data.SpecialtiesQuery.edges.map((val, index) => {
                if (val.node.section === "services-intro") {
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

export default SpecialitiesPage
