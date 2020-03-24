import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const _ = require("lodash")

const TagsDiv = styled.ul`
  li {
    border: none !important;
    margin-bottom: 0;

    &:not(.selected) {
      a {
        :hover {
          color: #2d9434;

          &::before {
            background-color: #2d9434;
          }
        }
      }
    }

    &.selected {
      a {
        color: #2d9434;

        &::before {
          background-color: #2d9434;
        }
      }
    }

    a {
      font-family: "Source Sans Pro", sans-serif !important;
      font-weight: 700;
      font-size: 1.35rem;
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
    }
  }
`

const Tags = ({ node, pageContext }) => {
  return (
    <TagsDiv className={`flex justify-start flex-wrap mt-4 -mx-2`}>
      {node.group
        ? node.group.map((val, index) => {
            return (
              <li
                key={index}
                className={`mx-2 ${
                  pageContext && pageContext.tag === val.fieldValue
                    ? "selected"
                    : ""
                }`}
              >
                <Link to={`/tag/${_.kebabCase(val.fieldValue)}/`}>
                  {val.fieldValue}
                </Link>
              </li>
            )
          })
        : node.map((val, index) => {
            return (
              <li
                key={index}
                className={`mx-2 ${
                  pageContext && pageContext.tag === val ? "selected" : ""
                }`}
              >
                <Link to={`/tag/${_.kebabCase(val)}/`}>{val}</Link>
              </li>
            )
          })}
    </TagsDiv>
  )
}

export default Tags
