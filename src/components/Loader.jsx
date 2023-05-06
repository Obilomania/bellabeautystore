import React from "react";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";

const Loader = () => {
  return (
    <Load>
      <div className="loader">
        <img src={Spinner} alt="" />
      </div>
    </Load>
  );
};

const Load = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  .loader {
    background: var(--lightVariant);
    width: 10rem;
    height: 10rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 10rem;
      height: 10rem;
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .loader {
      background: var(--lightVariant);
      width: 100%;
      height: 100vh;
      img {
        width: 10%;
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .loader {
      background: var(--lightVariant);
      width: 100%;
      height: 100vh;
      img {
        width: 10%;
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .loader {
      background: var(--lightVariant);
      width: 100%;
      height: 100vh;
      img {
        width: 10%;
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .loader {
      background: var(--lightVariant);
      width: 100%;
      height: 100vh;
      img {
        width: 10%;
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
export default Loader;
