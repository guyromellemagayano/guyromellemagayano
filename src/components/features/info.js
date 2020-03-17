import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

import ContactInfo from "./contactInfo"
import CtaButton from "./ctaButton"
import Description from "./description"
import Detail from "./detail"
import Forms from "./forms"
import Image from "./image"
import Media from "./media"
import Portfolio from "./portfolio"
import Posts from "./posts"
import Sepline from "./sepline"

const InfoDiv = styled.section`
  h2 {
    font-family: Lora;
    font-size: 5rem;
    font-weight: 700;
    color: #434e52;
    letter-spacing: -3.75px;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      font-size: 2.85rem;
      letter-spacing: -2.5px;
    }
  }

  p {
    font-weight: 400;
    color: #707070;
    letter-spacing: -0.7px;
  }
`

const Wrapper = styled.article`
  > ul {
    > li {
      border-bottom: 2px solid #dedede;

      &:last-child {
        border-bottom: 0;
      }
    }
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .tag-links {
    > li {
      border: none !important;

      a {
        font-family: Source Sans Pro, sans-serif;
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

const Info = ({ data, images }) => {
  return (
    <React.Fragment>
      {data.node ? (
        data.node.content.map((val, index) => {
          return (
            <InfoDiv
              key={index}
              className={`${
                data.node.section === "about-info"
                  ? ""
                  : data.node.section !== "home-blog"
                  ? "mb-32"
                  : "mb-20"
              } mx-6 sm:mx-10 xl:mx-0 clear-both`}
            >
              {data.node.section === "about-info" ||
              data.node.section === "blog-posts" ||
              data.node.section === "contact-form" ? null : (
                <h2
                  className={`uppercase text-left leading-tight ${
                    isMobile ? "mb-8" : "mb-0"
                  }`}
                >
                  {val.title}
                </h2>
              )}
              <Wrapper
                className={`block clear-both ${
                  data.node.section === "about-info" &&
                  val.info.includes("banner-img")
                    ? "mx-0"
                    : "mx-0 sm:mx-10 xl:mx-32"
                }`}
              >
                {val.subtitle ? (
                  <p className={`text-left text-2xl`}>{val.subtitle}</p>
                ) : null}
                {data.node.section === "home-services" ||
                data.node.section === "services-list" ||
                data.node.section === "home-work-experience" ||
                data.node.section === "blog-posts" ||
                data.node.section === "tags-list" ||
                data.node.section === "categories-list" ? (
                  <ul
                    className={`${
                      data.node.section === "blog-posts" ||
                      data.node.section === "home-services" ||
                      data.node.section === "home-work-experience"
                        ? "mt-20 mb-12"
                        : ""
                    } ${
                      data.node.section === "tags-list" ||
                      data.node.section === "categories-list"
                        ? "tag-links grid grid-cols-3"
                        : ""
                    } ${
                      data.node.section === "blog-posts"
                        ? isMobile
                          ? "home-blog-posts"
                          : "home-blog-posts grid grid-cols-2 gap-4"
                        : ""
                    }`}
                  >
                    {data.node.section === "home-services" ||
                    data.node.section === "services-list"
                      ? val.skills.map((val2, index) => {
                          return (
                            <React.Fragment key={index}>
                              {
                                <li>
                                  <Media
                                    imageDimensions={val2.thumbnail}
                                    title={val2.title}
                                    description={val2.description}
                                    images={images}
                                  />
                                </li>
                              }
                            </React.Fragment>
                          )
                        })
                      : null}
                    {data.node.section === "home-work-experience"
                      ? val.workHistory.map((val2, index) => {
                          return (
                            <React.Fragment key={index}>
                              <li>
                                <Detail
                                  company={val2.company}
                                  employmentDate={val2.employmentDate}
                                  position={val2.position}
                                  description={val2.description}
                                  keyContributions={val2.keyContributions}
                                />
                              </li>
                            </React.Fragment>
                          )
                        })
                      : null}
                  </ul>
                ) : null}
                {data.node.section === "home-about" ? (
                  <div
                    className={`flex items-start ${
                      isMobile ? "flex-col" : "flex-row"
                    }`}
                  >
                    <div
                      className={`content ${
                        isMobile
                          ? "flex-grow-0 flex-basis-1"
                          : "flex-grow-1 flex-basis-0"
                      }`}
                    >
                      {val.description.map((val2, index) => {
                        return (
                          <React.Fragment key={index}>
                            {val2.tagline !== "" && val2.tagline !== null ? (
                              <Description
                                key={index}
                                text={val2.tagline}
                                className={`title mt-20 mb-12`}
                              />
                            ) : null}
                            {val2.texts.map((val3, index) => {
                              return (
                                <Description
                                  key={index}
                                  text={val3}
                                  className={`mb-12`}
                                />
                              )
                            })}
                            {val.ctaLink.map((val3, index) => {
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
                      <Sepline />
                    </div>
                    <div
                      className={`image flex-grow-1 flex-basis-0 ${
                        isMobile ? "mt-0" : "mt-20"
                      } mb-12`}
                    >
                      {val.description.map((val2, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Image
                              imageDimensions={val2.image}
                              className={`block ${isMobile ? "ml-0" : "ml-16"}`}
                              images={images}
                            />
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
                {data.node.section === "about-info"
                  ? val.info.map((val2, index) => {
                      return (
                        <Description
                          key={index}
                          className={`mb-12`}
                          text={val2}
                        />
                      )
                    })
                  : null}
                {data.node.section === "contact-form" ? (
                  <React.Fragment key={index}>
                    {
                      <div className={`${isMobile ? "block" : "flex"}`}>
                        <div className={`${isMobile ? "w-full" : "w-3/5"}`}>
                          <Forms data={val} />
                        </div>
                        <div className={`${isMobile ? "w-full" : "w-2/5"}`}>
                          <ContactInfo data={val} />
                        </div>
                      </div>
                    }
                  </React.Fragment>
                ) : null}
                {data.node.section === "not-found-info" ||
                data.node.section === "thank-you-info"
                  ? val.description.map((val2, index) => {
                      return (
                        <React.Fragment>
                          <Description
                            key={index}
                            text={val2}
                            className={`mb-12`}
                          />
                        </React.Fragment>
                      )
                    })
                  : null}
                {data.node.section === "not-found-info" ||
                data.node.section === "home-services"
                  ? val.ctaLink.map((val2, index) => {
                      return (
                        <React.Fragment key={index}>
                          <CtaButton link={val2.link} label={val2.label} />
                          {data.node.section === "not-found-info" ? (
                            ""
                          ) : (
                            <Sepline />
                          )}
                        </React.Fragment>
                      )
                    })
                  : null}
              </Wrapper>
            </InfoDiv>
          )
        })
      ) : (
        <React.Fragment>
          <InfoDiv className={`clear-both`}>
            <Wrapper
              className={`inline-block clear-both max-w-full ${
                isMobile ? "mx-12" : "mx-32"
              }`}
            >
              <ul
                className={`${
                  isMobile
                    ? "home-blog-posts"
                    : "home-blog-posts grid grid-cols-2 gap-4"
                } mb-20`}
              >
                {data.edges.map((val, index) => {
                  return (
                    <React.Fragment key={index}>
                      {
                        <li>
                          <Posts data={val} />
                        </li>
                      }
                    </React.Fragment>
                  )
                })}
              </ul>
            </Wrapper>
          </InfoDiv>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Info
