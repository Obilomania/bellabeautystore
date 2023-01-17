import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BG from "../../assets/BenefitBG.png";

const benefitSliderData = [
  { image: "/images/BenefitSlide1.jpg" },
  { image: "/images/BenefitSlide2.jpg" },
  { image: "/images/BenefitSlide3.jpg" },
  { image: "/images/BenefitSlide4.jpg" },
  { image: "/images/BenefitSlide5.jpg" },
  { image: "/images/BenefitSlide6.jpg" },
];

const BenefitSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = benefitSliderData.length;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <BenefitLand>
      <div className="carousel">
        <div className="carouselContainer">
          <div className="overlay"></div>
          {benefitSliderData.map((slide, index) => {
            const { image } = slide;
            return (
              <div
                key={index}
                className={index === currentSlide ? "slide current" : "slide"}
              >
                {index === currentSlide && (
                  <>
                    <img src={image} alt="slide" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="benefitContent"></div>
      <div className="benefitBG">
        <img src={BG} alt="" />
      </div>
    </BenefitLand>
  );
};

const BenefitLand = styled.div`
  height: 58vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  .carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .carouselContainer {
    overflow: hidden;
    height: 58vh;
    position: relative;
    z-index: 3;
  }
  img {
    width: 60%;
    height: 100%;
  }
  .overlay {
    width: 60%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .landingContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background: rgba(124, 124, 124, 0.6);
    padding: 3rem 5rem;
    border-radius: 1rem;
    opacity: 0;
  }
  .benefitBG {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 60vh;
    z-index: 4;
  }
  @media screen and (max-width: 940px) {
    height: 70vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    .carousel {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .carouselContainer {
      overflow: hidden;
      height: 70vh;
      position: relative;
      z-index: 3;
    }
    img {
      width: 60%;
      height: 100%;
      position:absolute;
    }
    .overlay {
      width: 60%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
    .landingContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      background: rgba(124, 124, 124, 0.6);
      padding: 3rem 5rem;
      border-radius: 1rem;
      opacity: 0;
    }
    .benefitBG {
      position: absolute;
      top: 0;
      right: 0;
      width: 80%;
      height: 60vh;
      z-index: 4;
    }
  }
`;
export default BenefitSlide;
