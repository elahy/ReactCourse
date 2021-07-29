import React from "react";

function HomePage() {
  return (
    <div className="home">
      <h1 className="homehead">SDF</h1>
      <img className="logo" src="./images/logo.jpg" alt="SDF logo" />

      <h2 className="hometag">
        An Organization for the Student by the Student
      </h2>

      <p className="homedescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{" "}
      </p>

      <button className="learnbtn">Learn More</button>
      <button className="joinbtn">Join Us</button>
    </div>
  );
}

export default HomePage;
