import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { isMobile } from "react-device-detect"

import FooterJSONData from "../../data/footer.json"

const FooterDiv = styled.footer`
  background-color: #4caf50;
  bottom: 0;

  h3 {
    font-family: "Lora", sans-serif !important;
    font-weight: 700;
    letter-spacing: -1.8px;
    color: #fff;
  }

  p {
    font-family: "Source Sans Pro", sans-serif !important;
    font-weight: 600;
    color: #fff;
    letter-spacing: -1.25px;
    margin-bottom: ${isMobile ? "2rem" : "0"};
    line-height: 1.25;
    word-break: break-word;
    display: ${isMobile ? "block" : "inline-block"};
    width: 100%;
    clear: both;

    > a {
      font-weight: 700;

      :hover {
        text-decoration: underline;
      }
    }
  }

  ul {
    li {
      a {
        font-family: "Source Sans Pro", sans-serif !important;
        font-weight: 700;
        color: #fff;
        letter-spacing: -1.2px;
        transition: color 500ms cubic-bezier(0, 0, 0.2, 1);

        :hover {
          color: #2d9434;
        }
      }
    }
  }
`

const Footer = ({ socialLinks }) => {
  return (
    <FooterDiv className={`${isMobile ? "relative" : "fixed"} w-full py-16`}>
      <div className={`container mx-auto`}>
        <div className={`my-8 ${isMobile ? "mx-6" : "mx-32"}`}>
          <h3 className={`w-full text-left text-5xl mb-8 leading-tight`}>
            {FooterJSONData.title}
          </h3>
          {FooterJSONData.contact.map((data, index) => {
            return data.label === "Email" ? (
              <p key={index} className={`text-left text-3xl`}>
                {data.label} - <a href={`mailto:${data.url}`}>{data.url}</a>
              </p>
            ) : (
              <p key={index} className={`text-left text-3xl`}>
                {data.label} - <a href={`skype:${data.url}?call`}>{data.url}</a>
              </p>
            )
          })}
          <ul className={`flex flex-row flex-wrap my-8`}>
            {socialLinks.map((data, index) => {
              return (
                <li key={index} className={`flex items-center mr-8`}>
                  <a
                    href={data.link}
                    target={`_blank`}
                    rel={`noopener`}
                    className={`text-4xl`}
                    title={data.name}
                  >
                    {data.icon.map((result, index) => {
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={[result.style, result.type]}
                        />
                      )
                    })}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </FooterDiv>
  )
}

export default Footer
