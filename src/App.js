import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Footer } from "./components";
import { Home, About, Contact } from "./pages";
import { Login, Register, ResetPassword } from "./pages/auth";
import { Admin } from "./pages/admin/index";
import AdminRoute from "./components/AdminRoute";
import Products from "./pages/product/Products";
import ProductDetail from "./pages/product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/logInsideTheApp" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
