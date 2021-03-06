import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { isMobile } from "react-device-detect"
import Helmet from "react-helmet"

import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "../../content/assets/stylesheets/style.scss"

import Header from "./layouts/header"
import Footer from "./layouts/footer"

library.add(fab)

const MainDiv = styled.main`
  position: ${isMobile ? "relative" : "absolute"};
  z-index: 10;
  min-height: ${isMobile ? "10rem" : "42rem"};
  background-color: #fff;
  margin-bottom: ${isMobile ? "0" : "27rem"};
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          SiteMenuLinks: site {
            siteMetadata {
              socialLinks {
                name
                icon {
                  style
                  type
                }
                link
              }
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={"title"}
            meta={[
              { name: "description", content: "Full Stack Web Developer" },
              {
                name: "keywords",
                content:
                  "full, stack, web, developer, philippines, davao, city, guy, romelle, magayano",
              },
            ]}
          ></Helmet>
          <Header
            menuLinks={data.SiteMenuLinks.siteMetadata.menuLinks}
          />
          <MainDiv className={`relative mb-32`}>
            <div className={`container mx-auto`}>
              <div className={`row mb-40`}>{children}</div>
            </div>
          </MainDiv>
          <Footer socialLinks={data.SiteMenuLinks.siteMetadata.socialLinks} />
        </React.Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
