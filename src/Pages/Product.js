import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles/product.css'
// import Card from "../Components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

const [category, setCategory] = useState("");
const [price, setPrice] = useState("Low");

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/products?category=${category}&price=${price}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, [category, price]);


const catgoryFilterHandler = (e) => {
setCategory(e.target.value);
console.log(e.target.value)
}
const priceFilterHandler = (e) => {
 setPrice(e.target.value);
 console.log(e.target.value)
}
return (
    <div className="centerGrid">
              <div className="filterTitle"><h2>Filter by:</h2></div>
      <div className="filterContainer">
      <div className="filterField">
        <label htmlFor="categoryFilter" className="filterLabel">Light condition:</label>
        <select type="text" className="productFilter" name="categoryFilter" id="categoryFilter" onChange={catgoryFilterHandler} >Light Requirement:
          <option value="">All</option>
          <option value="High Light">High Light</option>
          <option value="Medium Light">Medium Light</option>
          <option value="Low Light">Low Light</option>
          <option value="Any Light">Any Light</option>
        </select>
      </div>
      <div className="filterField">
        <label  className="filterLabel" htmlFor="priceFilter">Price:</label>
        <select type="text" className="productFilter" name="priceFilter" id="priceFilter" onChange={priceFilterHandler}>
          <option value={"Low"}>Low to High</option>
          <option value={"High"}>High to Low</option>
        </select>
      </div>
      </div>
      <div className="productGrid">
        {products.map((product) => (
          <div key={product.id} className="productCard" >
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
