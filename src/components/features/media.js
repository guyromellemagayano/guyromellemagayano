import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

import Description from "./description"
import Title from "./title"

import BackEndSVGImg from "../../images/back-end.svg"
import DatabaseSVGImg from "../../images/database.svg"
import FrontEndSVGImg from "../../images/front-end.svg"
import ProjectManagementSVGImg from "../../images/project-management.svg"
import SEOSVGImg from "../../images/seo.svg"
import ServerAdministrationSVGImg from "../../images/server-administration.svg"
import VersionControlSVGImg from "../../images/version-control.svg"
import WebAppSVGImg from "../../images/web-app.svg"
import WebDesignSVGImg from "../../images/web-design.svg"
import WebsiteSVGImg from "../../images/website.svg"

const MediaDiv = styled.div`
  img {
    width: auto;
    max-width: calc(100% - 94%);
    height: auto;
    display: block;
    filter: invert(55%) sepia(64%) saturate(425%) hue-rotate(73deg)
      brightness(94%) contrast(88%);

    @media only screen and (min-width: 320px) and (max-width: 960px) {
      max-width: calc(100% - 65%);
    }
  }
`

const Media = ({ fileName, alt, title, description }) => {
  return (
    <MediaDiv className={`${isMobile ? "block" : "flex items-start"} my-12`}>
      {alt.includes(fileName) ? (
        fileName === "web-design" ? (
          <img
            src={WebDesignSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "web-app" ? (
          <img
            src={WebAppSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "web-site" ? (
          <img
            src={WebsiteSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "database" ? (
          <img
            src={DatabaseSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "seo" ? (
          <img
            src={SEOSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "front-end" ? (
          <img
            src={FrontEndSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "back-end" ? (
          <img
            src={BackEndSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "version-control" ? (
          <img
            src={VersionControlSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "server-administration" ? (
          <img
            src={ServerAdministrationSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "web-design" ? (
          <img
            src={WebDesignSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : fileName === "project-management" ? (
          <img
            src={ProjectManagementSVGImg}
            className={`${isMobile ? "mr-0 mb-10" : "mr-12"}`}
            alt={alt}
            draggable={false}
          />
        ) : null
      ) : null}
      <div className={`flex flex-auto flex-wrap flex-row clear-both`}>
        <Title text={title} className={`flex-none flex-basis-3`} />
        <Description text={description} className={`flex-none flex-basis-3`} />
      </div>
    </MediaDiv>
  )
}

export default Media
