import React from "react";
import { Link } from "react-router-dom";

function AddMember() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Work:
          <input type="text" name="name" />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <Link to="/" className="backbtn">
        Go Back
      </Link>
    </div>
  );
}

export default AddMember;
