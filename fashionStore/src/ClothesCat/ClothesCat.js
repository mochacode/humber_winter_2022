import "./ClothesCat.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const clothesCatalog1 = [
  {id: "01", item: "Leather jacket", price: "$30", description: "Classic glossy black leather jacket, perfect for all seasons", stock: "2"},
  {id: "02", item: "Silk top", price: "$16", description: "Super trendy brown silk top, great for special occassions", stock: "9"},
  {id: "03", item: "Crochet sweater", price: "$10", description: "CLassic white pleated tennis skirt, perfect for spring", stock: "4"},
  {id: "04", item: "Teddy bear coat", price: "$27", description: "Warm brown soft fur coat, great for fall", stock: "10"},
  {id: "05", item: "Cropped tee", price: "$5", description: "Plain whitee tee cropped, good for warm weather", stock: "27"}
];
const clothesCatalog2 = [
  {id: "06", item: "Red skirt", price: "$8", description: "Ruby red coloured flare skirt, perfect for summer", stock: "7"},
  {id: "07", item: "blue skirt", price: "$8", description: "Royal blue coloured flare skirt, perfect for summer", stock: "14"},
  {id: "08", item: "Tennis skirt", price: "$10", description: "Classic white pleated tennis skirt, perfect for spring", stock: "4"},
  {id: "09", item: "White jeans", price: "$15", description: "Smooth comfortable jeans in a bright white", stock: "78"},
  {id: "10", item: "Black leggings", price: "$13", description: "Soft and stretchy leggings, great for yoga and lounging", stock: "63"}
];

export const ClothesCat = () => {
  console.log('CLothes cat rendered');
  const [isReactCatalog, setReactCatalog] = useState(false);
  const navigate = useNavigate();
  const clothesCat = isReactCatalog ? clothesCatalog1 : clothesCatalog2;
  //const clothesCat = clothesCatalog;
  
  return (
    <div className="clothes-cat">
      <h1>Welcome to the Clothes Catalog</h1>
      <button id="button4">
        Cart <span>0</span>
      </button>
      <br/>
      <input type="text" id="myInput" onkeyup="searchFilter()" placeholder="Search for names.."></input>
      <br/>
      <table id="myTable">
        <thead>
          <tr class="header">
            <th>ID</th>
            <th>Item</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Add item to cart</th>
          </tr>
        </thead>
        <tbody>
          {clothesCat.map(({id, item, price, description, stock}, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{item}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{stock}</td>
              <td><a class="add-cart cart" href="#" onClick={() => navigate('/cart')}>Add to cart</a><br/></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <br/>
      
      <div class="button">
      <button id="button1" onClick={() => setReactCatalog((prevState) => !prevState)}>
        Switch Clothes Catalogs
      </button><br/><br/>
      <div>
        
      </div>  
        <p>
         Want to change accounts? Click this button to return to the login page!
      </p>
      <button id="button2" onClick={() => navigate('/')}>
          Back to login!
        </button> 
      </div>
    </div>
  );
};

//red, orange, yellow, green, blue, indigo, violet, brown, white, pink, black, clear
//silk, fur, cotten, velvet, leather, jean, 