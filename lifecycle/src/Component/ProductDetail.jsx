import React from "react";

function ProductDetail(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Details : {props.description}</p>
      <h2>Price : {props.price}</h2>
      <h3>Category : {props.category}</h3>
    </div>
  );
}

export default ProductDetail;
