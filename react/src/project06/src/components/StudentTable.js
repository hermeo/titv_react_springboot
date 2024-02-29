import React from "react";
import StudentItem from "./StudentItem";

function StudentTable(props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Mã sinh viên</th>
          <th scope="col">Họ đệm</th>
          <th scope="col">Tên</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => (
          <StudentItem
            studentId={student.id}
            studentFirstName={student.firstName}
            studentLastName={student.studentLastName}
          />
        ))}
      </tbody>
    </table>
  );
}
export default StudentTable;
