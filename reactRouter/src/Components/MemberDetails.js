import React from "react";

function MemberDetails(props) {
  const mem = props.mem;
  return (
    <div className="profile">
      <img src={mem.image} alt={mem.name} />
      <h1>{mem.name}</h1>
      <p class="title">{mem.education}</p>
      <p>{mem.address}</p>
      <p>
        <button className="contactbtn">{mem.phone}</button>
      </p>
    </div>
  );
}

export default MemberDetails;
