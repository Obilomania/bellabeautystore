import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <div className="aboutUs">
        <h5>ABOUT US</h5>
        <div className="content">
          <Link to="/about">Who we are</Link>
          <Link to="/about">Mission & Vission</Link>
        </div>
      </div>
      <div className="policies">
        <h5>POLICIES</h5>
        <div className="content">
          <Link to="/about">FAQ</Link>
          <Link to="/about">Terms and Conditions</Link>
        </div>
      </div>
      <div className="contact">
        <h5>CONTACT INFO</h5>
        <div className="content">
          <div className="contentInfo">
            <p>
              <b>Address:</b>
            </p>
            <p>156 Kudirat Abiola Way, Ikeja Lagos</p>
          </div>
          <hr />
          <div className="contentInfo">
            <p>
              <b>Phone:</b>
            </p>
            <p>08033954540</p>
          </div>
          <hr />
          <div className="contentInfo">
            <p>
              <b>Email:</b>
            </p>
            <p>bellabeauty@gmail.com</p>
          </div>
          <hr />
        </div>
      </div>
    </Foot>
  );
};

const Foot = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: var(--background);
  color: white;
  .content {
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-weight: bolder;
    border-bottom: 1px solid var(--white);
  }
  hr {
    background: var(--white);
    width: 100%;
    height: 1px;
  }
  p,
  a {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 2rem 1rem;
    background: var(--background);
    color: white;
    gap: 2rem;
    .aboutUs,
    .policies,
    .contact {
      margin: auto;
      width: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    h4 {
      font-weight: bolder;
      border-bottom: 1px solid var(--white);
      text-align: center;
    }
    hr {
      background: var(--white);
      width: 100%;
      height: 1px;
    }
    p,
    a {
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
export default Footer;
