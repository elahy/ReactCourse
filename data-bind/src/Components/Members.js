import React from "react";

function Members(props) {
  const member = props.member;
  return (
    <div>
      {member.map((student) => (
        <div className="profile">
          <img src={student.image} alt={student.name} />
          <h1>{student.name}</h1>
          <p class="title">{student.education}</p>
          <p>{student.age}</p>
          <p>{student.address}</p>
          <p>
            <button className="contactbtn">{student.phone}</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Members;
