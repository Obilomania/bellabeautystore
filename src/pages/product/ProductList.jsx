import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  selectFilteredProducts,
} from "../../redux/slice/filterSlice";
import Pagination from "../../components/Pagination";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Latest");
  const filteredProducts = useSelector(selectFilteredProducts);

  //for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  //To get current Product
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);


   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <PList><br />
      <h2>Product List</h2>
      <div className="top">
        <div className="icons">
          <BsFillGridFill size={22} color="red" onClick={() => setGrid(true)} />
          <FaListAlt size={24} color="#1d8725" onClick={() => setGrid(false)} />
          <p>
            <b>{filteredProducts.length} </b>products Found
          </p>
        </div>
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="sort">
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>

      <div className={grid ? "grid" : "list"}>
        {products.length === 0 ? (
          <p>No Product Found...</p>
        ) : (
          <>
            {currentProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalProducts={filteredProducts.length}
      />
    </PList>
  );
};

const PList = styled.div`
  width: 100%;
  padding: 0 5rem;
  h2 {
    text-align: center;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 1rem 0;
  }
  .top {
    width: 100%;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-top: 1rem;
    }
    & > * {
      margin-right: 7px;
      cursor: pointer;
    }
  }
  .sort {
    label {
      font-size: 1rem;
      font-weight: 500;
      margin: 0 5px;
    }
    select {
      font-size: 1rem;
      font-weight: 300;
      border: none;
      border-bottom: 1px solid #777;
      outline: none;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    .grid {
      display: flex;
      gap: 1.5rem;
      margin: 1rem 0;
    }

    .top {
      width: 100%;
      border-bottom: 2px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .icons {
      display: none;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 1rem;
      }
      & > * {
        margin-right: 7px;
        cursor: pointer;
      }
    }
    .sort {
      label {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 5px;
      }
      select {
        font-size: 1rem;
        font-weight: 300;
        border: none;
        border-bottom: 1px solid #777;
        outline: none;
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    .grid {
      display: flex;
      gap: 1.5rem;
      margin: 1rem 0;
    }

    .top {
      width: 100%;
      border-bottom: 2px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .icons {
      display: none;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 1rem;
      }
      & > * {
        margin-right: 7px;
        cursor: pointer;
      }
    }
    .sort {
      label {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 5px;
      }
      select {
        font-size: 1rem;
        font-weight: 300;
        border: none;
        border-bottom: 1px solid #777;
        outline: none;
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0rem;
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 1rem 0;
    }

    .top {
      width: 100%;
      border-bottom: 2px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .icons {
      display: none;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 1rem;
      }
      & > * {
        margin-right: 7px;
        cursor: pointer;
      }
    }
    .sort {
      display:none;
      label {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 5px;
      }
      select {
        font-size: 1rem;
        font-weight: 300;
        border: none;
        border-bottom: 1px solid #777;
        outline: none;
        margin-bottom: 1rem;
      }
    }
  }
  
`;
export default ProductList;
