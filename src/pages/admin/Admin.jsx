import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNav from "./AdminNav";
import AdminHome from "./AdminHome";
import ViewProducts from "./ViewProducts";
import AddProduct from "./AddProduct";
import styled from "styled-components";

const Admin = () => {
  return (
    <Administrator>
      <div className="admin">
        <div className="navbar">
          <AdminNav />
        </div>
        <div className="content">
          <Routes>
            <Route path="home" element={<AdminHome />} />
            <Route path="products" element={<ViewProducts />} />
            <Route path="add-product/:id" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Administrator>
  );
};

const Administrator = styled.div`
  .admin {
    display: flex;
  }
  .navbar {
    width: 25%;
    min-height: 80vh;
  }
  .content {
    width: 75%;
    padding: 0 1rem;
  }
`;
export default Admin;
