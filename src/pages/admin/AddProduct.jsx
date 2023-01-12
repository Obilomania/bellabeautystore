import React, { useState } from "react";
import styled from "styled-components";
import { storage, db } from "../../firebase/Config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    name: "",
    imageURL: "",
    category: "",
    desc: "",
    benefit1: "",
    benefit2: "",
    benefit3: "",
  };
  const [product, setProduct] = useState({
    ...initialState,
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
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (e.target.files.length !==0) {
      setImagePreview(URL.createObjectURL(e.target.files[0]))     
    }
    const storageRef = ref(storage, `bellabeauty/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        imageURL: product.imageURL,
        category: product.category,
        desc: product.desc,
        benefit1: product.benefit1,
        benefit2: product.benefit2,
        benefit3: product.benefit3,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });
      toast.success("Product uploaded Successfully.");
      navigate("/admin/products");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Product>
      {isLoading && <Loader />}
      <div className="card">
        <form onSubmit={addProduct}>
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
            {uploadProgress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress < 100
                    ? `Uploading ${uploadProgress}`
                    : `Upload complete ${uploadProgress}%`}
                </div>
              </div>
            )}
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
            rows="5"
          ></textarea>

          <label>Third benefit:</label>
          <textarea
            name="benefit1"
            value={product.benefit1}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows="5"
          ></textarea>

          <label>Second benefit:</label>
          <textarea
            name="benefit2"
            value={product.benefit2}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows="5"
          ></textarea>

          <label>Third benefit:</label>
          <textarea
            name="benefit3"
            value={product.benefit3}
            required
            onChange={(e) => handleInput(e)}
            cols="30"
            rows="5"
          ></textarea>

          <button>Save Product</button>
        </form>
      </div>
      <div className="image">
        <img src={imagePreview} alt="" />
      </div>
    </Product>
  );
};
const Product = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  .image {
    width: 15rem;
    height: 15rem;
    margin-top: 3rem;
    border: 1px solid var(--primary);
    img {
      width: 15rem;
      height: 15rem;
    }
  }
  .card {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
  }
  label {
    display: block;
    font-size: 1rem;
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
    resize: none;
  }
  .progress {
    background-color: #aaa;
    border: 1px solid transparent;
    border-radius: 0.8rem;
  }
  .progress-bar {
    background-color: var(--primary);
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
    background: var(--primary);
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    transition: 400ms all ease;
    cursor: pointer;
  }
  button:hover {
    border: 1px solid var(--primary);
    background: white;
    color: var(--primary);
  }
`;
export default AddProduct;
