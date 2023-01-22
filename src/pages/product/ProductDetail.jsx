import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../firebase/Config';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
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
    <div>ProductDetail</div>
  )
}

export default ProductDetail