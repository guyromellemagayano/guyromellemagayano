import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

import List from "./list"
import Title from "./title"
import Description from "./description"
import SubDetail from "./subDetail"

const DetailDiv = styled.div``

const Detail = ({
  company,
  employmentDate,
  position,
  description,
  keyContributions,
}) => {
  return (
    <DetailDiv className={`flex flex-row flex-wrap justify-between my-12`}>
      <Title
        text={company}
        className={`${isMobile ? "flex-basis-1" : "flex-basis-0"}`}
      />
      <SubDetail
        text={employmentDate}
        className={`${
          isMobile ? "flex-basis-1 justify-start" : "flex-basis-0 justify-end"
        } flex mb-3 regular-green`}
      />
      <SubDetail
        text={position}
        className={`flex-basis-1 flex justify-start mb-5 light-gray`}
      />
      <Description text={description} className={`mb-10 light-gray`} />
      <SubDetail
        text={`Key Contributions`}
        className={`flex-basis-1 flex justify-start mb-5 light-gray`}
      />
      <List list={keyContributions} />
    </DetailDiv>
  )
}

export default Detail
