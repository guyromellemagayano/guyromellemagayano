import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"

import Thumbnail from "../features/thumbnail"

const HeaderDiv = styled.header`
  background-color: #fff;
  overflow: hidden;

  ul {
    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      background-color: #fff;
      z-index: 999;
      width: 100%;
      box-shadow: 0 1px 2px 3px rgba(0, 0, 0, 0.16);
      justify-content: space-evenly;
    }

    li {
      :last-child {
        a {
          background-color: #4caf50;
          border-radius: 5px;
          color: #fff;
          padding: 0.5rem 1.25rem;
          transition: background-color 500ms cubic-bezier(0, 0, 0.2, 1);

          :hover {
            color: #fff;
            background-color: #2d9434;
          }

          &.active {
            color: #fff !important;
            background-color: #2d9434 !important;
          }
        }
      }
    }
  }

  .logo-link {
    width: 100%;
    max-width: 81px;
    height: 100%;
    max-height: 81px;
  }

  .menu-link {
    font-weight: 600;
    color: #707070;
    transition: color 500ms cubic-bezier(0, 0, 0.2, 1);

    :hover {
      color: #4caf50;
    }
  }
`

const Header = ({ menuLinks, images }) => {
  const imageArr = []

  images.map(val => {
    return imageArr.push(val)
  })

  const matchImage = imageArr.find(
    x => x.node.fluid.originalName === 'site-logo.png'
  )
  
  return (
    <HeaderDiv className={`w-full max-w-full`}>
      <div className={`${isMobile ? "mx-6" : "container mx-auto"}`}>
        <div className={`${isMobile ? "block" : "flex"} mt-10 mb-10`}>
          <Link
            to="/"
            className={`logo-link ${isMobile ? "mr-0" : "mr-3"}`}
          >
            <Thumbnail
              className={`${isMobile ? "mr-0" : "mr-10"}`}
              src={matchImage.node.fluid}
              draggable={false}
            />
          </Link>
          <ul
            className={`${
              isMobile ? "fixed bottom-0 left-0 py-5" : "relative ml-8"
            } flex items-center`}
          >
            {menuLinks.map((link, index) => {
              return (
                <React.Fragment key={index}>
                  <li key={link.name} className={`ml-3 mr-3`}>
                    <Link
                      to={link.link}
                      className={`menu-link tracking-tighter ${
                        isMobile ? "text-base" : "text-2xl"
                      }`}
                      activeClassName={`active`}
                      activeStyle={{
                        color: `#4CAF50`,
                        backgroundColor: `transparent`,
                      }}
                      partiallyActive={true}
                    >
                      {link.name}
                    </Link>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </HeaderDiv>
  )
}

export default Header
