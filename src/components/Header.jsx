import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";

const cart = (
  <div className="cart">
    <Link to="/cart">
      <BsCart3 size={20} className="icons" /> <p>0</p>
    </Link>
  </div>
);

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(!showNav);
  return (
    <Nav>
      <div className="navBar">
        <div className="logo">
          <Link to="/">
            <h2>Bella Beauty</h2>
          </Link>
        </div>
        <div
          className={showNav ? "navOverlay" : "closeNavOverlay"}
          onClick={closeNav}
        ></div>
        <div className={showNav ? "navLinks" : "navLinksClose"}>
          <ul>
            <li onClick={closeNav}>
              <Link to="">Home</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">About</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">Products</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">My Orders</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">Contact</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">Login</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">Register</Link>
            </li>
          </ul>
        </div>
        <div className="endNav">
          {cart}
          <div className="hamburger">
            <p onClick={toggleNav}>
              {showNav ? (
                <AiOutlineClose size={25} className="icons" />
              ) : (
                <AiOutlineBars size={25} className="icons" />
              )}
            </p>
          </div>
        </div>
      </div>
      <div
        className={showNav ? "navOverlay" : "closeNavOverlay"}
        onClick={closeNav}
      ></div>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  height: 8vh;
  background: var(--background);
  color: var(--white);

  li {
    list-style: none;
  }
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
  }
  .logo h2 {
    color: var(--white);
  }
  a {
    color: var(--white);
    transition: var(--transition);
  }
  a:hover {
    color: var(--lightVariant);
  }
  .navLinks ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    padding-top: 0;
  }
  .navLinksClose ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    padding-top: 0;
  }
  .cart a {
    display: flex;
    color: white;
    text-decoration: none;
    position: relative;
  }
  .cart p {
    position: absolute;
    right: -0.7rem;
    top: -0.4 rem;
  }
  .hamburger {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 8vh;
    background: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--lightVariant);
    li {
      list-style: none;
    }
    .navBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;
      z-index: 10;
    }
    .logo h2 {
      color: var(--white);
      font-size: 1.4rem;
    }
    a {
      color: var(--white);
      transition: var(--transition);
    }
    a:hover {
      color: var(--lightVariant);
    }
    .navLinks ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 3rem;
      left: 0;
      top: 8vh;
      width: 60%;
      height: 100vh;
      gap: 4rem;
      transition: var(--transition);
      z-index: 2;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
    .navLinksClose ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 3rem;
      left: -100%;
      top: 8vh;
      width: 60%;
      height: 100vh;
      gap: 4rem;
      transition: var(--transition);
    }
    .cart a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      position: relative;
      margin-top: 0.5rem;
    }
    .cart p {
      position: absolute;
      right: -0.7rem;
      top: -0.4 rem;
      font-size: 0.8rem;
    }
    .endNav {
      display: flex;
      gap: 1.5rem;
    }
    .hamburger {
      display: flex;
      cursor: pointer;
      margin-top: 0.5rem;
      z-index: 2;
    }
    .navOverlay {
      display: block;
      position: absolute;
      top: 8vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
    .closeNavOverlay {
      display: none;
      position: absolute;
      top: 8vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 10vh;
    background: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--lightVariant);
    li {
      list-style: none;
    }
    .navBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;
      z-index: 10;
    }
    .logo h2 {
      color: var(--white);
      font-size: 1.4rem;
    }
    a {
      color: var(--white);
      transition: var(--transition);
    }
    a:hover {
      color: var(--lightVariant);
    }
    .navLinks ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 2rem;
      left: 0;
      top: 10vh;
      width: 60%;
      height: 100vh;
      gap: 3rem;
      transition: var(--transition);
      z-index: 2;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
    .navLinksClose ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 2rem;
      left: -100%;
      top: 10vh;
      width: 60%;
      height: 100vh;
      gap: 3rem;
      transition: var(--transition);
    }
    .cart a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      position: relative;
      margin-top: 0.5rem;
    }
    .cart p {
      position: absolute;
      right: -0.7rem;
      top: -0.4 rem;
      font-size: 0.8rem;
    }
    .endNav {
      display: flex;
      gap: 1.5rem;
    }
    .hamburger {
      display: flex;
      cursor: pointer;
      margin-top: 0.5rem;
      z-index: 2;
    }
    .navOverlay {
      display: block;
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
    .closeNavOverlay {
      display: none;
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 8vh;
    background: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--lightVariant);
    li {
      list-style: none;
    }
    .navBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;
      z-index: 10;
    }
    .logo h2 {
      color: var(--white);
      font-size: 1.4rem;
    }
    a {
      color: var(--white);
      transition: var(--transition);
    }
    a:hover {
      color: var(--lightVariant);
    }
    .navLinks ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 2rem;
      left: 0;
      top: 8vh;
      width: 60%;
      height: 70vh;
      gap: 4rem;
      transition: var(--transition);
      z-index: 2;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
    .navLinksClose ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 2rem;
      left: -100%;
      top: 8vh;
      width: 60%;
      height: 70vh;
      gap: 4rem;
      transition: var(--transition);
    }
    .cart a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      position: relative;
      margin-top: 0.5rem;
    }
    .cart p {
      position: absolute;
      right: -0.7rem;
      top: -0.4 rem;
      font-size: 0.8rem;
    }
    .endNav {
      display: flex;
      gap: 1.5rem;
    }
    .hamburger {
      display: flex;
      cursor: pointer;
      margin-top: 0.5rem;
      z-index: 2;
    }
    .navOverlay {
      display: block;
      position: absolute;
      top: 8vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
    .closeNavOverlay {
      display: none;
      position: absolute;
      top: 8vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 10vh;
    background: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--lightVariant);
    li {
      list-style: none;
    }
    .navBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;
      z-index: 10;
    }
    .logo h2 {
      color: var(--white);
      font-size: 1rem;
    }
    a {
      color: var(--white);
      transition: var(--transition);
    }
    a:hover {
      color: var(--lightVariant);
    }
    .navLinks ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 0.5rem;
      left: 0;
      top: 10vh;
      width: 60%;
      height: 70vh;
      gap: 2rem;
      padding-top: 1rem;
      transition: var(--transition);
      z-index: 2;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
    }
    .navLinksClose ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: var(--background);
      position: absolute;
      padding-top: 0.5rem;
      left: -100%;
      top: 10vh;
      width: 60%;
      height: 70vh;
      gap: 2rem;
      padding-top: 1rem;
      transition: var(--transition);
    }
    .cart a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      position: relative;
      margin-top: 0.5rem;
      font-size: 3rem;
    }
    .cart p {
      position: absolute;
      right: -0.7rem;
      top: -0.4 rem;
      font-size: 0.8rem;
    }
    .endNav {
      display: flex;
      gap: 1.5rem;
    }
    .hamburger {
      display: flex;
      cursor: pointer;
      margin-top: 0.5rem;
      z-index: 2;
    }
    .navOverlay {
      display: block;
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
    .closeNavOverlay {
      display: none;
      position: absolute;
      top: 10vh;
      left: -100%;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: var(--transition);
      z-index: 0;
      cursor: pointer;
    }
  }
`;
export default Header;
