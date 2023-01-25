import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNav from "./AdminNav";
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
            <Route path="products" element={<ViewProducts />} />
            <Route path="add-product/:id" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Administrator>
  );
};

const Administrator = styled.div`
  padding-top: 8vh;
  .admin {
    display: flex;
    align-items: flex-start;
  }
  .navbar {
    width: 25%;
    /* min-height: 80vh; */
  }
  .content {
    width: 75%;
    padding: 0 1rem;
  }
`;
export default Admin;
