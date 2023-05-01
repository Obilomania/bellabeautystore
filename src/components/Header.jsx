import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/Config";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "./HiddenLink";
import { AdminLink } from "./AdminRoute";
import Logo from "../assets/Logo.png";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(!showNav);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //Log out Function
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("LogOut Successful..");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //Function to Monitor When a user is signed in by Firebase
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uCapName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setUserName(uCapName);
        } else {
          setUserName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : userName,
            userID: user.uid,
          })
        );
      } else {
        setUserName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, userName]);

  return (
    <Nav>
      <div className="navBar">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="" className="logo" />
          </NavLink>
        </div>
        <div
          className={showNav ? "navOverlay" : "closeNavOverlay"}
          onClick={closeNav}
        ></div>
        <div className={showNav ? "navLinks" : "navLinksClose"}>
          <ul>
            <li onClick={closeNav}>
              <AdminLink>
                <Link to="/admin/products" className="adminBtn">
                  Admin
                </Link>
              </AdminLink>
            </li>
            <li onClick={closeNav}>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <ShowOnLogin>
              <li>
                <a href="#home" className="userNameTag">
                  <FaUserCircle size={16} />
                  Hi, {userName}
                </a>
              </li>
            </ShowOnLogin>
            <li onClick={closeNav}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={closeNav}>
              <NavLink to="/products">All Products</NavLink>
            </li>
            <li onClick={closeNav}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <ShowOnLogout>
              {/* <li onClick={closeNav}>
                <NavLink to="/login">Login</NavLink>
              </li>

              <li onClick={closeNav}>
                <NavLink to="/register">Register</NavLink>
              </li> */}
            </ShowOnLogout>
            <ShowOnLogin>
              <li onClick={closeNav}>
                <NavLink to="/home" onClick={logoutUser}>
                  LogOut
                </NavLink>
              </li>
            </ShowOnLogin>
          </ul>
        </div>
        <div className="endNav">
          {/* {cart} */}
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
  height: 10vh;
  background: var(--background);
  color: var(--white);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  li {
    list-style: none;
  }
  .logo {
    width: 8rem;
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
  .adminBtn {
    color: white;
    background: red;
    padding: 0.3rem 1rem;
    border-radius: 0.7rem;
  }
  a {
    color: var(--white);
    transition: var(--transition);
    text-decoration: none;
  }
  a:hover {
    color: var(--lightVariant);
  }
  .navBar .active {
    border-bottom: 0.2rem solid var(--white);
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
  .userNameTag {
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
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
      padding-top: 3rem;
      left: 0;
      top: 8vh;
      width: 60%;
      height: 100vh;
      gap: 4rem;
      transition: var(--transition);
      z-index: 10;
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
      z-index: 10;
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
      z-index: 9;
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
      z-index: 9;
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
      z-index: 10;
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
      z-index: 10;
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
      z-index: 9;
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
      z-index: 9;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 600px) {
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
    .logo {
      color: var(--white);
      font-size: 1.4rem;
      width: 5rem;
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
      z-index: 10;
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
      z-index: 10;
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
      z-index: 9;
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
      z-index: 9;
      cursor: pointer;
    }
  }
`;
export default Header;
