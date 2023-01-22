import React, { useState } from "react";
import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Latest");
  // const filteredProducts = useSelector(selectFilteredProducts);

  const dispatch = useDispatch();

  return (
    <PList>
      <div className="top">
        <div className="icons">
          <BsFillGridFill size={22} color="red" onClick={() => setGrid(true)} />
          <FaListAlt size={24} color="#1d8725" onClick={() => setGrid(false)} />
          <p>
            <b>10 </b>products Found
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
            {products.map((product) => {
              {
                /* const {} = product; */
              }
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </PList>
  );
};

const PList = styled.div`
  width: 100%;
  padding: 0 5rem;
  .grid {
    display: flex;
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
    padding: 1rem;
    .grid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
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
  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 1rem;
    .grid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
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
`;
export default ProductList;