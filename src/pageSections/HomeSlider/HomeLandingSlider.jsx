import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLandingSlider = () => {
  return (
    <HomeSlider>
      <div className="overlay"></div>
      <div className="overlayContent">
        <div className="content">
          <h1>Bella Beauty Organics</h1>
          <div className="buttons">
            <Link to="/products">View Products</Link>
            <Link to="/contact">Request Quote</Link>
          </div>
        </div>
      </div>
      <div className="carouselSlide">
        <Carousel fade controls={false} indicators={false}>
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
      </div>
    </HomeSlider>
  );
};

const HomeSlider = styled.div`
  width: 100%;
  overflow: hidden;
  .overlay {
    width: 100%;
    height: 60vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
  }
  .overlayContent {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    z-index: 4;
    background: rgba(255, 255, 255, 0.3);
    width: 50rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    h1 {
      color: var(--white);
      margin-bottom: 2rem;
      font-weight: 400;
      font-size: 4rem;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      a {
        text-decoration: none;
        color: white;
        border: 0.2rem solid var(--white);
        padding: 0.5rem 2rem;
        transition: var(--transition);
        border-radius: 0.3rem;
        &:hover {
          background: var(--white);
          color: grey;
          border: 0.2rem solid var(--white);
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  z-index: 2;
  img {
    height: 60vh;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 60vh;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 2;
    }
    .overlayContent {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      z-index: 4;
      background: rgba(255, 255, 255, 0.3);
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      h1 {
        color: var(--white);
        margin-bottom: 2rem;
        font-size:3rem;
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        a {
          text-decoration: none;
          color: white;
          border: 0.2rem solid var(--white);
          padding: 0.5rem 2rem;
          transition: var(--transition);
          border-radius: 0.3rem;
          &:hover {
            background: var(--white);
            color: grey;
            border: 0.2rem solid var(--white);
          }
        }
      }
    }
    z-index: 2;
    img {
      height: 60vh;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    overflow-x: hidden;
    .carouselSlide {
      width: 100%;
      overflow: hidden;
    }
    .overlay {
      width: 100%;
      height: 60vh;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 2;
      overflow: hidden;
    }
    .overlayContent {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      z-index: 4;
      background: rgba(255, 255, 255, 0.3);
      width: 90%;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      h1 {
        color: var(--white);
        margin-bottom: 2rem;
        font-size: 1.2rem;
        text-align: center;
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        a {
          text-decoration: none;
          color: white;
          border: 0.1rem solid var(--white);
          padding: 0.5rem 0.7rem;
          transition: var(--transition);
          border-radius: 0.3rem;
          font-size: 0.7rem;
          &:hover {
            background: var(--white);
            color: grey;
            border: 0.2rem solid var(--white);
          }
        }
      }
    }
    z-index: 2;
    img {
      height: 60vh;
      width: 100%;
    }
  }
`;
export default HomeLandingSlider;
