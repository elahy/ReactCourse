import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
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
    setTimeout(() => setLoader(false), 1500);
  }, []);
  console.log(productList, "===products");
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <header>
            <img className="logo" src="../images/logo.png" alt="logo" />
            <nav>
              <ul className="nav_links">
                <li>
                  <Link to="/" className="navbtn">
                    Add Products
                  </Link>
                </li>
                <li>
                  <Link to="/" className="navbtn">
                    Delete Products
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="homebtn">Home</button>
          </header>
          <main>
            <ProductList proList={productList} />
          </main>
          <footer>
            <div class="bottom-details">
              <span className="copyright_text">
                Copyright © 2021 Ecommerce.
              </span>
              <span className="policy_terms">
                <Link to="/PrivacyPolicy" className="privacy">
                  Privacy policy
                </Link>
              </span>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
