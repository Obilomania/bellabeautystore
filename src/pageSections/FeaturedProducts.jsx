import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FeaturedProducts = () => {
  return (
    <Featured>
      <h2 className="text-center">Featured Products</h2>
      <div className="feat-container">
        <div className="F-content butters">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Butters</h4>
            <LazyLoadImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/300px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content herbs">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Herbs</h4>
            <LazyLoadImage
              src="https://i.ibb.co/sQqKYY5/neem-Leaf-powder.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content seeds">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Seeds</h4>
            <LazyLoadImage
              src="https://i.ibb.co/Js3Q0xK/fenugreek-on-a-spoon.webp"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content petals">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Petals</h4>
            <LazyLoadImage
              src="https://i.ibb.co/qFqPSHG/sun-flower.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content spices">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Spices</h4>
            <LazyLoadImage
              src="https://i.ibb.co/4TtW65z/pomegranate-powder.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content oil">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Oil</h4>
            <LazyLoadImage
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/12/essentialOils-899747886-770x533-1.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>
        <div className="F-content whitening">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Whitening</h4>
            <LazyLoadImage
              src="https://cpimg.tistatic.com/05410014/b/4/White-Bleaching-Powder.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content raw-materials">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Raw Materials</h4>
            <LazyLoadImage
              src="https://i.ibb.co/mBb7HRK/ashwaganda.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>
        <div className="F-content fragrances">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Fragrances</h4>
            <LazyLoadImage
              src="https://adminportal.bmvfragrances.com/blogimages/fragrance-oil.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>

        <div className="F-content others">
          <Link to="/products">
            <div className="overlay"></div>
            <h4>Others</h4>
            <LazyLoadImage
              src="https://i.ibb.co/4TtW65z/pomegranate-powder.jpg"
              alt="slide"
              effect="blur"
              className="img"
            />
          </Link>
        </div>
      </div>
    </Featured>
  );
};
const Featured = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  h2 {
    margin: 1.5rem 0;
  }
  .feat-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
  }
  .F-content {
    position: relative;
    display: flex;
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 1rem 1rem 1rem -1rem #1d8725;
    cursor: pointer;
    h4 {
      display: none;
    }
    .overlay {
      transition: var(--transition);
    }
    &:hover {
      .overlay {
        width: 15rem;
        height: 15rem;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
      }
      h4 {
        display: block;
        z-index: 4;
        color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  }
  img {
    width: 15rem;
    height: 15rem;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    height: fit-content;
    .feat-container {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .F-content {
      position: relative;
      display: flex;
      width: 90%;
      height: 15rem;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 1rem 1rem 1rem -1rem #1d8725;
      cursor: pointer;
      h4 {
        display: block;
        z-index: 4;
        color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      .overlay {
        width: 10rem;
        height: 2rem;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img {
      width: 323px;
      height: 15rem;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    height: fit-content;
    .feat-container {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .F-content {
      position: relative;
      display: flex;
      width: 15rem;
      height: 15rem;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 1rem 1rem 1rem -1rem #1d8725;
      cursor: pointer;
      h4 {
        display: block;
        z-index: 4;
        color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      .overlay {
        width: 10rem;
        height: 2rem;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img {
      width: 15rem;
      height: 15rem;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    height: fit-content;
    overflow:hidden;
    .feat-container {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .F-content {
      position: relative;
      display: flex;
      width: fit-content;
      height: 10rem;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 1rem 1rem 1rem -1rem #1d8725;
      cursor: pointer;
      h4 {
        display: block;
        z-index: 4;
        color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-weight:400;
        font-size:.8rem;
      }
      .overlay {
        width: 7rem;
        height: 2rem;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;


export default FeaturedProducts;
