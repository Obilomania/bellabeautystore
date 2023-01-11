import React, { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    category: "",
    desc: "",
    benefit1: "",
    benefit2: "",
    benefit3: "",
  });
const categories = [
  { id: 1, name: "Butters" },
  { id: 2, name: "Herbs" },
  { id: 3, name: "Seeds" },
  { id: 4, name: "Petals" },
  { id: 5, name: "Spices" },
  { id: 6, name: "Oils" },
  { id: 7, name: "Whitening Powder" },
  { id: 8, name: "Raw Materials" },
  { id: 9, name: "Fragrances" },
  { id: 10, name: "Others..." },
];
  const handleInput = (e) => {};
  const handleImage = (e) => {};
  return (
    <Product>
      <div className="card">
        <form>
          <label>Product name:</label>
          <input
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInput(e)}
          />

          <label>product image:</label>
          <div className="group">
            <div className="progress">
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            placeholder="Product Image"
            name="image"
            onChange={(e) => handleImage(e)}
          />
          <input
            type="text"
            placeholder="Image Url"
            name="imageURL"
            value={product.imageURL}
            disabled
          />

          <label>Product Category:</label>
          <select
            name="category"
            required
            value={product.category}
            onChange={(e) => handleInput(e)}
          >
            <option value="" disabled>
              -- Choose Product Category --
            </option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <label>Description:</label>
          <textarea
            name="desc"
            value={product.desc}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows=""
          ></textarea>

          <label>Third benefit:</label>
          <textarea
            name="desc"
            value={product.benefit1}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows=""
          ></textarea>

          <label>Second benefit:</label>
          <textarea
            name="desc"
            value={product.benefit2}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows=""
          ></textarea>

          <label>Third benefit:</label>
          <textarea
            name="desc"
            value={product.benefit3}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows=""
          ></textarea>
        </form>
      </div>
    </Product>
  );
};
const Product = styled.div`
  .card {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
  }
  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
  }
  input[type="text"],
  input[type="number"],
  input[type="file"],
  input[type="email"],
  select,
  input[type="password"] {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.75rem;
    margin: 0.5rem auto;
    width: 100%;
    border: 1px solid #777;
    border-radius: 0.5rem;
    outline: none;
  }
  textarea {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.75rem;
    margin: 0.5rem auto;
    width: 100%;
    border: 1px solid #777;
    border-radius: 0.5rem;
    outline: none;
    resize:none;
  }
  .progress {
    background-color: #aaa;
    border: 1px solid transparent;
    border-radius: 0.8rem;
  }
  .progress-bar {
    background-color: #2c0355;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 1rem;
    width: 50%;
  }
  .group {
    border: 1px solid var(--dark-blue);
    padding: 0.4rem;
  }
  button {
    color: white;
    background: #2c0355;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    transition: 400ms all ease;
    cursor: pointer;
  }
  button:hover {
    border: 1px solid #2c0355;
    background: white;
    color: #2c0355;
  }
`;
export default AddProduct;
