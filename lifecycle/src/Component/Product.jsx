import React, { useEffect, useState } from "react";

function Product(props) {
  // useEffect(() => {
  //   console.log("Render from useEffect");
  //   <>
  //     <div class="container">
  //       <div class="dot dot-1"></div>
  //       <div class="dot dot-2"></div>
  //       <div class="dot dot-3"></div>
  //     </div>

  //     <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  //       <defs>
  //         <filter id="goo">
  //           <feGaussianBlur
  //             in="SourceGraphic"
  //             stdDeviation="10"
  //             result="blur"
  //           />
  //           <feColorMatrix
  //             in="blur"
  //             mode="matrix"
  //             values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
  //           />
  //         </filter>
  //       </defs>
  //     </svg>
  //   </>;
  // });
  console.log(props);
  const products = props.pro;
  return (
    <div>
      {products.map((el) => (
        <ul key={el._id} className="product">
          <li>
            <img src={el.image} alt={el.name} />
          </li>
          <li>{el.name}</li>
          <li>{el.price}</li>
          {console.log("before Button", el.selected)}
          <button /*onClick={() => buttonHandler(el)}*/>button</button>
          {console.log("inside loop", el.selected)}
          {/* {el.selected ? (
            <>
              
            </>
          ) : (
            <> </>
          )} */}
        </ul>
      ))}
    </div>
  );
}

export default Product;
