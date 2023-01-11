import React from "react";
import { useSelector } from "react-redux";
import { selectEmail } from "../redux/slice/authSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (
    userEmail === "iloanyaobinna@gmail.com" ||
    userEmail === "obilomania@gmail.com"
  ) {
    return children;
  }
  return (
    <Denied>
      <div className="adminDenial">
        <h1>Access Denied</h1>
        <p>This page can only be viewed by an Admin</p>
        <br />
        <Link to="/">&larr; Go Back Home</Link>
      </div>
    </Denied>
  );
};

export const AdminLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (
    userEmail === "iloanyaobinna@gmail.com" ||
    userEmail === "obilomania@gmail.com"
  ) {
    return children;
  }
  return null;
};

const Denied = styled.div`
  position: relative;
  padding-top: 10vh;
  height: 90vh;
  .adminDenial {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .adminDenial a {
    text-decoration: none;
    background: whitesmoke;
    padding: 0.5rem 1rem;
  }
`;
export default AdminRoute;
