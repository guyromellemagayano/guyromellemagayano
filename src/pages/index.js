import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import CtaButton from "../components/features/ctaButton"
import Info from "../components/features/info"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"
import Sepline from "../components/features/sepline"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        PostsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 4
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
                category
                tags
              }
              timeToRead
            }
          }
        }
        HomeAboutQuery: allHomeAboutJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                description {
                  tagline
                  texts
                  image {
                    src
                    alt
                  }
                }
                ctaLink {
                  link
                  label
                }
              }
            }
          }
        }
        HomeBlogQuery: allHomeBlogJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                ctaLink {
                  link
                  label
                }
              }
            }
          }
        }
        HomeIntroQuery: allHomeIntroJson {
          edges {
            node {
              section
              content {
                title
                subtitle
              }
            }
          }
        }
        HomePortfolioQuery: allHomePortfolioJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                caseStudies {
                  name
                  company
                  tools
                  programming
                  description
                  contributions
                  featuredImage
                  images
                }
                description
              }
            }
          }
        }
        HomeServicesQuery: allHomeServicesJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                skills {
                  thumbnail {
                    src
                    alt
                  }
                  title
                  description
                }
                ctaLink {
                  link
                  label
                }
              }
            }
          }
        }
        HomeWorkExperienceQuery: allHomeWorkExperienceJson {
          edges {
            node {
              section
              content {
                title
                subtitle
                workHistory {
                  company
                  employmentDate
                  position
                  description
                  keyContributions
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
        <PageTransition>
          <Layout>
            <SEO title="Home" />
            {data.HomeIntroQuery.edges
              ? data.HomeIntroQuery.edges.map((val, index) => {
                  return (
                    <Jumbotron
                      key={index}
                      data={val}
                      className={`${isMobile ? "mt-20 my-40" : "my-40"}`}
                    />
                  )
                })
              : null}
            {data.HomeServicesQuery.edges
              ? data.HomeServicesQuery.edges.map((val, index) => {
                  return (
                    <Info
                      key={index}
                      data={val}
                      images={data.AllImagesSharpQuery.edges.map(images => {
                        return images
                      })}
                    />
                  )
                })
              : null}
            {data.HomeWorkExperienceQuery.edges
              ? data.HomeWorkExperienceQuery.edges.map((val, index) => {
                  return <Info key={index} data={val} />
                })
              : null}
            {data.HomeAboutQuery.edges
              ? data.HomeAboutQuery.edges.map((val, index) => {
                  return (
                    <Info
                      key={index}
                      data={val}
                      images={data.AllImagesSharpQuery.edges.map(images => {
                        return images
                      })}
                    />
                  )
                })
              : null}
            {data.HomePortfolioQuery.edges
              ? data.HomePortfolioQuery.edges.map((val, index) => {
                  return (
                    <Info
                      key={index}
                      data={val}
                      images={data.AllImagesSharpQuery.edges.map(images => {
                        return images
                      })}
                    />
                  )
                })
              : null}
            {data.HomeBlogQuery.edges
              ? data.HomeBlogQuery.edges.map((val, index) => {
                  return <Info key={index} data={val} />
                })
              : null}
            {data.PostsRemark ? <Info data={data.PostsRemark} /> : null}
            <section className={`mb-32 clear-both`}>
              <article
                className={`block ${
                  isMobile ? "mx-6" : "mx-32"
                } mb-20 clear-both`}
              >
                {data.HomeBlogQuery.edges
                  ? data.HomeBlogQuery.edges.map((val, index) => {
                      return (
                        <React.Fragment key={index}>
                          {val.node.content.map((val2, index) => {
                            return (
                              <React.Fragment key={index}>
                                {val2.ctaLink.map((val3, index) => {
                                  return (
                                    <CtaButton
                                      key={index}
                                      link={val3.link}
                                      label={val3.label}
                                    />
                                  )
                                })}
                              </React.Fragment>
                            )
                          })}
                        </React.Fragment>
                      )
                    })
                  : null}
                <Sepline />
              </article>
            </section>
          </Layout>
        </PageTransition>
      </React.Fragment>
    )}
  />
)

export default IndexPage
