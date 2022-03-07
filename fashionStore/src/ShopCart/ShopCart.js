//import { ShopCart } from "./ShopCart/ShopCart";

export const ShopCart = () => {
  console.log("Cart rendered");

  let carts = document.querySelectorAll('.add-cart');
  let products = [
    {
        id: "01", item: "Leather jacket", price: "$30", description: "Classic glossy black leather jacket, perfect for all seasons", stock: 2, inCart:0},
      {id: "02", item: "Silk top", price: "$16", description: "Super trendy brown silk top, great for special occassions", stock: 9, inCart: 0},
      {id: "03", item: "Crochet sweater", price: "$10", description: "CLassic white pleated tennis skirt, perfect for spring", stock: 4, inCart: 0},
      {id: "04", item: "Teddy bear coat", price: "$27", description: "Warm brown soft fur coat, great for fall", stock: 10, inCart: 0},
      {id: "05", item: "Cropped tee", price: "$5", description: "Plain whitee tee cropped, good for warm weather", stock: 27, inCart: 0},
      {id: "06", item: "Red skirt", price: "$8", description: "Ruby red coloured flare skirt, perfect for summer", stock: 7, inCart: 0},
      {id: "07", item: "blue skirt", price: "$8", description: "Royal blue coloured flare skirt, perfect for summer", stock: 14, inCart: 0},
      {id: "08", item: "Tennis skirt", price: "$10", description: "Classic white pleated tennis skirt, perfect for spring", stock: 4, inCart: 0},
      {id: "09", item: "White jeans", price: "$15", description: "Smooth comfortable jeans in a bright white", stock: 78, inCart: 0},
      {id: "10", item: "Black leggings", price: "$13", description: "Soft and stretchy leggings, great for yoga and lounging", stock: 63, inCart: 0
    }
  ];

  function cartNums() {
    let productNums = localStorage.getItem('cartNums');

      productNums = parseInt(productNums);

      if( productNums ){
        localStorage.setItem('cartNums', productNums + 1);
        document.querySelector('.cart span').textContent = productNums + 1;
      } else {
        localStorage.setItem('cartNums', 1);
        document.querySelector('.cart span').textContent = 1;
      }
  }

  for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      function cartNums(){};
    })
  }


};