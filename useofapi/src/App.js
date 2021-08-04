import "./index.css";
// import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import ProductList from "./Components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // handle success
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
    setTimeout(() => setLoader(false), 2000);
  }, []);
  console.log(productList, "===products");
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="proList">
          <p>Product List</p>
          {productList.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
              {/* <Button variant="contained" color="primary">
          See Details
        </Button> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
