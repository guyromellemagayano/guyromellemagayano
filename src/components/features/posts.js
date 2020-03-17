import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Category from "./category"
import Description from "./description"
import Tags from "./tags"

const PostsDiv = styled.article`
  border: none !important;
  backdrop-filter: blur(30px);
  background-color: #fff;
  transition: box-shadow 500ms cubic-bezier(0, 0, 0.2, 1);

  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h3 {
    font-family: Lora, sans-serif;
    font-weight: 700;
    letter-spacing: -1.8px;
    color: #434e52;
    min-height: 5rem;
    height: auto;

    a {
      transition: color 500ms cubic-bezier(0, 0, 0.2, 1);

      :hover {
        color: #4caf50;
      }
    }
  }

  p {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    letter-spacing: -0.7px;
    color: #707070;
  }

  .read-more {
    a {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 700;
      letter-spacing: -0.7px;
      display: flex;
      align-items: center;
      transition: all 500ms cubic-bezier(0, 0, 0.2, 1);

      &::before {
        content: "";
        width: 3rem;
        height: 6px;
        margin-right: 0.85rem;
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
`

const Posts = ({ data, tags, category, pageContext }) => {
  return (
    <React.Fragment>
      {data.node ? (
        <PostsDiv className={`p-10`}>
          <header>
            <Category
              node={data.node.frontmatter.category}
              pageContext={pageContext}
            />
            <h3 className={`title text-3xl leading-10`}>
              <Link
                to={data.node.fields.slug}
                title={data.node.frontmatter.title}
              >
                {data.node.frontmatter.title}
              </Link>
            </h3>
            <Description
              text={data.node.frontmatter.date}
              className={`strong mt-4 mb-8`}
            />
          </header>
          <section>
            <p
              className={`text-2xl mb-10 leading-8`}
              dangerouslySetInnerHTML={{
                __html: data.node.excerpt,
              }}
            />
            <span className={`read-more block mb-8 text-2xl regular-green`}>
              <Link to={data.node.fields.slug}>Read More</Link>
            </span>
            <Tags node={data.node.frontmatter.tags} pageContext={pageContext} />
          </section>
        </PostsDiv>
      ) : (
        <PostsDiv className={`p-10`}>
          <header>
            <Category node={category} pageContext={pageContext} />
            <h3 className={`title text-3xl leading-10`}>
              <Link to={data.fields.slug} title={data.frontmatter.title}>
                {data.frontmatter.title}
              </Link>
            </h3>
            <Description
              text={data.frontmatter.date}
              className={`strong mt-4 mb-8`}
            />
          </header>
          <section>
            <p
              className={`text-2xl mb-10 leading-8`}
              dangerouslySetInnerHTML={{
                __html: data.excerpt,
              }}
            />
            <span className={`read-more block mb-8 text-2xl regular-green`}>
              <Link to={data.fields.slug}>Read More</Link>
            </span>
            <Tags node={tags} pageContext={pageContext} />
          </section>
        </PostsDiv>
      )}
    </React.Fragment>
  )
}

export default Posts
