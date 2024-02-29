import React from "react";
import StudentItemI from "./StudentIem";
function StudentTable(props) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Mã sinh viên</th>
          <th>Họ đệm</th>
          <th>Tên</th>
        </tr>
      </thead>
      <tbody>
        {props.student.map((student) => (
          <StudentItemI
            studentId={student.id}
            studentFistName={student.firstName}
            studentLastName={student.lastName}
          />
        ))}
      </tbody>
    </table>
  );
}
export default StudentTable;
