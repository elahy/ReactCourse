import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

function MemberDetails() {
  const params = useParams();

  const mem = data.members[params.id - 1];
  return (
    <div className="Dtlprofile">
      <img className="DtlImg" src={mem.image} alt={mem.name} />
      <h1 className="dtlName">{mem.name}</h1>
      <h4 className="prof">{mem.profession}</h4>
      <p className="para">Education: {mem.education}</p>
      <p className="para">Age: {mem.age} years old.</p>
      <p className="para">Address: {mem.address}</p>
      <p className="para">Contact: {mem.phone}</p>
      <h4 className="prof">Vision:</h4>
      <p className="dtlVision">{mem.about}</p>

      <Link to="/memberlist" className="backbtn">
        Go Back
      </Link>
    </div>
  );
}

export default MemberDetails;
