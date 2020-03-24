import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const _ = require("lodash")

const CategoryDiv = styled.ul`
  li {
    border: none !important;

    &.selected {
      a {
        color: #fff;
        border-color: $4caf50;
        background-color: #2d9434;
      }
    }

    a {
      font-family: "Source Sans Pro", sans-serif !important;
      font-weight: 700;
      font-size: 1.15rem;
      text-transform: uppercase;
      letter-spacing: -0.7px;
      display: flex;
      align-items: center;
      padding: 0.35rem 1.25rem;
      border: 2px solid #4caf50;
      border-radius: 30px;
      color: #4caf50;
      transition: all 500ms cubic-bezier(0, 0, 0.2, 1);

      :hover {
        color: #fff;
        border-color: @4caf50;
        background-color: #2d9434;
      }
    }
  }
`

const Category = ({ node, pageContext }) => {
  return (
    <CategoryDiv className={`flex justify-start flex-wrap mt-2 mb-10 mx-2`}>
      {node.group
        ? node.group.map((val, index) => {
            return (
              <li
                key={index}
                className={`mx-1 my-1 ${
                  pageContext && pageContext.category === val.fieldValue
                    ? "selected"
                    : ""
                }`}
              >
                <Link to={`/category/${_.kebabCase(val.fieldValue)}/`}>
                  {val.fieldValue}
                </Link>
              </li>
            )
          })
        : node.map((val, index) => {
            return (
              <li
                key={index}
                className={`mx-1 my-1 ${
                  pageContext && pageContext.category === val ? "selected" : ""
                }`}
              >
                <Link to={`/category/${_.kebabCase(val)}/`}>{val}</Link>
              </li>
            )
          })}
    </CategoryDiv>
  )
}

export default Category
