import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductList(props) {
  const pro = useParams();
  console.log(pro, "===id");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pro.id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response, "===response");
        console.log(product, "===product");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div key={product.id} className="product">
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <Button variant="contained" color="primary">
          See Details
        </Button>
      </div>
    </div>
  );
}

export default ProductList;
