import React from "react";

function ProductDetail(props) {
  const product = props.product;
  console.log(product);
  return (
    <>
      <div className="detail">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>Details : {product.description}</p>
        <h2>Price : {product.price}</h2>
        <h3>Category : {product.category}</h3>
        <button
          onClick={() => {
            props.btn(true);
          }}
          className="Button"
        >
          Back to Homepage
        </button>
      </div>
    </>
  );
}

export default ProductDetail;
