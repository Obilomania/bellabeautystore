import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { db } from "../../firebase/Config";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const obj = { id: id, ...docSnap.data() };
      setProduct(obj);
    } else {
      toast.error("No such Product!");
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Detail>
      <br />
      <br />
      <br />
      <h3>Product Details</h3>
      {product === null ? (
        <Loader />
      ) : (
        <>
          <div className="detailContainer">
            <div className="detail">
              <div className="productImage">
                <LazyLoadImage
                  src={product.imageURL}
                  alt={product.name}
                  effect="blur"
                />
              </div>
              <div className="detailContent">
                <div className="d-Name ctn">
                  <p className="ctn-P">
                    <b>Name :</b>
                  </p>
                  <p>{product.name}</p>
                </div>

                <div className="d-Category ctn">
                  <p className="ctn-P">
                    <b>Category :</b>
                  </p>
                  <p>{product.category}</p>
                </div>

                <div className="d-Description ctn">
                  <p className="ctn-P">
                    <b>Description :</b>
                  </p>
                  <p>{product.desc}</p>
                </div>

                <div className="d-Benefits ctn">
                  <p className="ctn-P">
                    <b>Benefits :</b>
                  </p>
                  <ul>
                    <li>{product.benefit1}</li>
                    <li>{product.benefit2}</li>
                    <li>{product.benefit3}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Link to="/products">Back to Products</Link>
              <Link to="/contact">Make Enquiry</Link>
            </div>
          </div>
        </>
      )}
    </Detail>
  );
};

const Detail = styled.div`
  padding: 7rem 10rem;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  .detailContainer {
    width: 100%;
  }
  .detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5rem;
  }
  .detailContent {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  h3 {
    text-align: center;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .productImage {
    width: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 30rem;
    border-radius: 0.5rem;
  }
  .ctn {
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    a {
      width: 10rem;
      text-align: center;
      color: white;
      background: var(--background);
      padding: 0.3rem 0;
      border-radius: 0.3rem;
      transition: var(--transition);
      text-decoration: none;
      &:hover {
        width: 10rem;
        text-align: center;
        color: var(--primary);
        background: var(--lightVariant);
        padding: 0.3rem 0;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
  }

  @media screen and (max-width: 940px) {
    padding: 7rem 1rem 2rem 1rem;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .detailContainer {
      width: 100%;
    }
    .detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: centert;
      justify-content: space-between;
      gap: 1rem;
    }
    .detailContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
    h3 {
      text-align: center;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }
    .productImage {
      width: 70%;
      height: 14rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      overflow: hidden;
      border-radius: 0.3rem;
    }
    img {
      width: 100%;
      height: 30rem;
      border-radius: 0.5rem;
      object-fit: contain;
    }
    p {
      font-size: 0.7rem;
    }
    ul {
      font-size: 0.7rem;
      margin-left: 1rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      a {
        width: 100%;
        text-align: center;
        color: white;
        background: var(--background);
        padding: 0.3rem 0;
        border-radius: 0.3rem;
        transition: var(--transition);
        font-size: 0.7rem;
        &:hover {
          width: 10rem;
          text-align: center;
          color: var(--primary);
          background: var(--lightVariant);
          padding: 0.3rem 0;
          border-radius: 0.3rem;
          border: 1px solid var(--primary);
        }
      }
    }
  }
`;
export default ProductDetail;
