import React from "react";
import Button from "@material-ui/core/Button";

function ProductList(props) {
  const productList = props.proList;
  console.log(productList);
  return (
    <div>
      {productList.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <Button variant="contained" color="primary">
            See Details
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
