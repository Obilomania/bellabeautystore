import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductItem = ({ grid, product, id, name, price, desc, imageURL }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <ProdItem>
      <Link to={`/product-details/${id}`}>
        <div className={grid ? "grid" : "list"}>
          <div className="img">
            <img src={imageURL} alt="{name}" />
          </div>
          <div className="content">
            <div className="details">
              <h4>{shortenText(name, 15)}</h4>
            </div>
            {!grid && <p className="description">{shortenText(desc, 150)}</p>}
            <button className="btnCart"> View Product</button>
          </div>
        </div>
      </Link>
    </ProdItem>
  );
};

const ProdItem = styled.div`
  a {
    text-decoration: none;
  }
  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15rem;
    height: 17rem;
    overflow: hidden;
    border: 1px solid var(--primary);
    padding: 2rem;
    overflow: hidden;
    border-radius: 0.5rem;
    position: relative;
    /* padding: 0rem 0rem 2rem 0rem; */
    img {
      position: absolute;
      top: 1rem;
      left: 1rem;
      border-radius: 0.5rem 0.5rem 0rem 0rem;
      width: 13rem;
      height: 10rem;
    }
    h4 {
      font-size: 1rem;
      text-align: center;
    }
    a {
      text-decoration: none;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0rem;
      width: 100%;
      background: var(--primary);
      color: var(--white);
      font-size: 0.8rem;
    }
    .content {
      position: absolute;
      bottom: 1rem;
    }
  }

  .list {
    width: 100%;
    height: 9rem;
    display: flex;
    background-color: #fff;
    margin: 1rem 0;
    border-bottom: 0.1rem solid lightgray;
    border-radius: 0.5rem;
    .img {
      width: 9rem;
      height: 9rem;
      overflow: hidden;
      border-right: 2px solid #eee;
      img {
        width: 10rem;
        height: 10rem;
        cursor: pointer;
      }
    }

    .content {
      position: relative;
      padding: 1rem;
      width: 85%;
      .details {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        h4 {
          font-weight: 400;
        }
        p {
          font-weight: 500;
          color: red;
        }
      }
      button {
        position: absolute;
        bottom: 0;
        left: 1rem;
        width: 100%;
        background-color: red;
        border: none;
        padding: 0.1rem 0;
        border-radius: 0.5rem;
        color: white;
        margin-bottom: 1rem;
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    a {
      text-decoration: none;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 15rem;
      height: 17rem;
      overflow: hidden;
      border: 1px solid var(--primary);
      padding: 2rem;
      overflow: hidden;
      border-radius: 0.5rem;
      position: relative;
      /* padding: 0rem 0rem 2rem 0rem; */
      img {
        position: absolute;
        top: 1rem;
        left: 1rem;
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        width: 13rem;
        height: 10rem;
      }
      h4 {
        font-size: 1rem;
        text-align: center;
      }
      a {
        text-decoration: none;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0rem;
        width: 100%;
        background: var(--primary);
        color: var(--white);
        font-size: 0.8rem;
      }
      .content {
        position: absolute;
        bottom: 1rem;
      }
    }

    .list {
      width: 100%;
      height: 9rem;
      display: flex;
      background-color: #fff;
      margin: 1rem 0;
      border-bottom: 0.1rem solid lightgray;
      border-radius: 0.5rem;
      .img {
        width: 9rem;
        height: 9rem;
        overflow: hidden;
        border-right: 2px solid #eee;
        img {
          width: 10rem;
          height: 10rem;
          cursor: pointer;
        }
      }

      .content {
        position: relative;
        padding: 1rem;
        width: 85%;
        .details {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          h4 {
            font-weight: 400;
          }
          p {
            font-weight: 500;
            color: red;
          }
        }
        button {
          position: absolute;
          bottom: 0;
          left: 1rem;
          width: 100%;
          background-color: red;
          border: none;
          padding: 0.1rem 0;
          border-radius: 0.5rem;
          color: white;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      text-decoration: none;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 15rem;
      height: 17rem;
      overflow: hidden;
      border: 1px solid var(--primary);
      padding: 2rem;
      overflow: hidden;
      border-radius: 0.5rem;
      position: relative;
      /* padding: 0rem 0rem 2rem 0rem; */
      img {
        position: absolute;
        top: 1rem;
        left: 1rem;
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        width: 13rem;
        height: 10rem;
      }
      h4 {
        font-size: 1rem;
        text-align: center;
      }
      a {
        text-decoration: none;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0rem;
        width: 100%;
        background: var(--primary);
        color: var(--white);
        font-size: 0.8rem;
      }
      .content {
        position: absolute;
        bottom: 1rem;
      }
    }

    .list {
      width: 100%;
      height: 9rem;
      display: flex;
      background-color: #fff;
      margin: 1rem 0;
      border-bottom: 0.1rem solid lightgray;
      border-radius: 0.5rem;
      .img {
        width: 9rem;
        height: 9rem;
        overflow: hidden;
        border-right: 2px solid #eee;
        img {
          width: 10rem;
          height: 10rem;
          cursor: pointer;
        }
      }

      .content {
        position: relative;
        padding: 1rem;
        width: 85%;
        .details {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          h4 {
            font-weight: 400;
          }
          p {
            font-weight: 500;
            color: red;
          }
        }
        button {
          position: absolute;
          bottom: 0;
          left: 1rem;
          width: 100%;
          background-color: red;
          border: none;
          padding: 0.1rem 0;
          border-radius: 0.5rem;
          color: white;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    a {
      text-decoration: none;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 8.5rem;
      height: 9rem;
      overflow: hidden;
      border: 0.1px solid var(--primary);
      padding: 0;
      overflow: hidden;
      border-radius: 0.5rem;
      position: relative;
      /* padding: 0rem 0rem 2rem 0rem; */
      img {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        width: 8.5rem;
        height: 5rem;
      }
      h4 {
        font-size: 0.7rem;
        text-align: center;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.1rem 0rem;
        width: 8.5rem;
        background: var(--primary);
        color: var(--white);
        font-size: 0.7rem;
      }
      .content {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        bottom: 0;
        left: -0.4rem;
      }
    }

    .list {
      width: 100%;
      height: 9rem;
      display: flex;
      background-color: #fff;
      margin: 1rem 0;
      border-bottom: 0.1rem solid lightgray;
      border-radius: 0.5rem;
      .img {
        width: 9rem;
        height: 9rem;
        overflow: hidden;
        border-right: 2px solid #eee;
        img {
          width: 10rem;
          height: 10rem;
          cursor: pointer;
        }
      }

      .content {
        position: relative;
        padding: 1rem;
        width: 85%;
        .details {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          h4 {
            font-weight: 400;
          }
          p {
            font-weight: 500;
            color: red;
          }
        }
        button {
          position: absolute;
          bottom: 0;
          left: 1rem;
          width: 100%;
          background-color: red;
          border: none;
          padding: 0.1rem 0;
          border-radius: 0.5rem;
          color: white;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    a {
      text-decoration: none;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      border: 0.1px solid var(--primary);
      padding: 0;
      overflow: hidden;
      border-radius: 0.5rem;
      position: relative;
      /* padding: 0rem 0rem 2rem 0rem; */
      img {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        width: 10rem;
        height: 5rem;
      }
      h4 {
        font-size: 0.7rem;
        text-align: center;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.1rem 0rem;
        width: 10rem;
        background: var(--primary);
        color: var(--white);
        font-size: 0.7rem;
      }
      .content {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        bottom: 0;
        left: -0.4rem;
      }
    }

    .list {
      width: 100%;
      height: 9rem;
      display: flex;
      background-color: #fff;
      margin: 1rem 0;
      border-bottom: 0.1rem solid lightgray;
      border-radius: 0.5rem;
      .img {
        width: 9rem;
        height: 9rem;
        overflow: hidden;
        border-right: 2px solid #eee;
        img {
          width: 10rem;
          height: 10rem;
          cursor: pointer;
        }
      }

      .content {
        position: relative;
        padding: 1rem;
        width: 85%;
        .details {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          h4 {
            font-weight: 400;
          }
          p {
            font-weight: 500;
            color: red;
          }
        }
        button {
          position: absolute;
          bottom: 0;
          left: 1rem;
          width: 100%;
          background-color: red;
          border: none;
          padding: 0.1rem 0;
          border-radius: 0.5rem;
          color: white;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
export default ProductItem;
