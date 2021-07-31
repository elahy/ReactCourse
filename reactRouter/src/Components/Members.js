import React from "react";
import { Link } from "react-router-dom";

function Members(props) {
  const member = props.member;
  return (
    <>
      <div>
        {member.map((m) => (
          <div className="profile" key={m.id}>
            <img className="listimg" src={m.image} alt={m.name} />
            <h1>{m.name}</h1>
            <p className="title">{m.education}</p>
            <p>{m.address}</p>
            <p>
              <Link to={`/member/${m.id}`} className="contactbtn">
                View Details
              </Link>
            </p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/" className="backbtn">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default Members;
