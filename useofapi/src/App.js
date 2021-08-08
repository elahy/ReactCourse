import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import ProductList from "./Components/ProductList";
import DeleteProduct from "./Components/DeleteProduct";
import AddProduct from "./Components/AddProduct";
import Policy from "./Components/Policy";
import NotFound from "./Components/NotFound";
import ProductDetails from "./Components/ProductDetails";
import Success from "./Components/Success";
import UpdateProduct from "./Components/UpdateProduct";

function App() {
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductList(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
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
                  <Link to="/add" className="navbtn">
                    Add Products
                  </Link>
                </li>
                <li>
                  <Link to="/update" className="navbtn">
                    Update Products
                  </Link>
                </li>
                <li>
                  <Link to="/delete" className="navbtn">
                    Delete Products
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to="/" className="homebtn">
              Home
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <ProductList proList={productList} />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails />
              </Route>
              <Route path="/delete">
                <DeleteProduct />
              </Route>
              <Route path="/add">
                <AddProduct />
              </Route>
              <Route path="/update">
                <UpdateProduct proList={productList} />
              </Route>
              <Route path="/PrivacyPolicy">
                <Policy />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </main>
          {/* <footer>
            <div className="bottom-details">
              <span className="copyright_text">
                Copyright © 2021 Ecommerce.
              </span>
              <span className="policy_terms">
                <Link to="/PrivacyPolicy" className="privacy">
                  Privacy policy
                </Link>
              </span>
            </div>
          </footer> */}
        </>
      )}
    </>
  );
}

export default App;
