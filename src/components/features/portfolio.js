import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel"

const PortfolioDiv = styled.div``

const Portfolio = ({ data }) => {
  return (
    <PortfolioDiv>
      <CarouselProvider
        visibleSlides={3}
        totalSlides={data.length}
        step={1}
        naturalSlideWidth={536}
        naturalSlideHeight={711}
        hasMasterSpinner
      >
        <Slider className={`portfolio-slider`}>
          {data.caseStudies.map((result, index) => {
            return (
              <Slide key={index}>
                <Image src={result.featuredImage} />
              </Slide>
            )
          })}
        </Slider>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
      </CarouselProvider>
    </PortfolioDiv>
  )
}

export default Portfolio
