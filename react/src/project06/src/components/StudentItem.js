import React from "react";
function StudentItem(props) {
  return (
    <tr>
      <td>{props.studentId}</td>
      <td>{props.studentFirstName}</td>
      <td>{props.studentLastName}</td>
    </tr>
  );
}
export default StudentItem;
