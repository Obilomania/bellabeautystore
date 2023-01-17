import React from "react";
import styled from "styled-components";
import BenefitSlide from "./BenefitSlide";

const Benefits = () => {
  return (
    <Ben>
      <div className="benContent">
        <h2>Benefits Of Using Organic Products</h2>
        <ul>
          <li>Organic products contains fewer pesticides.</li>
          <li>organic Products are not genetically enhanced.</li>
          <li>Organic products are non-allergenic</li>
          <li>
            Organic skin care products work better because they are made of
            natural ingredients
          </li>
          <li>You're helping to preserve the environment</li>
          <li>Organic Products are gentle on your skin</li>
        </ul>
      </div>
      <div className="slide">
        <BenefitSlide />
      </div>
    </Ben>
  );
};

const Ben = styled.div`
  width: 100%;
  height: 58vh;
  background: var(--background);
  position: relative;
  overflow: hidden;
  h2 {
    text-align: center;
    color: var(--white);
  }
  .benContent {
    display: flex;
    gap: 1rem;
    align-items: start;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
    position: absolute;
    top: 3rem;
    right: 2rem;
    z-index: 5;
    ul {
      width: 80%;
      color: var(--white);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 70vh;
    background: var(--background);
    position: relative;
    overflow: hidden;
    h2 {
      text-align: center;
      color: var(--white);
    }
    .benContent {
      display: flex;
      gap: 1rem;
      align-items: start;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      position: absolute;
      top: 3rem;
      right: 0rem;
      z-index: 5;
      ul {
        width: 80%;
        margin: auto;
        color: var(--white);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 40vh;
    background: var(--background);
    position: relative;
    overflow: hidden;
    h2 {
      text-align: center;
      color: var(--white);
      margin: auto;
    }
    .benContent {
      display: flex;
      gap: 1rem;
      align-items: start;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      position: absolute;
      top: 2rem;
      right: 0rem;
      z-index: 5;
      ul {
        width: 90%;
        margin: auto;
        color: var(--white);
        li {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70vh;
    background: var(--background);
    position: relative;
    overflow: hidden;
    h2 {
      text-align: center;
      color: var(--white);
    }
    .benContent {
      display: flex;
      gap: 1rem;
      align-items: start;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      position: absolute;
      top: 3rem;
      right: 0rem;
      z-index: 5;
      ul {
        width: 80%;
        margin: auto;
        color: var(--white);
        li {
          font-size: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 70vh;
    background: var(--background);
    position: relative;
    overflow: hidden;
    h2 {
      text-align: center;
      color: var(--white);
    }
    .benContent {
      display: flex;
      gap: 1rem;
      align-items: start;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      position: absolute;
      top: 1rem;
      right: 0rem;
      z-index: 5;
      ul {
        width: 80%;
        margin: auto;
        color: var(--white);
        li {
          font-size: .9rem;
        }
      }
    }
  }
`;
export default Benefits;
