import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles/product.css'

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  console.log(Products);

return (
    <div className="centerGrid">
      <div className="productGrid">
        {Products.map((product) => (
          <div key={product.id} className="productCard">
          <img src={product.image} alt={product.name} className="productImg" />
          <h2 className="productTitle">{product.name}</h2>
          <h3 className="productPrice">${product.price}</h3>
          <p className="productDescription">{product.description}</p>
          <button className="atcButton">Add To Cart</button>
        </div>
        ))}
      </div>
    </div>
  );
};
export default Products;




// import React, { useEffect, useState } from 'react'
// import Card from '../Components/Card'
// // import listOfProducts from '../products.json'
// import Axios from "axios";



// const Product = () => {
// const [products, setProducts] = useState([]);
// // useEffect(() => {

// // setProducts(listOfProducts)
// // console.log(listOfProducts)
// // }, []);
// useEffect(() => {
//   Axios.get('http://localhost:7000/products')
//   //
//   .then((response) => {
//     // setSelectedColor("all");
//     console.log(response);
//     setProducts(response.data || []);
//   })
//   .catch((err) => {
//     throw err;
//   });
// }, []); 

//   return (
//     <div>
      
// <Card props = {products} />
//     </div>
//   )
// }

// export default Product
