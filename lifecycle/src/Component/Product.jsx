import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

function Product() {
  const [product, setProduct] = useState([
    {
      _id: 1,
      name: "Hello Kitty",
      description: "Pandant/Necklace for Woman",
      price: "120Tk",
      category: "Necklace",
    },
    {
      _id: 2,
      name: "Owl Pandant",
      description: "Pandent/Necklace for Woman",
      price: "180Tk",
      category: "Necklace",
    },
    {
      _id: 3,
      name: "Crown Shape Ring",
      description: "Ring for Woman",
      price: "150Tk",
      category: "Ring",
    },
    {
      _id: 4,
      name: "Antique Pocket Watch",
      description: "Pocket Watch for Man/Woman",
      price: "220Tk",
      category: "Watch",
    },
    {
      _id: 5,
      name: "Vintage Hand Band",
      description: "Hand Band for Man/Woman",
      price: "130Tk",
      category: "Band",
    },
    {
      _id: 6,
      name: "Multiple Ring Set",
      description: "Ring Set for Woman",
      price: "320Tk",
      category: "Ring",
    },
  ]);
  useEffect(() => {
    <>
      <div class="container">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            />
          </filter>
        </defs>
      </svg>
    </>;
  });

  const buttonHandler = (ele) => {
    console.log("button Clicked from");
    <ProductDetail e />;
  };
  return product.map((el) => (
    <div key={product._id} className="product">
      <h3>{el.name}</h3>
      <h4>{el.price}</h4>
      <button onClick={buttonHandler}>See Details</button>
    </div>
  ));
}

export default Product;
