import React, { useEffect } from "react"
import styled from "styled-components"
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const PortfolioDiv = styled.div`
  .portfolio-slider {
    position: relative;
    margin: auto;

    .portfolio-slide {
      position: relative !important;
      z-index: 999;
      cursor: pointer;
    }
  }

  .portfolio-item {
    display: none;
  }

  @media only screen and (min-width: 961px) {
    .button-back {
      background-image: url(./images/nav.svg);
      position: absolute;
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
    }
  
    .button-next {
      background-image: url(./images/nav.svg);
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: rotate(180deg) translateY(50%);
      width: 52px;
      height: 52px;
    }

    .portfolio-item {
      display: block;
      position: absolute;
      top: 4rem;
      left: 4rem;
      
      h3,
      p {
        color: #fff !important;
      }

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.45rem
      }
    }
  }

  .dot-group {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    > button {
      width: 100%;
      max-width: 4rem;
      height: 1rem;
      background-color: #989f9c;
      margin-left: auto;
      margin-right: auto;
      position: relative;

      &:first-child {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }

      &:nth-last-child(2) {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      &.carousel__dot--selected {
        > span {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #666;
          border-radius: 15px;
        }
      }
    }
  }
`

const Portfolio = ({ data }) => {
  useEffect(() => {
    let lastCarouselDot = document.querySelectorAll(".dot-group > button")

    for (let i = 0; i < lastCarouselDot.length; i++) {
      lastCarouselDot[lastCarouselDot.length - 1].classList.add("hidden")
    }
  }, [])

  return (
    <PortfolioDiv className={`mt-20 mb-12`}>
      <CarouselProvider
        visibleSlides={2}
        totalSlides={data.caseStudies.length}
        step={1}
        naturalSlideWidth={536}
        naturalSlideHeight={711}
        hasMasterSpinner={true}
        infinite={true}
        lockOnWindowScroll={true}
        isIntrinsicHeight={true}
      >
        <div className={`portfolio-slider`}>
          <Slider className={`portfolio-slider`}>
            {data.caseStudies.map((val, index) => {
              return (
                <Slide tag={`a`} key={index} index={index} className={`portfolio-slide`}>
                  <span className={`portfolio-item`}>
                    <h3>Portfolio Name #1</h3>
                    <p>Nature of Business</p>
                  </span>
                  <Image src={val.featuredImage} draggable={false} />
                </Slide>
              )
            })}
          </Slider>
          <ButtonBack className={`button-back`} />
          <ButtonNext className={`button-next`} />
        </div>
        <DotGroup
          className={`dot-group`}
          showAsSelectedForCurrentSlideOnly={true}
        />
      </CarouselProvider>
    </PortfolioDiv>
  )
}

export default Portfolio
