import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles/product.css'
import productArray from './products.json'
// import Card from "../Components/Card";

const ProductArray = () => {
const [products, setProducts] = useState([]);
const [category, setCategory] = useState("");
const [price, setPrice] = useState("");
const [filteredList2, setFilteredList2] = useState([])
const [filteredList, setFilteredList] = useState([])

useEffect(() => {
    const fetchAllProducts = async () => {
        setProducts(productArray)
        setFilteredList(products)
        setFilteredList2(products)

    };
    fetchAllProducts();
  }, [category, price, filteredList, filteredList2]);

  

const catgoryFilterHandler = (e) => {
setCategory(e.target.value);
console.log(e.target.value)
}
// sort(function(a, b){return a.price-b.price})
const priceFilterHandler = (e) => {
setPrice(e.target.value)
// if (e.target.value === "low"){
//     let ascList = filteredList2.map((p) => {
        
//     }).sort((a, b) => a.price - b.price)
//     setFilteredList2(ascList)
if (e.target.value === "low") {
    const lowestPriceGoods = filteredList2.sort((el1,el2) => el1.price - el2.price);
    setFilteredList2([...lowestPriceGoods])
    console.log(filteredList2)
  }
//   if (price === "high") {
//     const highestPriceGoods = filteredList2.sort((el1,el2) => el2.price.localeCompare(el1.price, undefined, {numeric: true}));
//     setFilteredList2([...highestPriceGoods]);
//   }
//   if (price === "") {
//     setFilteredList2(products);
//   }

// if (price === "high"){
//     let descList = filteredList2.sort(function(a, b){return b-a})
//     setFilteredList(descList)
    
// }


}
return (
    <div className="centerGrid">
      <div className="filterContainer">
        <div className="filterField">
          <label htmlFor="categoryFilter" className="filterLabel">Light condition:</label>
            <select type="text" className="productFilter" name="categoryFilter" id="categoryFilter" onChange={catgoryFilterHandler} >Light Requirement:
              <option value="">Select</option>
              <option value="High Light">High Light</option>
              <option value="Medium Light">Medium Light</option>
              <option value="Low Light">Low Light</option>
              <option value="Any Light">Any Light</option>
            </select>
          </div>
          <div className="filterField">
            <label  className="filterLabel" htmlFor="priceFilter">Price:</label>
            <select type="text" className="productFilter" name="priceFilter" id="priceFilter" onChange={priceFilterHandler}>
              <option value="">Select</option>
              <option value={"Low"}>Low to High</option>
              <option value={"High"}>High to Low</option>
            </select>
          </div>
          </div>
          <div className="productGrid">
            {category && price === "" ? products.map((product) => (
              <div key={product.id} className="productCard" >
              <img src={product.image} alt={product.name} className="productImg" />
              <h2 className="productTitle">{product.name}</h2>
              <h3 className="productPrice">${product.price}</h3>
              <p className="productDescription">{product.description}</p>
              <button className="atcButton">Add To Cart</button>
            </div>
          )): products.filter(product => product.category.includes(category)).map((filteredProduct) => (
            <div key={filteredProduct.id} className="productCard" >
            <img src={filteredProduct.image} alt={filteredProduct.name} className="productImg" />
            <h2 className="productTitle">{filteredProduct.name}</h2>
            <h3 className="productPrice">{filteredProduct.price}</h3>
            <p className="productDescription">{filteredProduct.description}</p>
            <button className="atcButton">Add To Cart</button>
          </div>
          ))} 
        </div>
    </div>
  );
};
export default ProductArray;