import React from "react";

function StudentItemI(props) {
  return (
    <tr>
      <td>{props.studentId}</td>
      <td>{props.studentFistName}</td>
      <td>{props.studentLastName}</td>
    </tr>
  );
}
export default StudentItemI;
