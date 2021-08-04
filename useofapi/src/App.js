import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState();
  Axios.get("https://fakestoreapi.com/products/1").then(function (response) {
    // handle success
    setProduct(response);
    console.log(product);
  });
  return <div className="App">Hello From React</div>;
}

export default App;
