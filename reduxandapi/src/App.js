import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import Policy from "./Components/Policy";
import NotFound from "./Components/NotFound";
import ProductDetails from "./Components/ProductDetails";
import Success from "./Components/Success";
import UpdateProduct from "./Components/UpdateProduct";
import Home from "./Components/Home";
import DeleteProduct from "./Components/DeleteProduct";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
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
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navbtn">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/add" className="navbtn">
                    Add Product
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to="/signin" className="homebtn">
              Sign In
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails />
              </Route>
              <Route path="/add">
                <AddProduct />
              </Route>
              <Route path="/update/:id">
                <UpdateProduct />
              </Route>
              <Route path="/delete/:id">
                <DeleteProduct />
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
          <footer>
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
          </footer>
        </>
      )}
    </>
  );
}

export default App;
