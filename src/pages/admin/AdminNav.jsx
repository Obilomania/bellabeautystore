import React from "react";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/slice/authSlice";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const AdminNav = () => {
  const userName = useSelector(selectUserName);
  return (
    <AdNav>
      <div className="user">
        <BiUser size={40} className="userIcon" />
        <h3>{userName}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/products" className={activeLink}>
              All Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/add-product/ADD" className={activeLink}>
              Add Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </AdNav>
  );
};

const AdNav = styled.div`
  position: relative;
  top:0;
  height: 90vh;
  border-right: 1px solid var(--white);
  width:100%;
  li {
    list-style: none;
  }
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    width: 100%;
    background: var(--background);
    border-top: 1px solid white;
    color: var(--white);
    gap: 1rem;
  }
  h3 {
    color: var(--white);
  }
  .userIcon {
    background: var(--white);
    color: var(--background);
    border: 1px solid white;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    font-weight: lighter;
    text-align: center;
  }
  a {
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    width: 100%;
    transition: 400ms all ease;
    font-weight: 600;
    color: var(--primary);
  }
  a:hover {
    color: red;
    font-size: 1.3rem;
  }
  hr {
    width: 100%;
  }
  nav ul li {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    position: relative;
  }
  .active {
    cursor: pointer;
    color: var(--secondary);
  }

  .active::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: var(--secondary);
  }
`;

export default AdminNav;
