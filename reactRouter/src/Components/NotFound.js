import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="nf">
      <h1 className="nfheader">404</h1>
      <p className="nfpara">Oops! Something is wrong.</p>
      <Link to="/" className="nfbackbtn">
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
