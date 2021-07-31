import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div className="nf">
      <h1 className="nfheader">404</h1>
      <p className="nfpara">Oops! Something is wrong.</p>
      {/* <a className="button" href="#">
        <i className="icon-home"></i> Go back in initial page, is better.
      </a> */}
    </div>
  );
}

export default NotFound;
