import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const HomeLandingSlider = () => {
  return (
    <HomeSlider>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/VxkWcSV/Slide3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/yRynpd0/Slide1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/L1g2rcF/Slide2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </HomeSlider>
  );
};

const HomeSlider = styled.div`
  z-index: 2;
  img {
    height:60vh;
  }
`;
export default HomeLandingSlider;
