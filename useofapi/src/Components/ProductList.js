import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

function ProductList(props) {
  const history = useHistory();
  const productList = props.proList;
  console.log(productList);
  const buttonHanlder = (e) => {
    console.log(e, "===event");
    history.push(`/product/${e}`);
  };
  return (
    <div>
      {productList.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <Button
            onClick={() => buttonHanlder(product.id)}
            variant="contained"
            color="primary"
          >
            See Details
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
