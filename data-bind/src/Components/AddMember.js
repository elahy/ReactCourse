import React from "react";

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
    </div>
  );
}

export default AddMember;
