import React from "react";

function SinhvienItem() {
  const id = "5";
  const firstname = "Nguyễn Đình";
  const lastName = "Tuấn";
  return (
    <tr>
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastName}</td>
    </tr>
  );
}
export default SinhvienItem;
