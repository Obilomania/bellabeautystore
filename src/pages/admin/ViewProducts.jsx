import {
  deleteDoc,
  doc
} from "firebase/firestore";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { db, storage } from "../../firebase/Config";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, STORE_PRODUCTS } from "../../redux/slice/productSlice";
import useFetchCollection from "../../customHooks/useFetchCollection";
import Loader from "../../components/Loader";

const ViewProducts = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(STORE_PRODUCTS({ products: data }));
  },[dispatch, data]);




  const deleteProduct = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, "products", id));

      const storagetRef = ref(storage, imageURL);
      await deleteObject(storagetRef);
      toast.success("Product deleted sucessfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      "Delete Product!!!",
      "Are you sure you want to delete product?",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageURL);
      },
      function cancelCb() {
        console.log("Canceled");
      },
      {
        width: "25rem",
        borderRadius: ".2rem",
        titleColor: "red",
        okButtonBackground: "red",
        cssAnimation: "zoom",
      }
    );
  };

  return (
    <Products>{isLoading && <Loader/>}
      <div className="table">
        <h1>All products</h1>
        {products.length === 0 ? (
          <p>No Product Found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const { id, name, imageURL, category } = product;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={name}
                        style={{ width: "6.5rem", height: "5rem" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td className="icons">
                      <Link to={`/admin/add-product/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>{" "}
                      &nbsp;
                      <Link to="/admin/products">
                        <FaTrashAlt
                          size={20}
                          color="red"
                          onClick={() => confirmDelete(id, imageURL)}
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Products>
  );
};
const Products = styled.div`
  h1 {
    text-align: center;
    margin: 2rem;
  }
  .table {
    padding: 0.4rem;
    width: 100%;
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;
  }
  thead {
    border-top: 2px solid #2c0355;
    border-bottom: 2px solid #2c0355;
  }
  th {
    border: 1px solid #eee;
  }
  th,
  td {
    vertical-align: top;
    text-align: left;
    padding: 0.5rem;
    &.icons {
      > * {
        margin-right: 0.3rem;
        cursor: pointer;
      }
    }
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 2rem;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }
`;
export default ViewProducts;
