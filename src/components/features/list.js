import React from "react"
import styled from "styled-components"
import ReactHtmlParser from "react-html-parser"

const ListDiv = styled.ul`
  list-style: none;
  padding-left: 3.5em;

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    padding-left: 2em;
  }

  li {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    letter-spacing: -0.7px;
    color: #707070;
    display: flex;
    align-items: baseline;
    position: relative;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      display: inline-block;
      align-items: unset;
    }

    &::before {
      content: "";
      font-weight: bold;
      display: inline-block;
      flex: 0 0 0.6rem;
      width: 0.6rem;
      height: 0.6rem;
      background-color: #4caf50;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      margin-left: -1.45rem;
      margin-right: 0.75rem;
    }
  }
`

const List = ({ list }) => {
  return (
    <ListDiv
      className={`flex flex-row flex-wrap text-left text-2xl leading-tight`}
    >
      {list.map(point => (
        <li
          key={point}
          className={`flex flex-none flex-basis-1 flex-wrap mb-2 text-left text-2xl leading-tight`}
        >
          {ReactHtmlParser(point)}
        </li>
      ))}
    </ListDiv>
  )
}

export default List
