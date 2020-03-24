import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
import Jumbotron from "../components/features/jumbotron"

import SEO from "../components/tools/seo"

const _ = require("lodash")

const CategoryPageDiv = styled.section``

const Wrapper = styled.article`
  .category-links {
    > li {
      border: none !important;

      a {
        font-family: "Source Sans Pro", sans-serif !important;
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: -0.7px;
        display: flex;
        align-items: center;
        color: #707070;
        background-color: #fff;
        transition: all 500ms cubic-bezier(0, 0, 0.2, 1);

        &::before {
          content: "";
          width: 9px;
          height: 9px;
          margin-right: 0.5rem;
          background-color: #4caf50;
        }

        :hover {
          color: #2d9434;

          &::before {
            background-color: #2d9434;
          }
        }
      }
    }
  }

  .home-blog-posts {
    margin-left: -2rem;
    margin-right: -2rem;

    > li {
      border: none !important;
    }
  }
`

const CategoriesPage = () => (
  <StaticQuery
    query={graphql`
      query {
        CategoriesTitleQuery: allCategoryJson(limit: 2000) {
          edges {
            node {
              id
              section
              content {
                title
              }
            }
          }
        }
        CategoriesListQuery: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            totalCount
            field
            fieldValue
            edges {
              node {
                timeToRead
                frontmatter {
                  category
                  date(formatString: "MMMM DD, YYYY", fromNow: true)
                  path
                  tags
                  title
                }
                excerpt(pruneLength: 128, format: PLAIN, truncate: true)
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Layout>
          <SEO title="Categories" />
          {data.CategoriesTitleQuery.edges ? (
            <React.Fragment>
              {data.CategoriesTitleQuery.edges.map((val, index) => {
                return <Jumbotron key={index} data={val} />
              })}
            </React.Fragment>
          ) : null}
          {data.CategoriesListQuery.group ? (
            <React.Fragment>
              <CategoryPageDiv className={`mb-32 clear-both`}>
                <Wrapper
                  className={`block clear-both max-w-full ${
                    isMobile ? "mx-12" : "mx-32"
                  }`}
                >
                  <ul
                    className={`${
                      isMobile
                        ? "category-links mt-10 mb-6"
                        : "category-links grid grid-cols-3 mt-20 mb-12"
                    }`}
                  >
                    {data.CategoriesListQuery.group.map((val, index) => {
                      return (
                        <li key={index} className={`m-2`}>
                          <Link
                            className={`capitalize`}
                            to={`/category/${_.kebabCase(val.fieldValue)}/`}
                          >
                            {val.fieldValue} ({val.totalCount})
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Wrapper>
              </CategoryPageDiv>
            </React.Fragment>
          ) : null}
        </Layout>
      </React.Fragment>
    )}
  />
)

export default CategoriesPage
