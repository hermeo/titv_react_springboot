import React from "react";

function StudentItemI() {
  const id = "1";
  const firstName = "Phạm Đình";
  const lastName = "Tuấn";

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
  );
}
export default StudentItemI;
