import React from "react";
import { Link } from "react-router-dom";

function Members(props) {
  const member = props.member;
  return (
    <>
      <div>
        {member.map((student) => (
          <div className="profile">
            <img src={student.image} alt={student.name} />
            <h1>{student.name}</h1>
            <p class="title">{student.education}</p>
            <p>{student.address}</p>
            <p>
              <Link to="/" className="contactbtn">
                View Details
              </Link>
            </p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/" className="backbtn">
          Go Back
        </Link>
      </div>
    </>
  );
}

export default Members;
