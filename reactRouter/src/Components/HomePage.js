import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1 className="homeheader">SDF</h1>
      <Link to="/join" className="joinbtn">
        Join Us
      </Link>
      <img className="logo" src="./images/logo.jpg" alt="SDF logo" />

      <p className="hometag">An Organization for the Student by the Student</p>

      <p className="homedescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <Link to="/memberlist" className="viewmemberbtn">
        Our Members
      </Link>
      <Link to="/details" className="learnbtn">
        Learn More
      </Link>

      <p className="homemenu1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <p className="homemenu2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <p className="homemenu3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <p className="homemenu4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>

      <img className="galleryim1" src="./images/SDF1.jpg" alt="SDF at work" />
      <img className="galleryim2" src="./images/SDF2.jpg" alt="SDF at work" />
      <img className="galleryim3" src="./images/SDF3.jpg" alt="SDF at work" />
      <img className="galleryim4" src="./images/SDF4.jpg" alt="SDF at work" />

      <div className="footer">
        <p>copyright &copy; SDF</p>
        <p>Contact: 01913093116 / sdf2020@gmail.com</p>
      </div>
    </div>
  );
}

export default HomePage;
