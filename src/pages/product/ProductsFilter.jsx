import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FILTER_BY_CATEGORY } from "../../redux/slice/filterSlice";
import { selectProducts } from "../../redux/slice/productSlice";

const ProductsFilter = () => {
  const products = useSelector(selectProducts);
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  return (
    <Filter>
      <h4>Categories</h4>
      <div className="category">
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? "active" : null}
              onClick={() => filterProducts(cat)}
            >
              <span>&#8250;</span> {cat}
            </button>
          );
        })}
      </div>
    </Filter>
  );
};
const Filter = styled.div`
  padding-left: 3rem;
  h4 {
    margin-top: 2rem;
  }
  .category {
    font-size: 1rem;
  }
  .category button {
    display: block;
    text-align: left;
    width: 80%;
    height: 3rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #777;
  }
  select {
    font-size: 1rem;
    font-weight: 300;
    padding: 5px;
    font-size: 1rem;
    width: 80%;
    border: 1px solid #777;
    border-radius: 3px;
    outline: none;
  }
  .filterBtn {
    width: 13rem;
    background-color: red;
    border: none;
    padding: 0.6rem 0;
    border-radius: 0.5rem;
    color: white;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .filterBtn {
    width: 100%;
  }
  .brand {
    select {
      width: 100%;
    }
  }

  .active {
    position: relative;
    margin-bottom: 2px;
    padding-left: 1rem;
  }

  .active::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background-color: red;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 0rem;
    flex-direction: column;
    h4 {
      margin-top: 2rem;
      display: none;
    }
    .category {
      width: 80%;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      display: none;
    }
    .category button {
      display: block;
      text-align: left;
      width: 80%;
      height: 3rem;
      font-size: 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 0px solid #777;
      span {
        display: none;
      }
    }
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;
      font-size: 1rem;
      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }
    .filterBtn {
      width: 13rem;
      background-color: red;
      border: none;
      padding: 0.6rem 0;
      border-radius: 0.5rem;
      color: white;
      margin-bottom: 0rem;
      cursor: pointer;
    }
    .active {
      position: relative;
      margin-bottom: 2px;
      padding-left: 0rem;
      color: red;
    }

    .active::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 1rem;
      width: 2px;
      display: none;
      height: 30%;
      background-color: none;
      border-bottom: 1px solid red;
    }
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 0rem;
    flex-direction: column;
    h4 {
      margin-top: 2rem;
      display: none;
    }
    .category {
      width: 80%;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      display: none;
    }
    .category button {
      display: block;
      text-align: left;
      width: 80%;
      height: 3rem;
      font-size: 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 0px solid #777;
      span {
        display: none;
      }
    }
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;
      font-size: 1rem;
      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }
    .filterBtn {
      width: 13rem;
      background-color: red;
      border: none;
      padding: 0.6rem 0;
      border-radius: 0.5rem;
      color: white;
      margin-bottom: 0rem;
      cursor: pointer;
    }
    .active {
      position: relative;
      margin-bottom: 2px;
      padding-left: 0rem;
      color: red;
    }

    .active::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 1rem;
      width: 2px;
      display: none;
      height: 30%;
      background-color: none;
      border-bottom: 1px solid red;
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 0rem;
    flex-direction: column;
    h4 {
      margin-top: 2rem;
      display: none;
    }
    .category {
      width: 80%;
      font-size: 0.8rem;
      display: none;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .category button {
      display: block;
      text-align: left;
      width: 80%;
      height: 3rem;
      font-size: 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 0px solid #777;
      span {
        display: none;
      }
    }
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;
      font-size: 1rem;
      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }
    .filterBtn {
      width: 13rem;
      background-color: red;
      border: none;
      padding: 0.6rem 0;
      border-radius: 0.5rem;
      color: white;
      margin-bottom: 0rem;
      cursor: pointer;
    }
    .active {
      position: relative;
      margin-bottom: 2px;
      padding-left: 0rem;
      color: red;
    }

    .active::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 1rem;
      width: 2px;
      display: none;
      height: 30%;
      background-color: none;
      border-bottom: 1px solid red;
    }
  }
  @media screen and (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 0rem;
    flex-direction: column;
    h4 {
      margin-top: 2rem;
      text-align: center;
      display: none;
    }
    .category {
      width: 80%;
      font-size: 0.8rem;
      display: none;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .category button {
      display: block;
      text-align: left;
      width: 80%;
      height: 3rem;
      font-size: 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 0px solid #777;
      span {
        display: none;
      }
    }
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;
      font-size: 1rem;
      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }
    .filterBtn {
      width: 13rem;
      background-color: red;
      border: none;
      padding: 0.6rem 0;
      border-radius: 0.5rem;
      color: white;
      margin-bottom: 0rem;
      cursor: pointer;
    }
    .active {
      position: relative;
      margin-bottom: 2px;
      padding-left: 0rem;
      color: red;
    }

    .active::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 1rem;
      width: 2px;
      display: none;
      height: 30%;
      background-color: none;
      border-bottom: 1px solid red;
    }
  }
`;
export default ProductsFilter;
