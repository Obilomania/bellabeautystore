import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { selectProducts, STORE_PRODUCTS } from "../../redux/slice/productSlice";
import ProductList from "./ProductList";
import ProductsFilter from "./ProductsFilter";
import Spinner from "../../assets/Spinner.gif"


const Products = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(STORE_PRODUCTS({ products: data }));
    }, [dispatch, data]);


  return (
    <ProductSection>
      {" "}
      <br />
      <br />
      <br />
      <div className="product">
        <aside className="filter">
          {isLoading ? null : <ProductsFilter />}
        </aside>
        <div className="content">
          {isLoading ? (
            <img src={Spinner} alt="Loading Icon" className="loadingSpinner" />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </ProductSection>
  );
};
const ProductSection = styled.div`
width:100%;

  .product {
    display: flex;
    position: relative;
  }
  .filter {
    width: 20%;
    // border: 2px solid var(--dark-blue);
    transition: all 0.3s;
  }

  .content {
    width: 80%;
    padding-left: 5px;
    position: relative;
  }
  .icon {
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;

    & > * {
      padding-left: 5px;
    }
  }
  .loadingSpinner {
    width: 20rem;
    height: 20rem;
    position: relative;
    top: 30%;
    left: 30%;
    transform: translateX(-50%, -50%);
  }
  @media screen and (max-width: 1200px) {
    .product {
      display: flex;
      flex-direction:column;
      align-items:center;
      position: relative;
      width:100%;
    }
    .filter {
      width: 20%;
      /* // border: 2px solid var(--dark-blue); */
      transition: all 0.3s;
    }

    .content {
      width: 100%;
      padding-left: 5px;
      position: relative;
    }
    .icon {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;

      & > * {
        padding-left: 5px;
      }
    }
    .loadingSpinner {
      width: 20rem;
      height: 20rem;
      position: relative;
      top: 30%;
      left: 30%;
      transform: translateX(-50%, -50%);
    }
  }
  @media screen and (max-width: 1024px) {
    .product {
      display: flex;
      flex-direction:column;
      align-items:center;
      position: relative;
      width:100%;
    }
    .filter {
      width: 20%;
      /* // border: 2px solid var(--dark-blue); */
      transition: all 0.3s;
    }

    .content {
      width: 100%;
      padding-left: 5px;
      position: relative;
    }
    .icon {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;

      & > * {
        padding-left: 5px;
      }
    }
    .loadingSpinner {
      width: 20rem;
      height: 20rem;
      position: relative;
      top: 30%;
      left: 30%;
      transform: translateX(-50%, -50%);
    }
  }
  @media screen and (max-width: 600px) {
    .product {
      display: flex;
      flex-direction:column;
      align-items:center;
      position: relative;
      width:100%;
    }
    .filter {
      width: 20%;
      /* // border: 2px solid var(--dark-blue); */
      transition: all 0.3s;
    }

    .content {
      width: 100%;
      padding-left: 5px;
      position: relative;
    }
    .icon {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;

      & > * {
        padding-left: 5px;
      }
    }
    .loadingSpinner {
      width: 20rem;
      height: 20rem;
      position: relative;
      top: 30%;
      left: 30%;
      transform: translateX(-50%, -50%);
    }
  }
  @media screen and (max-width: 400px) {
    .product {
      display: flex;
      flex-direction:column;
      align-items:center;
      position: relative;
      width:100%;
    }
    .filter {
      width: 20%;
      /* // border: 2px solid var(--dark-blue); */
      transition: all 0.3s;
    }

    .content {
      width: 100%;
      padding-left: 5px;
      position: relative;
    }
    .icon {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;

      & > * {
        padding-left: 5px;
      }
    }
    .loadingSpinner {
      width: 20rem;
      height: 20rem;
      position: relative;
      top: 30%;
      left: 30%;
      transform: translateX(-50%, -50%);
    }
  }
`;
export default Products;